import { render, screen, fireEvent } from "@testing-library/react";
import { beforeEach, expect, it } from "vitest";
import App from "../App";
beforeEach(() => {
  history.replaceState(null, "", "/");
  localStorage.clear();
});
it("offers all nine text effects while preserving the code titles and CTAs", () => {
  const { container } = render(<App />);
  const effects = new Set(
    Array.from(container.querySelectorAll("[data-text-effect]"), (e) =>
      e.getAttribute("data-text-effect"),
    ),
  );
  expect([...effects].sort()).toEqual([
    "assembly",
    "focus",
    "glow",
    "light",
    "morph",
    "outline",
    "stamp",
    "typing",
    "wave",
  ]);
  expect(container.querySelectorAll("[data-code-text]")).toHaveLength(2);
  expect(
    screen.getByRole("link", { name: "Conversar com Kauan no WhatsApp" }),
  ).toHaveClass("button");
});
it("keeps complete readable heading names in both languages", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { name: "Construir é também saber explicar." }),
  ).toBeVisible();
  fireEvent.click(screen.getByRole("button", { name: "Read in English" }));
  expect(
    screen.getByRole("heading", {
      name: "Building also means being able to explain.",
    }),
  ).toBeVisible();
});
