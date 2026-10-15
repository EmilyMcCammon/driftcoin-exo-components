import { useId, useState, type ReactNode } from "react";

export interface DemoTabsProps {
  /** Content: tab labels */
  tabs: string[];
  /** Content: which tab starts selected, 0 based */
  defaultIndex?: number;
  /** Slot: panel content, usually a VideoEmbed */
  children?: ReactNode;
}

export function DemoTabs({ tabs, defaultIndex = 0, children }: DemoTabsProps) {
  const [active, setActive] = useState(defaultIndex);
  const id = useId();
  return (
    <div data-component="demo-tabs" style={{ display: "flex", flexDirection: "column", gap: "var(--dc-space-xl)" }}>
      <div role="tablist" aria-label="Product demos" style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {tabs.map((tab, i) => (
          <button
            key={tab}
            role="tab"
            id={`${id}-tab-${i}`}
            aria-selected={i === active}
            aria-controls={`${id}-panel`}
            onClick={() => setActive(i)}
            style={{
              minHeight: 44,
              padding: "0 24px",
              border: 0,
              borderRadius: "var(--dc-radius-pill)",
              cursor: "pointer",
              font: "600 16px var(--dc-fontFamily-body)",
              background: i === active ? "var(--dc-color-surfaceInverse)" : "var(--dc-color-surface)",
              color: i === active ? "var(--dc-color-textInverse)" : "var(--dc-color-text)",
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      <div role="tabpanel" id={`${id}-panel`} aria-labelledby={`${id}-tab-${active}`}>
        {children}
      </div>
    </div>
  );
}
