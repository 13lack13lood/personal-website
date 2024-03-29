import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                bgcolor: {
                    DEFAULT: "#080808",
                    primary: "#1d1d1d",
                },
                accent: {
                    DEFAULT: "#268de0",
                    light: "#5daef0",
                },
            },
            dropShadow: {
                glow: ["0 0px 20px rgba(255 ,255, 255, 1)", "0 0px 65px rgba(255, 255, 255, 0.7)"],
                glowAccent: ["0 0px 20px rgba(34, 100, 186, 0.7)", "0 0px 65px rgba(34, 100, 186, 0.7)"],
                glowSmall: ["0 0px 10px rgba(34, 100, 186, 0.7)", "0 0px 20px rgba(34, 100, 186, 0.7)"],
            },
            backdropBlur: {
                xs: "2px",
            },
            boxShadow: {
                glow: " 0 20px 25px -10px rgb(34, 100, 186, 0.7)",
            },
            fontFamily: {
                primary: "Poppins",
            },
        },
    },
    plugins: [],
};
export default config;
