import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CareerDemo, FinanceDemo, NexusDemo, Skills } from "./Demos";

describe("demonstrações preservadas na migração", () => {
  it("filtra vagas e permite voltar a todas as oportunidades", () => {
    render(<CareerDemo />);
    expect(
      screen.getByText("2 oportunidades de demonstração"),
    ).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Desenvolvimento" }));
    expect(
      screen.queryByText("Estágio em Tecnologia da Informação"),
    ).not.toBeInTheDocument();
    expect(screen.getByText("Desenvolvimento Python Jr.")).toBeInTheDocument();
    expect(
      screen.getByText("1 oportunidade de demonstração"),
    ).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "T.I." }));
    expect(
      screen.queryByText("Desenvolvimento Python Jr."),
    ).not.toBeInTheDocument();
    expect(
      screen.getByText("Estágio em Tecnologia da Informação"),
    ).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Todas" }));
    expect(
      screen.getByText("2 oportunidades de demonstração"),
    ).toBeInTheDocument();
  });

  it("atualiza a explicação e a seleção do módulo de negócio", () => {
    render(<NexusDemo />);
    fireEvent.click(screen.getByRole("button", { name: "Estoque" }));
    expect(screen.getByRole("button", { name: "Estoque" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByText(/Estoque: a organização/)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Financeiro" }));
    expect(
      screen.getByText(/Financeiro: contas a receber/),
    ).toBeInTheDocument();
  });

  it("rejeita conta de origem igual ao destino e recupera a validação", () => {
    render(<FinanceDemo />);
    fireEvent.change(screen.getByLabelText("Transferir da conta A para"), {
      target: { value: "A" },
    });
    expect(
      screen.getByText("Contas de origem e destino precisam ser diferentes."),
    ).toBeInTheDocument();
    fireEvent.change(screen.getByLabelText("Transferir da conta A para"), {
      target: { value: "B" },
    });
    expect(
      screen.getByText("Regra atendida: contas diferentes e valor positivo."),
    ).toBeInTheDocument();
  });

  it.each(["", "0", "-1"])(
    "rejeita valor vazio ou não positivo: %s",
    (value) => {
      render(<FinanceDemo />);
      fireEvent.change(screen.getByLabelText("Valor de demonstração (R$)"), {
        target: { value },
      });
      expect(
        screen.getByText("O valor da transferência precisa ser positivo."),
      ).toBeInTheDocument();
    },
  );

  it("aceita valor decimal positivo", () => {
    render(<FinanceDemo />);
    fireEvent.change(screen.getByLabelText("Valor de demonstração (R$)"), {
      target: { value: "0.01" },
    });
    expect(
      screen.getByText("Regra atendida: contas diferentes e valor positivo."),
    ).toBeInTheDocument();
  });

  it("mostra a evidência da tecnologia selecionada", () => {
    render(<Skills />);
    const group = screen.getByRole("group", { name: "Explorar conhecimentos" });
    fireEvent.click(within(group).getByRole("button", { name: "Kotlin()" }));
    expect(screen.getByText(/No Nexa Finance, Kotlin/)).toBeInTheDocument();
    expect(
      within(group).getByRole("button", { name: "Kotlin()" }),
    ).toHaveAttribute("aria-pressed", "true");
  });
});
