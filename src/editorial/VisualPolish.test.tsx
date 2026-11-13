import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import App from "../App";

beforeEach(() => {
  window.history.replaceState(null, "", "/");
  localStorage.clear();
});
describe("acabamento visual e conteúdo pessoal", () => {
  it("apresenta o autor e a origem do trabalho na abertura", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: "Prazer, Kauan." }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Meu primeiro projeto nasceu de uma rotina/),
    ).toBeInTheDocument();
  });
  it("oferece transições navegáveis entre os capítulos de projetos", () => {
    render(<App />);
    const next = screen.getByRole("link", {
      name: "Próximo capítulo: CareerOS",
    });
    expect(next).toHaveAttribute("href", "#projetos");
    expect(
      screen.getByRole("link", { name: "Próximo capítulo: NEXUS" }),
    ).toHaveAttribute("href", "#nexus");
  });
  it("oferece as imagens reais com ampliação e fonte identificada", () => {
    render(<App />);
    expect(
      screen.getByRole("img", {
        name: "Prancha real de identidade visual do Nexa Finance",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Ampliar imagem do NEXUS" }),
    ).toHaveAttribute("href", expect.stringContaining("nexus-overview.png"));
    expect(
      screen.getByRole("link", { name: "Ampliar identidade do Nexa Finance" }),
    ).toHaveAttribute("href", expect.stringContaining("nexa-identity.png"));
  });
  it("mantém acessível a demonstração de finanças junto à imagem real", () => {
    render(<App />);
    expect(
      screen.getByLabelText("Valor de demonstração (R$)"),
    ).toBeInTheDocument();
  });
  it("traduz a abertura pessoal e as transições", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Read in English" }));
    expect(
      screen.getByRole("heading", { name: "Hi, I’m Kauan." }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Next chapter: CareerOS" }),
    ).toBeInTheDocument();
  });
});

it("permite experimentar a regra financeira ao expandir a demonstração", () => {
  render(<App />);
  const summary = screen.getByText("Experimentar uma regra financeira");
  fireEvent.click(summary);
  const amount = screen.getByLabelText("Valor de demonstração (R$)");
  fireEvent.change(amount, { target: { value: "0" } });
  expect(
    screen.getByText(/O valor da transferência precisa ser positivo/),
  ).toBeInTheDocument();
});
