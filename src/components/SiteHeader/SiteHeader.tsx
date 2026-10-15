import type { ReactNode } from "react";
import "./SiteHeader.css";

export interface NavItem {
  label: string;
  url: string;
  active?: boolean;
}

export interface SiteHeaderProps {
  /** Content */
  brandName?: string;
  /** Content: primary navigation links */
  navItems: NavItem[];
  /** Slot: buttons on the right, usually Sign in and Get started */
  actions?: ReactNode;
}

export function SiteHeader({ brandName = "driftcoin", navItems, actions }: SiteHeaderProps) {
  return (
    <header className="dc-site-header" data-component="site-header">
      <div className="dc-container dc-site-header__inner">
        <a className="dc-site-header__brand" href="/" aria-label={`${brandName} home`}>
          <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
            <circle cx="16" cy="16" r="15" fill="var(--dc-color-surfaceInverse)" />
            <path d="M9 19c3-5 7-5 9-2s5 3 7-1" fill="none" stroke="var(--dc-color-accent)" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <span>{brandName}</span>
        </a>
        <nav aria-label="Primary" className="dc-site-header__nav">
          {navItems.map((item) => (
            <a key={item.label} href={item.url} aria-current={item.active ? "page" : undefined}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="dc-site-header__actions">{actions}</div>
      </div>
    </header>
  );
}
