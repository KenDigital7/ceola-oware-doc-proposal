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
            "--tw-prose-body": "#141210",
            "--tw-prose-headings": "#141210",
            "--tw-prose-bold": "#141210",
            "--tw-prose-quotes": "#3d5245",
            "--tw-prose-quote-borders": "#6b4423",
            "--tw-prose-bullets": "#3d5245",
            maxWidth: "none",
          },
        },
      },
      colors: {
        ink: "#141210",
        paper: "#f7f4ec",
        "paper-dark": "#ebe6d9",
        umber: "#6b4423",
        sage: "#3d5245",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        measure: "42rem",
        doc: "52rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
