import { render, screen, fireEvent } from "@testing-library/react";
import { beforeEach, afterEach, expect, it, vi } from "vitest";
import App from "../App";
beforeEach(() => {
  history.replaceState(null, "", "/");
  localStorage.clear();
});
it("offers an accessible motion preference without hiding the portfolio", () => {
  render(<App />);
  const toggle = screen.getByRole("button", { name: "Reduzir animações" });
  fireEvent.click(toggle);
  expect(
    screen.getByRole("button", { name: "Ativar animações" }),
  ).toHaveAttribute("aria-pressed", "true");
  expect(screen.getByRole("heading", { level: 1 })).toBeVisible();
  expect(localStorage.getItem("kauan-motion")).toBe("reduced");
});
it("shows five descriptive project sequences even without animation", () => {
  render(<App />);
  expect(
    screen.getAllByRole("figure", { name: /Fluxo ilustrativo/ }),
  ).toHaveLength(5);
  expect(screen.getByText("Pedido confirmado")).toBeVisible();
  expect(screen.getByText("Recebível gerado")).toBeVisible();
});
it("keeps a direct case route readable and offers the original return link", () => {
  history.replaceState(null, "", "/#case/nexus");
  const { container } = render(<App />);
  expect(container.querySelector(".case-curtain")).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "O problema" })).toBeVisible();
  expect(
    screen.getByRole("link", { name: "Voltar aos projetos" }),
  ).toHaveAttribute("href", "#nexus");
});

afterEach(() => vi.unstubAllGlobals());
it("disables smooth document scrolling for the local preference and restores it", () => {
  const previous = document.documentElement.style.scrollBehavior;
  const { unmount } = render(<App />);
  fireEvent.click(screen.getByRole("button", { name: "Reduzir animações" }));
  expect(document.documentElement.style.scrollBehavior).toBe("auto");
  unmount();
  expect(document.documentElement.style.scrollBehavior).toBe(previous);
});
it("reports system reduced motion as the effective preference", () => {
  vi.stubGlobal("matchMedia", (query: string) => ({
    matches: query.includes("prefers-reduced-motion"),
    media: query,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
  }));
  render(<App />);
  expect(
    screen.getByRole("button", { name: "Animações reduzidas pelo sistema" }),
  ).toBeDisabled();
  expect(document.documentElement.style.scrollBehavior).toBe("auto");
});
