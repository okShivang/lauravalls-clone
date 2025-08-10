import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': 'var(--primary-bg, #000000)',
        'secondary-bg': 'var(--secondary-bg, #111111)',
        'accent-orange-red': 'var(--accent-orange-red, #FF4500)',
        'text-primary': 'var(--text-primary, #FFFFFF)',
        'text-secondary': 'var(--text-secondary, #CCCCCC)',
        'blue-accent': 'var(--blue-accent, #4169E1)',
        'green-accent': 'var(--green-accent, #32CD32)',
      },
      fontFamily: {
        'heading': 'var(--font-heading, "Anybody", sans-serif)',
        'body': 'var(--font-body, "Bai Jamjuree", sans-serif)',
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;