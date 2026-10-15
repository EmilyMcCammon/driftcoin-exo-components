import { useId, useState } from "react";

export interface FaqItemProps {
  /** Content */
  question: string;
  /** Content */
  answer: string;
  /** Design: start expanded */
  defaultOpen?: boolean;
}

export function FaqItem({ question, answer, defaultOpen = false }: FaqItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  return (
    <div data-component="faq-item" style={{ borderTop: "1px solid var(--dc-color-borderStrong)", borderBottom: "1px solid var(--dc-color-borderStrong)", marginTop: -1, padding: "24px 0" }}>
      <button
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(!open)}
        style={{
          all: "unset",
          cursor: "pointer",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          width: "100%",
          minHeight: 44,
          fontFamily: "var(--dc-fontFamily-display)",
          fontSize: 20,
          fontWeight: 600,
        }}
      >
        {question}
        <span aria-hidden="true" style={{ fontSize: 26, color: "var(--dc-color-primary)" }}>
          {open ? "−" : "+"}
        </span>
      </button>
      <div id={id} hidden={!open}>
        <p style={{ margin: "12px 0 0", color: "var(--dc-color-textMuted)", lineHeight: 1.6, maxWidth: 640 }}>{answer}</p>
      </div>
    </div>
  );
}
