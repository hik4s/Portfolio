import type { CSSProperties } from "react";
export function RelatPyDemo() {
  return (
    <div className="demo relatpy-demo">
      <div className="demo-label">{"Uma rotina que encontrou outro ritmo"}</div>
      <div className="file-stage" aria-hidden="true">
        <div className="paper-file" style={{ "--file": "2" } as CSSProperties}>
          <span className="file-ext">{"03 / arquivos.csv"}</span>
          <div className="file-lines"></div>
        </div>
        <div className="paper-file" style={{ "--file": "1" } as CSSProperties}>
          <span className="file-ext">{"02 / relatórios.csv"}</span>
          <div className="file-lines"></div>
        </div>
        <div className="paper-file" style={{ "--file": "0" } as CSSProperties}>
          <span className="file-ext">{"01 / extração.csv"}</span>
          <div className="file-lines"></div>
        </div>
        <div className="file-scanner"></div>
      </div>
      <div className="time-contrast">
        <div>
          <div className="old-time">{"30–40 min"}</div>
          <small>{"antes / processo manual"}</small>
        </div>
        <div aria-hidden="true">{"→"}</div>
        <div>
          <div className="new-time">{"~4 min"}</div>
          <small>{"depois / com RelatPy"}</small>
        </div>
      </div>
      <p className="note">
        {"Tempo aproximado de uma extração completa."}
        <br />
        {"Representação visual acelerada do processo."}
      </p>
    </div>
  );
}
export function NexerDemo() {
  return (
    <div className="demo">
      <div className="demo-label">
        {"Do gesto ao código / fluxo ilustrativo"}
      </div>
      <div className="recorder-stage">
        <div className="browser-bar">
          <i></i>
          <i></i>
          <i></i>
          <span>{"navegador / cenário de exemplo"}</span>
        </div>
        <div className="recording-area">
          <div className="mono">
            <span className="recording-dot"></span>
            {"Ações observadas"}
          </div>
          <div className="recorded-action">{"01 / selecionar o relatório"}</div>
          <div className="recorded-action">{"02 / acionar “Exportar”"}</div>
        </div>
        <div className="generated-code" aria-label="Exemplo de código Python">
          <span style={{ "--line": "0" } as CSSProperties}>
            {"# do caminho observado ao script"}
          </span>
          <span style={{ "--line": "1" } as CSSProperties}>
            {"await page.get_by_role("}
          </span>
          <span style={{ "--line": "2" } as CSSProperties}>
            {'  "button", name="Exportar"'}
          </span>
          <span style={{ "--line": "3" } as CSSProperties}>{").click()"}</span>
        </div>
      </div>
    </div>
  );
}
