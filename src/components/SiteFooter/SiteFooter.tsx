import "./SiteFooter.css";

export interface FooterColumn {
  title: string;
  links: { label: string; url: string }[];
}

export interface SiteFooterProps {
  /** Content */
  brandName?: string;
  /** Content */
  tagline?: string;
  /** Content */
  columns: FooterColumn[];
  /** Content */
  legal: string;
  /** Content: shown on the region and language button */
  localeLabel?: string;
}

export function SiteFooter({ brandName = "driftcoin", tagline, columns, legal, localeLabel = "United States · English" }: SiteFooterProps) {
  return (
    <footer className="dc-footer" data-component="site-footer">
      <div className="dc-container dc-footer__inner">
        <div className="dc-footer__columns">
          <div className="dc-footer__brand">
            <span>{brandName}</span>
            {tagline && <small>{tagline}</small>}
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <div className="dc-footer__title">{col.title}</div>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.url}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="dc-footer__legal">
          <span>{legal}</span>
          <div className="dc-footer__legal-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
          <button type="button" className="dc-footer__locale">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
            </svg>
            {localeLabel}
          </button>
        </div>
      </div>
    </footer>
  );
}
