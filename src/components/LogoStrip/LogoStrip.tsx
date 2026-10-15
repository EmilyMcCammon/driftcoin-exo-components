export interface Logo {
  name: string;
  /** Optional logo asset. The name is shown as a wordmark when this is empty. */
  src?: string;
}

export interface LogoStripProps {
  /** Content */
  label?: string;
  /** Content: collection of customer logos */
  logos: Logo[];
}

export function LogoStrip({ label, logos }: LogoStripProps) {
  return (
    <div data-component="logo-strip" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--dc-space-xl)", textAlign: "center" }}>
      {label && (
        <p style={{ margin: 0, fontFamily: "var(--dc-fontFamily-mono)", fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--dc-color-textMuted)" }}>
          {label}
        </p>
      )}
      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexWrap: "wrap", gap: "24px 56px", justifyContent: "center", alignItems: "center" }}>
        {logos.map((logo) => (
          <li key={logo.name} style={{ fontFamily: "var(--dc-fontFamily-display)", fontWeight: 700, fontSize: 24, color: "var(--dc-palette-slate-500)" }}>
            {logo.src ? <img src={logo.src} alt={logo.name} style={{ height: 32, width: "auto" }} /> : logo.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
