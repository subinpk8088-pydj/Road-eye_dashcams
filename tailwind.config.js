/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cloud: "#F8FAFC", mist: "#E2E8F0", steel: "#64748B", ink: "#0F172A", slate: "#1E293B",
        blue: "#2563EB", "deep-blue": "#1D4ED8", amber: "#F59E0B", red: "#EF4444",
      },
      fontFamily: { display: ["'Space Grotesk'", "sans-serif"], body: ["'Inter'", "sans-serif"] },
      backgroundImage: {
        "blue-gradient": "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
        "amber-gradient": "linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(15, 23, 42, 0.1)",
        soft: "0 10px 40px -10px rgba(37, 99, 235, 0.4)",
      },
      screens: { xs: "320px" },
      keyframes: { shimmer: { "0%": { backgroundPosition: "100% 50%" }, "100%": { backgroundPosition: "0 50%" } } },
      animation: { shimmer: "shimmer 1.4s ease infinite" },
    },
  },
  plugins: [],
};
