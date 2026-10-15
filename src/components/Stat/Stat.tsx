export interface StatProps {
  /** Content: the number, for example "$2B+" */
  value: string;
  /** Content */
  label: string;
}

export function Stat({ value, label }: StatProps) {
  return (
    <div data-component="stat" style={{ textAlign: "center" }}>
      <div style={{ fontFamily: "var(--dc-fontFamily-display)", fontSize: 56, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>{value}</div>
      <div style={{ color: "var(--dc-color-textMuted)" }}>{label}</div>
    </div>
  );
}
