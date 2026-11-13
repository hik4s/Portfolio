import { describe, expect, it } from "vitest";
import { analyzeCsv, buildReport, CsvError, MAX_BYTES } from "./csv";

const header = "id,equipe,inicio,fim";
const dates = "2026-03-01T10:00:00Z,2026-03-01T11:00:00Z";
describe("bounded CSV validation", () => {
  it("parses BOM, CRLF, semicolons and quoted multiline fields", () => {
    const result = analyzeCsv(
      '\uFEFFid;equipe;inicio;fim\r\n1;"Equipe; \"\"A\"\"\nB";2026-03-01T10:00:00Z;2026-03-01T11:00:00Z\r\n',
    );
    expect(result.rows[0].values.equipe).toBe('Equipe; "A"\nB');
    expect(result.valid).toBe(1);
  });
  it("flags impossible dates, chronology, missing values and duplicate IDs", () => {
    const result = analyzeCsv(
      `${header}\n1,A,2026-02-30T10:00:00Z,2026-03-01T11:00:00Z\n1,,2026-03-01T12:00:00Z,2026-03-01T11:00:00Z`,
    );
    expect(result.rows[0].issues.map((i) => i.code)).toContain("date");
    expect(result.rows[0].issues.map((i) => i.code)).toContain("duplicate");
    expect(result.rows[1].issues.map((i) => i.code)).toEqual(
      expect.arrayContaining(["missing", "order", "duplicate"]),
    );
    expect(result.invalid).toBe(2);
  });
  it.each([
    "id,equipe,inicio",
    "id,equipe,inicio,inicio",
    "id,equipe,inicio,fim,extra",
  ])("rejects incorrect headers %s", (text) => {
    expect(() => analyzeCsv(text)).toThrow(CsvError);
  });
  it("rejects malformed quoting and ragged records", () => {
    expect(() => analyzeCsv(`${header}\n1,"unfinished`)).toThrow(CsvError);
    expect(() => analyzeCsv(`${header}\n1,A`)).toThrow(CsvError);
    expect(() => analyzeCsv(`${header}\n1,A"B,${dates}`)).toThrow(CsvError);
  });
  it("bounds bytes and records, accepting exactly 5000 rows", () => {
    expect(() => analyzeCsv("x".repeat(MAX_BYTES + 1))).toThrow(CsvError);
    expect(
      analyzeCsv(
        `${header}\n${Array.from({ length: 5000 }, (_, i) => `${i},A,${dates}`).join("\n")}`,
      ).rows,
    ).toHaveLength(5000);
    expect(() =>
      analyzeCsv(
        `${header}\n${Array.from({ length: 5001 }, (_, i) => `${i},A,${dates}`).join("\n")}`,
      ),
    ).toThrow(CsvError);
  });
  it("protects spreadsheet formulas and preserves CSV quotes in reports", () => {
    const result = analyzeCsv(`${header}\n=1+1,"A,B",${dates}`);
    expect(buildReport(result, "en")).toContain('"\'=1+1"');
    expect(buildReport(result, "en")).toContain('"A,B"');
  });
  it.each([
    "2026-02-29T10:00:00Z",
    "2026-01-01T24:00:00Z",
    "2026-01-01T10:00:60Z",
    "2026-01-01",
    "2026-01-01T10:00:00",
    "2026-01-01T10:00:00+25:00",
  ])("rejects invalid or ambiguous datetime %s", (date) => {
    expect(
      analyzeCsv(`${header}\n1,A,${date},2026-03-01T11:00:00Z`).rows[0].issues,
    ).toContainEqual({ code: "date", field: "inicio" });
  });
  it("compares timezone offsets and accepts leap days and reordered headers", () => {
    const result = analyzeCsv(
      "equipe,id,fim,inicio\nA,1,2024-02-29T10:00:00Z,2024-02-29T11:00:00+02:00",
    );
    expect(result.valid).toBe(1);
  });
  it("enforces UTF-8 bytes, rather than character count", () => {
    expect(() =>
      analyzeCsv(`${header}\n1,${"é".repeat(MAX_BYTES / 2)},${dates}`),
    ).toThrow(CsvError);
  });
  it.each(["+SUM(A1)", "-1+1", "@SUM(A1)", "  =1+1", "\t=1+1", "\r=1+1"])(
    "protects formula prefix %s",
    (id) => {
      const result = analyzeCsv(`${header}\n"${id}",A,${dates}`);
      expect(buildReport(result, "pt")).toContain(`"'${id}"`);
    },
  );
});
