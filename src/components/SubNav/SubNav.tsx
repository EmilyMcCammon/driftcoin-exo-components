import type { NavItem } from "../SiteHeader/SiteHeader";

export interface SubNavProps {
  /** Content: section links, one marked active */
  items: NavItem[];
  /** Content: accessible name */
  label?: string;
}

export function SubNav({ items, label = "Section" }: SubNavProps) {
  return (
    <div data-component="sub-nav" style={{ borderBottom: "1px solid var(--dc-color-border)" }}>
      <nav aria-label={label} className="dc-container" style={{ display: "flex", gap: 28, overflowX: "auto", whiteSpace: "nowrap" }}>
        {items.map((item) => (
          <a
            key={item.label}
            href={item.url}
            aria-current={item.active ? "page" : undefined}
            style={{
              minHeight: 44,
              display: "inline-flex",
              alignItems: "center",
              textDecoration: "none",
              fontWeight: 500,
              fontSize: 15,
              color: item.active ? "var(--dc-color-primary)" : "var(--dc-color-text)",
              borderBottom: item.active ? "2px solid var(--dc-color-primary)" : "2px solid transparent",
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
