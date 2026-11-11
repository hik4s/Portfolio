import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("portfólio completo", () => {
  it("renderiza os cinco projetos diretamente e mantém os destinos da navegação", () => {
    const { container } = render(<App />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveAccessibleName(
      "Curiosidade que vira código. Código que muda rotinas.",
    );
    expect(container.querySelector("iframe")).not.toBeInTheDocument();
    for (const anchor of [
      "inicio",
      "experiencia",
      "projetos",
      "nexus",
      "nexa",
      "nexer",
    ]) {
      expect(
        container.querySelector(`section[id="${anchor}"]`),
      ).toBeInTheDocument();
      expect(
        container.querySelector(`a[href="#${anchor}"]`),
      ).toBeInTheDocument();
    }
    expect(
      screen.getByRole("link", { name: "Explorar o CareerOS ↗" }),
    ).toHaveAttribute("href", "https://github.com/hik4s/CareerOS");
    expect(
      screen.getByRole("link", { name: "Conversar com Kauan no WhatsApp" }),
    ).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("exibe conteúdo e demonstrações sem suporte a observers ou matchMedia", () => {
    render(<App />);
    expect(screen.getByText("2 oportunidades de demonstração")).toBeVisible();
    expect(
      screen.getByRole("heading", {
        name: "Do fluxo escrito à proposta de um fluxo registrado.",
      }),
    ).toBeVisible();
    expect(screen.getByText("Desenvolvimento Python Jr.")).toBeVisible();
  });
});
