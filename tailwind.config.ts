// export default {
//   content: ["./index.html", "./src/**/*.{ts,tsx}"],
// } satisfies import("tailwindcss").Config;

// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5", // Indigo 600
        secondary: "#FBBF24", // Amber 400
        accent: "#10B981", // Emerald 500

        primaryFocus: "#4338CA",
        secondaryFocus: "#F59E0B",
      },
    },
  },
  plugins: [],
} satisfies Config;
