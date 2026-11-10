import type { CSSProperties } from "react";
import brand0 from "../assets/símbolo-0.svg";
import brand1 from "../assets/nexus-1.svg";
import brand2 from "../assets/nexa-2.svg";
import brand3 from "../assets/relatpy-3.svg";
import brand4 from "../assets/símbolo-4.svg";
import brand5 from "../assets/nexer-5.svg";
import type { ProjectId } from "../data/projects";
export function Brand({ id }: { id: ProjectId }) {
  switch (id) {
    case "relatpy":
      return (
        <div className="brand-scene" aria-label="Marca RelatPy">
          <div className="brand-stage" data-logo="relatpy">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#f0f3f1"
              viewBox="0 0 256 256"
              role="img"
              className="brand-master"
              aria-label="Símbolo RelatPy"
            >
              <title>{"RelatPy"}</title>
              <g fill="#f0f3f1">
                <path
                  fillRule="evenodd"
                  d="M49 207V49H144A63 63 0 0 1 144 175H87V207Z M87 87V137H144A25 25 0 0 0 144 87Z"
                ></path>
                <path d="M142.41 177H179.59L209.59 207H164.41Z"></path>
              </g>
            </svg>
          </div>
          <div className="brand-name">
            <img src={brand3} alt="RelatPy" />
            <small>{"AUTOMAÇÃO APLICADA À ROTINA."}</small>
          </div>
        </div>
      );
    case "career":
      return (
        <div className="brand-scene" aria-label="Marca CareerOS">
          <div className="brand-stage" data-logo="career">
            <div
              className="auth-transition-mark logo-assembly"
              aria-hidden="true"
            >
              <div className="assembly-halo"></div>
              <svg
                className="assembly-symbol"
                viewBox="0 0 160 160"
                focusable="false"
              >
                <defs>
                  <linearGradient
                    id="assembly-fill"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                  >
                    <stop stopColor="#eee7ff"></stop>
                    <stop offset=".55" stopColor="#bba5ff"></stop>
                    <stop offset="1" stopColor="#8060ec"></stop>
                  </linearGradient>
                  <clipPath id="assembly-c">
                    <text
                      x="80"
                      y="116"
                      textAnchor="middle"
                      fontFamily="Manrope, sans-serif"
                      fontSize="116"
                      fontWeight="800"
                    >
                      {"C"}
                    </text>
                  </clipPath>
                </defs>
                <rect
                  className="assembly-tile"
                  x="20"
                  y="20"
                  width="120"
                  height="120"
                  rx="38"
                ></rect>
                <g
                  className="logo-fragment"
                  style={
                    {
                      "--dx": "100px",
                      "--dy": "0px",
                      "--turn": "-45deg",
                      "--delay": "0ms",
                    } as CSSProperties
                  }
                >
                  <rect
                    x="32"
                    y="24"
                    width="24.4"
                    height="24.4"
                    fill="url(#assembly-fill)"
                    clipPath="url(#assembly-c)"
                  ></rect>
                </g>
                <g
                  className="logo-fragment"
                  style={
                    {
                      "--dx": "-77px",
                      "--dy": "70px",
                      "--turn": "57deg",
                      "--delay": "28ms",
                    } as CSSProperties
                  }
                >
                  <rect
                    x="56"
                    y="24"
                    width="24.4"
                    height="24.4"
                    fill="url(#assembly-fill)"
                    clipPath="url(#assembly-c)"
                  ></rect>
                </g>
                <g
                  className="logo-fragment"
                  style={
                    {
                      "--dx": "9px",
                      "--dy": "-108px",
                      "--turn": "-69deg",
                      "--delay": "56ms",
                    } as CSSProperties
                  }
                >
                  <rect
                    x="80"
                    y="24"
                    width="24.4"
                    height="24.4"
                    fill="url(#assembly-fill)"
                    clipPath="url(#assembly-c)"
                  ></rect>
                </g>
                <g
                  className="logo-fragment"
                  style={
                    {
                      "--dx": "68px",
                      "--dy": "89px",
                      "--turn": "81deg",
                      "--delay": "84ms",
                    } as CSSProperties
                  }
                >
                  <rect
                    x="104"
                    y="24"
                    width="24.4"
                    height="24.4"
                    fill="url(#assembly-fill)"
                    clipPath="url(#assembly-c)"
                  ></rect>
                </g>
                <g
                  className="logo-fragment"
                  style={
                    {
                      "--dx": "-114px",
                      "--dy": "-20px",
                      "--turn": "-93deg",
                      "--delay": "112ms",
                    } as CSSProperties
                  }
                >
                  <rect
                    x="32"
                    y="48"
                    width="24.4"
                    height="24.4"
                    fill="url(#assembly-fill)"
                    clipPath="url(#assembly-c)"
                  ></rect>
                </g>
                <g
                  className="logo-fragment"
                  style={
                    {
                      "--dx": "101px",
                      "--dy": "-64px",
                      "--turn": "105deg",
                      "--delay": "140ms",
                    } as CSSProperties
                  }
                >
                  <rect
                    x="56"
                    y="48"
                    width="24.4"
                    height="24.4"
                    fill="url(#assembly-fill)"
                    clipPath="url(#assembly-c)"
                  ></rect>
                </g>
                <g
                  className="logo-fragment"
                  style={
                    {
                      "--dx": "-32px",
                      "--dy": "120px",
                      "--turn": "-117deg",
                      "--delay": "168ms",
                    } as CSSProperties
                  }
                >
                  <rect
                    x="80"
                    y="48"
                    width="24.4"
                    height="24.4"
                    fill="url(#assembly-fill)"
                    clipPath="url(#assembly-c)"
                  ></rect>
                </g>
                <g
                  className="logo-fragment"
                  style={
                    {
                      "--dx": "-59px",
                      "--dy": "-114px",
                      "--turn": "129deg",
                      "--delay": "196ms",
                    } as CSSProperties
                  }
                >
                  <rect
                    x="104"
                    y="48"
                    width="24.4"
                    height="24.4"
                    fill="url(#assembly-fill)"
                    clipPath="url(#assembly-c)"
                  ></rect>
                </g>
                <g
                  className="logo-fragment"
                  style={
                    {
                      "--dx": "124px",
                      "--dy": "45px",
                      "--turn": "-141deg",
                      "--delay": "224ms",
                    } as CSSProperties
                  }
                >
                  <rect
                    x="32"
                    y="72"
                    width="24.4"
                    height="24.4"
                    fill="url(#assembly-fill)"
                    clipPath="url(#assembly-c)"
                  ></rect>
                </g>
                <g
                  className="logo-fragment"
                  style={
                    {
                      "--dx": "-126px",
                      "--dy": "52px",
                      "--turn": "153deg",
                      "--delay": "252ms",
                    } as CSSProperties
                  }
                >
                  <rect
                    x="56"
                    y="72"
                    width="24.4"
                    height="24.4"
                    fill="url(#assembly-fill)"
                    clipPath="url(#assembly-c)"
                  ></rect>
                </g>
                <g
                  className="logo-fragment"
                  style={
                    {
                      "--dx": "59px",
                      "--dy": "-127px",
                      "--turn": "-165deg",
                      "--delay": "280ms",
                    } as CSSProperties
                  }
                >
                  <rect
                    x="80"
                    y="72"
                    width="24.4"
                    height="24.4"
                    fill="url(#assembly-fill)"
                    clipPath="url(#assembly-c)"
                  ></rect>
                </g>
                <g
                  className="logo-fragment"
                  style={
                    {
                      "--dx": "43px",
                      "--dy": "137px",
                      "--turn": "177deg",
                      "--delay": "308ms",
                    } as CSSProperties
                  }
                >
                  <rect
                    x="104"
                    y="72"
                    width="24.4"
                    height="24.4"
                    fill="url(#assembly-fill)"
                    clipPath="url(#assembly-c)"
                  ></rect>
                </g>
                <g
                  className="logo-fragment"
                  style={
                    {
                      "--dx": "-128px",
                      "--dy": "-74px",
                      "--turn": "-189deg",
                      "--delay": "336ms",
                    } as CSSProperties
                  }
                >
                  <rect
                    x="32"
                    y="96"
                    width="24.4"
                    height="24.4"
                    fill="url(#assembly-fill)"
                    clipPath="url(#assembly-c)"
                  ></rect>
                </g>
                <g
                  className="logo-fragment"
                  style={
                    {
                      "--dx": "148px",
                      "--dy": "-33px",
                      "--turn": "201deg",
                      "--delay": "364ms",
                    } as CSSProperties
                  }
                >
                  <rect
                    x="56"
                    y="96"
                    width="24.4"
                    height="24.4"
                    fill="url(#assembly-fill)"
                    clipPath="url(#assembly-c)"
                  ></rect>
                </g>
                <g
                  className="logo-fragment"
                  style={
                    {
                      "--dx": "-89px",
                      "--dy": "128px",
                      "--turn": "-213deg",
                      "--delay": "392ms",
                    } as CSSProperties
                  }
                >
                  <rect
                    x="80"
                    y="96"
                    width="24.4"
                    height="24.4"
                    fill="url(#assembly-fill)"
                    clipPath="url(#assembly-c)"
                  ></rect>
                </g>
                <g
                  className="logo-fragment"
                  style={
                    {
                      "--dx": "-21px",
                      "--dy": "-159px",
                      "--turn": "225deg",
                      "--delay": "420ms",
                    } as CSSProperties
                  }
                >
                  <rect
                    x="104"
                    y="96"
                    width="24.4"
                    height="24.4"
                    fill="url(#assembly-fill)"
                    clipPath="url(#assembly-c)"
                  ></rect>
                </g>
                <text
                  className="assembly-letter"
                  x="80"
                  y="116"
                  textAnchor="middle"
                  fontFamily="Manrope, sans-serif"
                  fontSize="116"
                  fontWeight="800"
                  fill="#fff"
                >
                  {"C"}
                </text>
              </svg>
              <span className="assembly-confirm">{"✓"}</span>
              <i className="assembly-spark spark-one"></i>
              <i className="assembly-spark spark-two"></i>
              <i className="assembly-spark spark-three"></i>
            </div>
          </div>
          <div className="brand-name">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 48"
              role="img"
              className="career-wordmark"
              aria-label="CareerOS"
            >
              <title>{"CareerOS"}</title>
              <rect width="200" height="48" rx="12" fill="#141a32"></rect>
              <rect
                x="7"
                y="7"
                width="34"
                height="34"
                rx="11"
                fill="#7053e9"
              ></rect>
              <g fontFamily="Manrope, sans-serif" fontWeight="800" fill="#fff">
                <text
                  x="24"
                  y="24"
                  dominantBaseline="central"
                  textAnchor="middle"
                  fontSize="24"
                >
                  {"C"}
                </text>
                <text x="51" y="24" dominantBaseline="central" fontSize="25">
                  {"Career"}
                  <tspan fill="#b4a2ff">{"OS"}</tspan>
                </text>
              </g>
            </svg>
            <small>{"SEU PRÓXIMO PASSO, COM CLAREZA."}</small>
          </div>
        </div>
      );
    case "nexus":
      return (
        <div className="brand-scene" aria-label="Marca NEXUS">
          <div className="brand-stage" data-logo="nexus">
            <div className="brand-orbit"></div>
            <img src={brand0} alt="Símbolo NEXUS" />
          </div>
          <div className="brand-name">
            <img src={brand1} alt="NEXUS" />
            <small>{"PROCESSOS CONECTADOS."}</small>
          </div>
        </div>
      );
    case "nexa":
      return (
        <div className="brand-scene" aria-label="Marca Nexa Finance">
          <div className="brand-stage" data-logo="nexa">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              role="img"
              className="brand-master"
              aria-label="Símbolo Nexa Finance"
            >
              <title>{"Nexa Finance — símbolo"}</title>
              <g fill="#5A1D2A">
                <path d="M48 48H208V88H128L88 128H48Z"></path>
                <path d="M208 208H48V168H128L168 128H208Z"></path>
              </g>
            </svg>
          </div>
          <div className="brand-name">
            <img src={brand2} alt="Nexa Finance" />
            <small>{"DOMÍNIO FINANCEIRO · BASE ANDROID"}</small>
          </div>
        </div>
      );
    case "nexer":
      return (
        <div className="brand-scene" aria-label="Nexer — identidade Percurso">
          <div className="brand-stage" data-logo="nexer">
            <div className="brand-orbit"></div>
            <img src={brand4} alt="Símbolo N do Nexer — Percurso" />
          </div>
          <div className="brand-name">
            <img src={brand5} alt="Nexer" />
            <small>{"SEU ESPAÇO DE AUTOMAÇÃO"}</small>
          </div>
        </div>
      );
  }
}
