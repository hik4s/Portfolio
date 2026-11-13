import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { CsvLab } from "./CsvLab";

describe("CSV lab", () => {
  it("starts with instructions and loads synthetic data only on request", () => {
    render(<CsvLab locale="en" />);
    expect(screen.queryByRole("table")).not.toBeInTheDocument();
    fireEvent.click(
      screen.getByRole("button", { name: "Load synthetic sample" }),
    );
    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(
      screen.getByText("3 records · 1 valid · 2 with issues"),
    ).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Clear" }));
    expect(screen.queryByRole("table")).not.toBeInTheDocument();
  });
  it("recovers from an invalid upload through the sample button in Portuguese", async () => {
    render(<CsvLab locale="pt" />);
    const file = new File(["wrong,header"], "test.csv", { type: "text/csv" });
    fireEvent.change(screen.getByLabelText("Selecionar CSV local"), {
      target: { files: [file] },
    });
    await waitFor(() => expect(screen.getByRole("alert")).toBeInTheDocument());
    fireEvent.click(
      screen.getByRole("button", { name: "Carregar exemplo sintético" }),
    );
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    expect(
      screen.getByText("3 registros · 1 válido(s) · 2 com problemas"),
    ).toBeInTheDocument();
  });
  it("reports size limits immediately and allows clearing the error", () => {
    render(<CsvLab locale="en" />);
    fireEvent.change(screen.getByLabelText("Select local CSV"), {
      target: { files: [new File(["x".repeat(1024 * 1024 + 1)], "large.csv")] },
    });
    expect(screen.getByRole("alert")).toHaveTextContent("1 MiB");
    fireEvent.click(screen.getByRole("button", { name: "Clear" }));
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });
  it("downloads a report and revokes its temporary URL on unmount", () => {
    const create = vi.fn(() => "blob:csv-report");
    const revoke = vi.fn();
    vi.stubGlobal(
      "URL",
      Object.assign(class {}, {
        createObjectURL: create,
        revokeObjectURL: revoke,
      }),
    );
    const click = vi
      .spyOn(HTMLAnchorElement.prototype, "click")
      .mockImplementation(() => {});
    try {
      const { unmount } = render(<CsvLab locale="en" />);
      fireEvent.click(
        screen.getByRole("button", { name: "Load synthetic sample" }),
      );
      fireEvent.click(
        screen.getByRole("button", { name: "Download CSV report" }),
      );
      expect(create.mock.calls).toHaveLength(1);
      unmount();
      expect(revoke).toHaveBeenCalledWith("blob:csv-report");
    } finally {
      click.mockRestore();
      vi.unstubAllGlobals();
    }
  });
});
