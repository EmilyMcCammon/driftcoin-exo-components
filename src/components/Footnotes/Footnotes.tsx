export interface FootnotesProps {
  /** Content: numbered disclaimers, in order */
  items: string[];
}

export function Footnotes({ items }: FootnotesProps) {
  return (
    <div className="dc-container" data-component="footnotes" style={{ paddingBottom: 64 }}>
      <ol style={{ margin: 0, paddingLeft: 20, fontSize: 13, lineHeight: 1.7, color: "var(--dc-color-textMuted)", maxWidth: 900 }}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </div>
  );
}
