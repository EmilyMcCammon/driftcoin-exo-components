export interface BreadcrumbProps {
  /** Content: ancestors, last item is the current page */
  items: { label: string; url?: string }[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" data-component="breadcrumb" style={{ fontSize: 14, color: "var(--dc-color-textMuted)" }}>
      {items.map((item, i) => (
        <span key={item.label}>
          {i > 0 && <span aria-hidden="true"> / </span>}
          {item.url && i < items.length - 1 ? (
            <a href={item.url} style={{ color: "var(--dc-color-text)" }}>
              {item.label}
            </a>
          ) : (
            <span aria-current="page">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
