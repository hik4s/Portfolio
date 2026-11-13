import { expect, it } from "vitest";
import { codeFrame } from "./codeText";
it("finishes with the exact accented text and whitespace", () => {
  const text = "Código que vira ação?";
  expect(codeFrame(text, 1)).toBe(text);
  expect(codeFrame(text, 2)).toBe(text);
});
it("preserves spaces and a resolved prefix during decoding", () => {
  const text = "Código em ação";
  const frame = codeFrame(text, 0.7);
  expect(frame.startsWith("Código")).toBe(true);
  expect(frame[6]).toBe(" ");
  expect(frame).toHaveLength(text.length);
});
