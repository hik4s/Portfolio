import { useEffect, useId, useRef, useState } from "react";
import {
  analyzeCsv,
  buildReport,
  COLUMNS,
  CsvError,
  errorMessage,
  issueMessage,
  MAX_BYTES,
} from "../lib/csv";
import type { CsvResult, Locale } from "../lib/csv";

const SAMPLE =
  "id,equipe,inicio,fim\nDEMO-001,Equipe Alfa,2026-03-01T10:00:00Z,2026-03-01T11:00:00Z\nDEMO-002,Equipe Beta,2026-03-01T12:00:00Z,2026-03-01T11:00:00Z\nDEMO-003,,2026-02-30T10:00:00Z,2026-03-01T11:00:00Z";
const copy = {
  pt: {
    title: "Laboratório de validação CSV",
    subtitle: "Uma demonstração local de qualidade de dados.",
    instructions:
      "Carregue o exemplo sintético ou selecione um CSV local. Use apenas dados fictícios: o processamento acontece neste navegador, sem envio de arquivos.",
    format:
      "Colunas: id, equipe, inicio, fim. Separador: vírgula ou ponto e vírgula. Datas: ISO 8601 com segundos e fuso (ex.: 2026-03-01T10:00:00Z). Limites: 1 MiB e 5.000 registros.",
    input: "Selecionar CSV local",
    sample: "Carregar exemplo sintético",
    clear: "Limpar",
    download: "Baixar relatório CSV",
    waiting:
      "Nenhum dado carregado. As regras sinalizam problemas sem corrigir os valores.",
    reading: "Lendo arquivo…",
    record: "Registro",
    status: "Validação",
    valid: "Válido",
    caption: "Resultados de validação — valores originais",
    preview:
      "A tabela mostra os primeiros 100 registros. O relatório inclui todos os registros.",
    synthetic: "Exemplo sintético",
    local: "Arquivo local",
    report:
      "O relatório preserva os valores e protege células que poderiam ser interpretadas como fórmulas.",
  },
  en: {
    title: "CSV validation lab",
    subtitle: "A local data quality demonstration.",
    instructions:
      "Load the synthetic sample or select a local CSV. Use fictional data only: processing happens in this browser, without uploading files.",
    format:
      "Columns: id, equipe, inicio, fim. Delimiter: comma or semicolon. Dates: ISO 8601 with seconds and timezone (e.g. 2026-03-01T10:00:00Z). Limits: 1 MiB and 5,000 records.",
    input: "Select local CSV",
    sample: "Load synthetic sample",
    clear: "Clear",
    download: "Download CSV report",
    waiting: "No data loaded. Rules flag issues without correcting values.",
    reading: "Reading file…",
    record: "Record",
    status: "Validation",
    valid: "Valid",
    caption: "Validation results — original values",
    preview:
      "The table shows the first 100 records. The report includes every record.",
    synthetic: "Synthetic sample",
    local: "Local file",
    report:
      "The report preserves values and protects cells that could be interpreted as formulas.",
  },
};
function readFile(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new CsvError("read"));
    reader.onabort = () => reject(new CsvError("read"));
    reader.readAsText(file, "UTF-8");
  });
}
export function CsvLab({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const id = useId();
  const [result, setResult] = useState<CsvResult | null>(null);
  const [error, setError] = useState<unknown>(null);
  const [busy, setBusy] = useState(false);
  const [source, setSource] = useState<"synthetic" | "local">("synthetic");
  const input = useRef<HTMLInputElement>(null);
  const generation = useRef(0);
  const urls = useRef(new Set<string>());
  useEffect(
    () => () => {
      generation.current++;
      urls.current.forEach((url) => URL.revokeObjectURL(url));
      urls.current.clear();
    },
    [],
  );
  function reset() {
    generation.current++;
    setResult(null);
    setError(null);
    setBusy(false);
    if (input.current) input.current.value = "";
  }
  function loadSample() {
    reset();
    setSource("synthetic");
    setResult(analyzeCsv(SAMPLE));
  }
  async function upload(file: File | undefined) {
    if (!file) return;
    reset();
    const request = generation.current;
    setBusy(true);
    setSource("local");
    try {
      if (file.size > MAX_BYTES) throw new CsvError("size");
      const text = await readFile(file);
      if (request === generation.current) setResult(analyzeCsv(text));
    } catch (cause) {
      if (request === generation.current) setError(cause);
    } finally {
      if (request === generation.current) setBusy(false);
    }
  }
  function download() {
    if (!result) return;
    try {
      const url = URL.createObjectURL(
        new Blob([buildReport(result, locale)], {
          type: "text/csv;charset=utf-8",
        }),
      );
      urls.current.add(url);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = "csv-validation-report.csv";
      document.body.append(anchor);
      anchor.click();
      anchor.remove();
      window.setTimeout(() => {
        URL.revokeObjectURL(url);
        urls.current.delete(url);
      }, 1000);
    } catch (cause) {
      setError(cause);
    }
  }
  return (
    <section className="csv-lab" aria-labelledby={`${id}-title`}>
      <div className="lab-heading">
        <h3 id={`${id}-title`}>{t.title}</h3>
        <p>{t.subtitle}</p>
      </div>
      <p className="lab-instructions" id={`${id}-instructions`}>
        {t.instructions}
      </p>
      <p className="lab-format" id={`${id}-format`}>
        {t.format}
      </p>
      <div className="lab-controls">
        <button
          className="lab-button lab-primary"
          type="button"
          onClick={loadSample}
        >
          {t.sample}
        </button>
        <label className="lab-file-label" htmlFor={`${id}-file`}>
          {t.input}
        </label>
        <input
          className="lab-file-input"
          id={`${id}-file`}
          ref={input}
          type="file"
          accept=".csv,text/csv"
          aria-describedby={`${id}-instructions ${id}-format`}
          onChange={(event) => void upload(event.currentTarget.files?.[0])}
        />
        <button className="lab-button" type="button" onClick={reset}>
          {t.clear}
        </button>
      </div>
      {error !== null && (
        <p className="lab-error" role="alert">
          {errorMessage(error, locale)}
        </p>
      )}
      <div className="lab-status" role="status" aria-live="polite">
        {busy ? (
          t.reading
        ) : result ? (
          <>
            <span className="lab-source">{t[source]}</span>
            <p className="lab-summary">
              {locale === "pt"
                ? `${result.rows.length} registros · ${result.valid} válido(s) · ${result.invalid} com problemas`
                : `${result.rows.length} records · ${result.valid} valid · ${result.invalid} with issues`}
            </p>
          </>
        ) : (
          t.waiting
        )}
      </div>
      {result && (
        <div className="lab-results">
          {result.rows.length > 100 && (
            <p className="lab-preview-note">{t.preview}</p>
          )}
          <div
            className="lab-table-wrap"
            tabIndex={0}
            role="region"
            aria-label={t.caption}
          >
            <table className="lab-table">
              <caption>{t.caption}</caption>
              <thead>
                <tr>
                  <th scope="col">{t.record}</th>
                  {COLUMNS.map((column) => (
                    <th scope="col" key={column}>
                      {column}
                    </th>
                  ))}
                  <th scope="col">{t.status}</th>
                </tr>
              </thead>
              <tbody>
                {result.rows.slice(0, 100).map((row) => (
                  <tr
                    key={row.record}
                    className={
                      row.issues.length ? "lab-row-invalid" : "lab-row-valid"
                    }
                  >
                    <th scope="row">{row.record}</th>
                    {COLUMNS.map((column) => (
                      <td key={column}>{row.values[column] || "—"}</td>
                    ))}
                    <td>
                      {row.issues.length ? (
                        <ul className="lab-issues">
                          {row.issues.map((issue, index) => (
                            <li key={index}>{issueMessage(issue, locale)}</li>
                          ))}
                        </ul>
                      ) : (
                        t.valid
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button
            className="lab-button lab-download"
            type="button"
            onClick={download}
          >
            {t.download}
          </button>
          <p className="lab-report-note">{t.report}</p>
        </div>
      )}
    </section>
  );
}
