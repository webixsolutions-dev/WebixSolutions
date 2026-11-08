// Print the canonical feed from a running build. Redirect stdout to save a copy.
const origin = process.argv[2] ?? "http://localhost:3000";
const response = await fetch(new URL("/llms-full.txt", origin));

if (!response.ok || !response.headers.get("content-type")?.startsWith("text/plain")) {
  throw new Error(`Unable to export /llms-full.txt (HTTP ${response.status})`);
}

process.stdout.write(await response.text());
