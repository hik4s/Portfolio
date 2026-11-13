import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import App from "../App";

// jsdom does not implement these browser presentation APIs.
afterEach(() => vi.unstubAllGlobals());

describe("efeitos de apresentação", () => {
  it("mantém textos estáveis com movimento reduzido e limpa os observers", () => {
    const disconnect = vi.fn();
    const observe = vi.fn();
    const removeEventListener = vi.fn();
    vi.stubGlobal("matchMedia", () => ({
      matches: true,
      addEventListener: vi.fn(),
      removeEventListener,
    }));
    vi.stubGlobal(
      "IntersectionObserver",
      class {
        observe = observe;
        unobserve = vi.fn();
        disconnect = disconnect;
      },
    );
    const { container, unmount } = render(<App />);
    expect(screen.getByText("Curiosidade")).toHaveTextContent("Curiosidade");
    expect(container.querySelector(".wait")).toBeNull();
    expect(observe).toHaveBeenCalled();
    unmount();
    expect(disconnect).toHaveBeenCalledTimes(3);
    expect(removeEventListener).toHaveBeenCalledWith(
      "change",
      expect.any(Function),
    );
  });
});
