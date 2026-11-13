import {
  fireEvent,
  render,
  screen,
  within,
  waitFor,
} from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import App from "../App";

beforeEach(() => {
  window.history.replaceState(null, "", "/");
  localStorage.clear();
});

describe("nova jornada editorial", () => {
  it("abre um estudo de caso e permite retornar aos projetos", async () => {
    render(<App />);
    window.location.hash = "case/relatpy";
    fireEvent(window, new Event("hashchange"));
    expect(
      await screen.findByRole("heading", { name: "O problema" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Decisões técnicas" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Voltar aos projetos" }),
    ).toHaveAttribute("href", "#experiencia");
  });
  it("alterna para inglês também no conteúdo das demonstrações", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Read in English" }));
    expect(screen.getByRole("heading", { level: 1 })).toHaveAccessibleName(
      "Curiosity becomes code. Code changes routines.",
    );
    expect(
      screen.getByRole("link", { name: "Read RelatPy case study" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Development" }),
    ).toBeInTheDocument();
    expect(document.documentElement.lang).toBe("en");
  });
  it("oferece download de currículo existente e rotas profundas de casos", () => {
    render(<App />);
    const nav = screen.getByRole("navigation", { name: "Navegação principal" });
    expect(
      within(nav).getByRole("link", { name: "Currículo PDF" }),
    ).toHaveAttribute(
      "href",
      expect.stringContaining("curriculo-kauan-2026-11-09.pdf"),
    );
  });
  it("mostra recuperação para um caso inexistente", () => {
    window.history.replaceState(null, "", "/#case/missing");
    render(<App />);
    expect(
      screen.getByRole("heading", { name: "Este capítulo ainda não existe." }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Voltar ao início" }),
    ).toHaveAttribute("href", "#inicio");
  });
  it("permite voltar do caso pelo histórico hash", async () => {
    window.history.replaceState(null, "", "/#case/nexus");
    render(<App />);
    expect(
      screen.getByRole("heading", { name: "O problema" }),
    ).toBeInTheDocument();
    window.location.hash = "nexus";
    fireEvent(window, new Event("hashchange"));
    await waitFor(() =>
      expect(
        screen.queryByRole("heading", { name: "O problema" }),
      ).not.toBeInTheDocument(),
    );
  });
});

it("mantém o estudo de caso ao navegar pelo índice interno", async () => {
  window.history.replaceState(null, "", "/#case/nexus");
  render(<App />);
  const index = screen.getByRole("navigation", { name: "Conteúdo do caso" });
  expect(within(index).getByRole("link", { name: /Decisões/ })).toHaveAttribute(
    "href",
    "#case/nexus/decisoes",
  );
  window.location.hash = "case/nexus/decisoes";
  fireEvent(window, new Event("hashchange"));
  expect(
    await screen.findByRole("heading", { name: "O problema" }),
  ).toBeInTheDocument();
});

it("pula ao conteúdo sem sair do caso e transfere foco para a leitura", () => {
  window.history.replaceState(null, "", "/#case/nexus");
  render(<App />);
  expect(
    screen.getByRole("link", { name: "Pular para o conteúdo" }),
  ).toHaveAttribute("href", "#case/nexus/conteudo");
  expect(screen.getByRole("main")).toHaveFocus();
});

it("move o foco de teclado ao destino do índice do caso", async () => {
  window.history.replaceState(null, "", "/#case/nexus");
  render(<App />);
  window.location.hash = "case/nexus/decisoes";
  fireEvent(window, new Event("hashchange"));
  await waitFor(() =>
    expect(
      screen
        .getByRole("heading", { name: "Decisões técnicas" })
        .closest("section"),
    ).toHaveFocus(),
  );
});
