const glyphs = Array.from("{}[]#@$%*<>/+=_");
/** Resolve a growing prefix; keep whitespace and restore the exact original text. */
export function codeFrame(text: string, progress: number): string {
  if (progress >= 1) return text;
  const letters = Array.from(text);
  const resolved = Math.floor(
    Math.max(0, (progress - 0.18) / 0.82) * letters.length,
  );
  return letters
    .map((letter, index) =>
      /\s/.test(letter) || index < resolved
        ? letter
        : glyphs[Math.floor(Math.random() * glyphs.length)],
    )
    .join("");
}
