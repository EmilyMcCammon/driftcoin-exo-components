import { useState } from "react";

export interface VideoEmbedProps {
  /** Content */
  title: string;
  /** Content: for example "2:04" */
  duration?: string;
  /** Content: poster image asset */
  posterSrc?: string;
  /** Content: video file or stream URL */
  videoUrl?: string;
}

/**
 * NOTE FOR ExO TESTERS: this component is exported but deliberately left out of
 * src/registry.ts, so the "unmapped component" fallback and diagnostics can be tested.
 */
export function VideoEmbed({ title, duration, posterSrc, videoUrl }: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false);
  if (playing && videoUrl) {
    return <video data-component="video-embed" src={videoUrl} controls autoPlay style={{ width: "100%", borderRadius: "var(--dc-radius-xl)" }} />;
  }
  return (
    <div
      data-component="video-embed"
      style={{
        position: "relative",
        borderRadius: "var(--dc-radius-xl)",
        overflow: "hidden",
        background: posterSrc ? `center / cover no-repeat url(${posterSrc})` : "var(--dc-color-surfaceInverseRaised)",
        width: "100%",
        aspectRatio: "16 / 7",
        minHeight: 260,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        aria-label={`Play ${title}`}
        onClick={() => setPlaying(true)}
        style={{ width: 88, height: 88, borderRadius: "50%", border: 0, background: "var(--dc-color-accent)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
      >
        <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 5v14l11-7z" fill="var(--dc-color-accentText)" />
        </svg>
      </button>
      <div style={{ position: "absolute", left: 32, bottom: 28, color: "var(--dc-color-textInverse)" }}>
        <div style={{ fontWeight: 600 }}>{title}</div>
        {duration && <div style={{ fontSize: 14, color: "var(--dc-color-textInverseMuted)" }}>{duration}</div>}
      </div>
    </div>
  );
}
