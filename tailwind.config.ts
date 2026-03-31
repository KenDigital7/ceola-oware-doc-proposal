import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "var(--color-foreground)",
            "--tw-prose-headings": "var(--color-foreground)",
            "--tw-prose-bold": "var(--color-foreground)",
            "--tw-prose-quotes": "var(--color-foreground-muted)",
            "--tw-prose-quote-borders": "var(--color-accent)",
            "--tw-prose-bullets": "var(--color-accent)",
            "--tw-prose-counters": "var(--color-accent)",
            "--tw-prose-hr": "var(--color-border)",
            "--tw-prose-links": "var(--color-accent)",
            "--tw-prose-th-borders": "var(--color-border)",
            "--tw-prose-td-borders": "var(--color-border)",
            maxWidth: "none",
            color: "var(--color-foreground)",
          },
        },
      },
      colors: {
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        border: "var(--color-border)",
        foreground: "var(--color-foreground)",
        "foreground-muted": "var(--color-foreground-muted)",
        "foreground-subtle": "var(--color-foreground-subtle)",
        accent: "var(--color-accent)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        measure: "42rem",
        doc: "54rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
