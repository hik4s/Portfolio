import { render, screen, within } from "@testing-library/react";
import { beforeEach, expect, it } from "vitest";
import App from "../App";
beforeEach(() => {
  history.replaceState(null, "", "/");
  localStorage.clear();
});
it("keeps readable code-effect titles only in the opening and closing sections", () => {
  const { container } = render(<App />);
  const opening = screen.getByRole("heading", { level: 1 });
  const closing = screen.getByRole("heading", {
    name: "O que podemos construir juntos?",
  });
  expect(opening.querySelector("[data-code-text]")).toHaveTextContent(
    "Curiosidade",
  );
  expect(closing.querySelector("[data-code-text]")).toHaveTextContent(
    "construir juntos?",
  );
  expect(container.querySelectorAll("[data-code-text]")).toHaveLength(2);
  expect(opening).toHaveAccessibleName(
    "Curiosidade que vira código. Código que muda rotinas.",
  );
});
it("offers clear contact CTAs including conversation and the repository resume", () => {
  render(<App />);
  const contact = document.getElementById("contato")!;
  const whatsapp = within(contact).getByRole("link", {
    name: "Conversar com Kauan no WhatsApp",
  });
  expect(whatsapp).toHaveTextContent("Vamos conversar");
  expect(whatsapp).toHaveClass("button");
  const cv = within(contact).getByRole("link", { name: /^Currículo PDF/ });
  expect(cv).toHaveAttribute(
    "href",
    expect.stringContaining("Curriculo_Kauan-Inacio"),
  );
  expect(cv).toHaveAttribute("download");
  expect(within(contact).getByRole("link", { name: /GitHub/ })).toHaveClass(
    "button",
  );
});
