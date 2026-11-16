import { fireEvent, render, screen, within } from "@testing-library/react";
import { beforeEach, expect, it } from "vitest";
import App from "../App";

beforeEach(() => {
  history.replaceState(null, "", "/");
  localStorage.clear();
});

it("offers three working evaluation paths before long case studies", () => {
  const { container } = render(<App />);
  const overview = screen.getByRole("region", {
    name: "Projetos em um minuto",
  });
  expect(within(overview).getAllByRole("article")).toHaveLength(3);
  expect(
    within(overview).getByRole("link", { name: "Testar NEXUS" }),
  ).toHaveAttribute("href", "https://nexus-portfolio-ui.onrender.com");
  expect(
    within(overview).getByRole("link", { name: "Testar CareerOS" }),
  ).toHaveAttribute("href", "https://careeros-v1.onrender.com/");
  expect(
    within(overview).getByRole("link", { name: "Executar demo RelatPy" }),
  ).toHaveAttribute("href", expect.stringContaining("docs/DEMO.md"));
  expect(container.querySelector('a[href*="hik4s/Nexer"]')).toBeNull();
  expect(
    overview.compareDocumentPosition(document.getElementById("experiencia")!) &
      Node.DOCUMENT_POSITION_FOLLOWING,
  ).toBeTruthy();
});

it("explains public access and preserves that access after switching languages", () => {
  render(<App />);
  fireEvent.click(screen.getByRole("button", { name: "Read in English" }));
  const overview = screen.getByRole("region", {
    name: "Projects in one minute",
  });
  expect(
    within(overview).getByRole("link", { name: "Try NEXUS" }),
  ).toBeVisible();
  expect(screen.queryByText(/Demo account required/)).not.toBeInTheDocument();
});

it("shows screenshots of CareerOS and the reproducible RelatPy demo with provenance", () => {
  render(<App />);
  expect(
    screen.getByRole("img", { name: /CareerOS.*simulad/ }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("img", { name: /RelatPy.*fictíci/ }),
  ).toBeInTheDocument();
});
