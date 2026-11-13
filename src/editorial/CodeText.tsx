/** Stable typography footprint and accessible heading names while glyphs animate. */
export function CodeText({ text }: { text: string }) {
  return (
    <span className="code-text" data-label={text} aria-hidden="true">
      <span className="code-text-live" data-code-text={text}>
        {text}
      </span>
    </span>
  );
}
