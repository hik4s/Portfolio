export type TextEffect =
  | "typing"
  | "glow"
  | "focus"
  | "stamp"
  | "wave"
  | "outline"
  | "assembly"
  | "light"
  | "morph";
/** The accessible copy never changes; only the decorative layer is animated. */
export function MotionText({
  text,
  effect,
  stages = [],
}: {
  text: string;
  effect: TextEffect;
  stages?: string[];
}) {
  const words = text.split(/(\s+)/);
  const frames = [...stages.filter((stage) => stage !== text), text];
  const footprint = frames.reduce(
    (longest, word) => (word.length > longest.length ? word : longest),
    text,
  );
  return (
    <span className={"motion-text motion-" + effect} data-text-effect={effect}>
      <span className="motion-readable">{text}</span>
      <span className="motion-visual" aria-hidden="true">
        {effect === "morph" ? (
          <span className="morph-stack" data-footprint={footprint}>
            {frames.map((frame, i) => (
              <span
                className={
                  "morph-frame" +
                  (i === frames.length - 1 ? " morph-final" : "")
                }
                key={i}
              >
                {frame}
              </span>
            ))}
          </span>
        ) : (
          words.map((word, i) =>
            /^\s+$/.test(word) ? (
              word
            ) : (
              <span className="motion-word" key={i}>
                {Array.from(word).map((letter, j) => (
                  <span className="motion-char" key={j}>
                    {letter}
                  </span>
                ))}
              </span>
            ),
          )
        )}
      </span>
    </span>
  );
}
