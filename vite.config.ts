import { defineConfig } from "vitest/config";
import { loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const siteUrl = loadEnv(mode, process.cwd(), "VITE_").VITE_SITE_URL?.replace(
    /\/+$/,
    "",
  );
  if (siteUrl && !/^https?:\/\//.test(siteUrl))
    throw new Error("VITE_SITE_URL must be an absolute HTTP(S) URL.");
  return {
    plugins: [
      react(),
      {
        name: "public-social-metadata",
        transformIndexHtml(html) {
          if (!siteUrl) return html;
          return {
            html: html
              .replace(
                'content="./assets/social-card.png"',
                `content="${siteUrl}/assets/social-card.png"`,
              )
              .replace(
                'content="%BASE_URL%assets/social-card.png"',
                `content="${siteUrl}/assets/social-card.png"`,
              ),
            tags: [
              {
                tag: "link",
                attrs: { rel: "canonical", href: siteUrl + "/" },
                injectTo: "head",
              },
              {
                tag: "meta",
                attrs: { property: "og:url", content: siteUrl + "/" },
                injectTo: "head",
              },
            ],
          };
        },
      },
    ],
    base: "./",
    test: {
      environment: "jsdom",
      setupFiles: "./src/test/setup.ts",
      clearMocks: true,
    },
  };
});
