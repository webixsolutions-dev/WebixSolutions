const radians = Math.PI / 180;
const size = 384;
const center = size / 2;
const radius = center - 1;

type Place = { lat: number; lon: number; code: string };

export function createEarthRenderer(canvas: HTMLCanvasElement, image: HTMLImageElement) {
  const context = canvas.getContext("2d");
  const source = document.createElement("canvas");
  source.width = image.naturalWidth;
  source.height = image.naturalHeight;
  const texture = source.getContext("2d", { willReadFrequently: true });
  if (!context || !texture) return;
  texture.drawImage(image, 0, 0);
  const { data: pixels } = texture.getImageData(0, 0, source.width, source.height);
  canvas.width = canvas.height = size;
  const frame = context.createImageData(size, size);
  const normals: Array<{ x: number; y: number; z: number; index: number; shade: number }> = [];
  for (let row = 0; row < size; row++) {
    for (let column = 0; column < size; column++) {
      const x = (column + 0.5 - center) / radius;
      const y = (center - row - 0.5) / radius;
      const distance = x * x + y * y;
      if (distance > 1) continue;
      const z = Math.sqrt(1 - distance);
      const index = (row * size + column) * 4;
      frame.data[index + 3] = Math.min(255, (1 - Math.sqrt(distance)) * size * 127);
      const shade = Math.max(0.37, Math.min(1.05, 0.43 + 0.64 * (-0.4 * x + 0.35 * y + 0.83 * z)));
      normals.push({ x, y, z, index, shade });
    }
  }

  return (longitude: number, latitude: number, places: Place[], active: string | null) => {
    const sin = Math.sin(latitude * radians);
    const cos = Math.cos(latitude * radians);
    for (const { x, y, z, index, shade } of normals) {
      const lon = Math.atan2(x, z * cos - y * sin) / radians + longitude;
      const lat = Math.asin(Math.max(-1, Math.min(1, y * cos + z * sin)));
      const u = Math.floor((((lon + 180) % 360 + 360) % 360) / 360 * source.width);
      const v = Math.min(source.height - 1, Math.floor((0.5 - lat / Math.PI) * source.height));
      const sample = (v * source.width + u) * 4;
      frame.data[index] = pixels[sample] * shade;
      frame.data[index + 1] = pixels[sample + 1] * shade;
      frame.data[index + 2] = pixels[sample + 2] * shade;
    }
    context.putImageData(frame, 0, 0);

    for (const place of places) {
      const angle = (place.lon - longitude) * radians;
      const sinLat = Math.sin(place.lat * radians);
      const cosLat = Math.cos(place.lat * radians);
      const forward = sinLat * sin + cosLat * Math.cos(angle) * cos;
      if (forward <= 0.06) continue;
      const x = center + radius * cosLat * Math.sin(angle);
      const y = center - radius * (sinLat * cos - cosLat * Math.cos(angle) * sin);
      const focused = active === place.code;
      context.beginPath();
      context.arc(x, y, focused ? 8 : 5, 0, 2 * Math.PI);
      context.fillStyle = focused ? "#ffffff" : "#ff4657";
      context.fill();
      context.strokeStyle = "#fff";
      context.lineWidth = focused ? 2 : 1;
      context.stroke();
      if (focused) {
        context.beginPath();
        context.arc(x, y, 14, 0, 2 * Math.PI);
        context.strokeStyle = "#ff4657";
        context.stroke();
      }
    }
  };
}
