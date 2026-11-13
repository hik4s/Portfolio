export type Locale = "pt" | "en";
export const MAX_BYTES = 1024 * 1024;
export const MAX_ROWS = 5000;
export const COLUMNS = ["id", "equipe", "inicio", "fim"] as const;
type Column = (typeof COLUMNS)[number];
export type IssueCode = "missing" | "date" | "order" | "duplicate";
export type Issue = { code: IssueCode; field?: Column };
export type CsvRow = {
  record: number;
  values: Record<Column, string>;
  issues: Issue[];
};
export type CsvResult = { rows: CsvRow[]; valid: number; invalid: number };
type ErrorCode =
  | "size"
  | "rows"
  | "syntax"
  | "headers"
  | "columns"
  | "empty"
  | "read";
const errors: Record<ErrorCode, Record<Locale, string>> = {
  size: {
    pt: "O arquivo excede o limite de 1 MiB.",
    en: "The file exceeds the 1 MiB limit.",
  },
  rows: {
    pt: "O arquivo excede o limite de 5.000 registros.",
    en: "The file exceeds the 5,000 record limit.",
  },
  syntax: {
    pt: "CSV inválido: confira as aspas e os separadores.",
    en: "Invalid CSV: check quotes and delimiters.",
  },
  headers: {
    pt: "Cabeçalhos obrigatórios, sem repetição ou extras: id, equipe, inicio, fim.",
    en: "Required headers, without duplicates or extras: id, equipe, inicio, fim.",
  },
  columns: {
    pt: "Um registro tem quantidade incorreta de colunas.",
    en: "A record has an incorrect number of columns.",
  },
  empty: {
    pt: "O CSV precisa conter pelo menos um registro.",
    en: "The CSV must contain at least one record.",
  },
  read: {
    pt: "Não foi possível ler o arquivo. Selecione outro CSV.",
    en: "The file could not be read. Select another CSV.",
  },
};
export class CsvError extends Error {
  constructor(public code: ErrorCode) {
    super(errors[code].en);
    this.name = "CsvError";
  }
}
export function errorMessage(error: unknown, locale: Locale): string {
  return errors[error instanceof CsvError ? error.code : "read"][locale];
}
export function issueMessage(issue: Issue, locale: Locale): string {
  const messages: Record<IssueCode, Record<Locale, string>> = {
    missing: {
      pt: `Campo obrigatório vazio: ${issue.field}`,
      en: `Missing required field: ${issue.field}`,
    },
    date: {
      pt: `Data ISO inválida: ${issue.field}`,
      en: `Invalid ISO date: ${issue.field}`,
    },
    order: { pt: "Fim anterior ao início", en: "End precedes start" },
    duplicate: { pt: "ID repetido", en: "Duplicate ID" },
  };
  return messages[issue.code][locale];
}

function parse(text: string, delimiter: string): string[][] {
  const records: string[][] = [];
  let row: string[] = [],
    field = "",
    quoted = false,
    closed = false;
  const finishField = () => {
    row.push(field);
    field = "";
    closed = false;
  };
  const finishRow = () => {
    finishField();
    if (row.length > 1 || row[0] !== "") records.push(row);
    row = [];
    if (records.length > MAX_ROWS + 1) throw new CsvError("rows");
  };
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (quoted) {
      if (char === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          quoted = false;
          closed = true;
        }
      } else field += char;
    } else if (char === delimiter) finishField();
    else if (char === "\n" || char === "\r") {
      if (char === "\r" && text[i + 1] === "\n") i++;
      finishRow();
    } else if (char === '"' && field === "" && !closed) quoted = true;
    else {
      if (char === '"' || closed) throw new CsvError("syntax");
      field += char;
    }
  }
  if (quoted) throw new CsvError("syntax");
  if (field || row.length || closed) finishRow();
  return records;
}
function isoTime(value: string): number | null {
  const parts =
    /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.\d{1,3})?(Z|[+-]\d{2}:\d{2})$/.exec(
      value,
    );
  if (!parts) return null;
  const [year, month, day, hour, minute, second] = parts
    .slice(1, 7)
    .map(Number);
  const days = [
    31,
    year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  if (
    month < 1 ||
    month > 12 ||
    day < 1 ||
    day > days[month - 1] ||
    hour > 23 ||
    minute > 59 ||
    second > 59
  )
    return null;
  const zone = parts[7];
  if (
    zone !== "Z" &&
    (Number(zone.slice(1, 3)) > 23 || Number(zone.slice(4)) > 59)
  )
    return null;
  const time = Date.parse(value);
  return Number.isFinite(time) ? time : null;
}
export function analyzeCsv(input: string): CsvResult {
  if (new TextEncoder().encode(input).length > MAX_BYTES)
    throw new CsvError("size");
  const text = input.replace(/^\uFEFF/, "");
  // Header names cannot contain quoted separators, so the first record identifies the dialect.
  const firstLine = text.split(/[\r\n]/, 1)[0];
  const delimiter = firstLine.includes(";") ? ";" : ",";
  const records = parse(text, delimiter);
  const headers = records.shift() ?? [];
  if (
    headers.length !== COLUMNS.length ||
    new Set(headers).size !== COLUMNS.length ||
    COLUMNS.some((name) => !headers.includes(name))
  )
    throw new CsvError("headers");
  if (!records.length) throw new CsvError("empty");
  const rows: CsvRow[] = records.map((record, index) => {
    if (record.length !== headers.length) throw new CsvError("columns");
    const values = Object.fromEntries(
      headers.map((name, i) => [name, record[i]]),
    ) as Record<Column, string>;
    const issues: Issue[] = [];
    COLUMNS.forEach((field) => {
      if (!values[field].trim()) issues.push({ code: "missing", field });
    });
    const start = isoTime(values.inicio),
      end = isoTime(values.fim);
    if (values.inicio.trim() && start === null)
      issues.push({ code: "date", field: "inicio" });
    if (values.fim.trim() && end === null)
      issues.push({ code: "date", field: "fim" });
    if (start !== null && end !== null && end < start)
      issues.push({ code: "order" });
    return { record: index + 2, values, issues };
  });
  const counts = new Map<string, number>();
  rows.forEach((row) => {
    if (row.values.id.trim())
      counts.set(row.values.id, (counts.get(row.values.id) ?? 0) + 1);
  });
  rows.forEach((row) => {
    if ((counts.get(row.values.id) ?? 0) > 1)
      row.issues.push({ code: "duplicate" });
  });
  const invalid = rows.filter((row) => row.issues.length > 0).length;
  return { rows, valid: rows.length - invalid, invalid };
}
function csvCell(value: string): string {
  const protectedValue =
    /^[\s\u0000-\u001f]*[=+\-@]/.test(value) || /^[\t\r\n]/.test(value)
      ? `'${value}`
      : value;
  return `"${protectedValue.replace(/"/g, '""')}"`;
}
export function buildReport(result: CsvResult, locale: Locale): string {
  const labels =
    locale === "pt"
      ? ["registro", ...COLUMNS, "status", "problemas"]
      : ["record", ...COLUMNS, "status", "issues"];
  const rows = result.rows.map((row) => [
    String(row.record),
    ...COLUMNS.map((field) => row.values[field]),
    row.issues.length
      ? locale === "pt"
        ? "Revisar"
        : "Review"
      : locale === "pt"
        ? "Válido"
        : "Valid",
    row.issues.map((issue) => issueMessage(issue, locale)).join("; "),
  ]);
  return (
    "\uFEFF" +
    [labels, ...rows].map((row) => row.map(csvCell).join(",")).join("\r\n")
  );
}
