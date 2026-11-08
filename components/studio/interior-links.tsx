import { ArrowDown } from "lucide-react";

export function InteriorLinks({ links }: { links: readonly { id: string; label: string }[] }) {
  return (
    <nav aria-label="On this page" className="interior-links">
      <ul>
        {links.map(({ id, label }) => (
          <li key={id}><a href={`#${id}`}>{label}<ArrowDown size={14} aria-hidden="true" /></a></li>
        ))}
      </ul>
    </nav>
  );
}
