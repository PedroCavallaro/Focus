import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                mont: "var(--font-mont)",
            },
            keyframes: {
                error_toast: {
                    "0%": {
                        right: "-100%",
                    },
                    "100%": {
                        right: "0px",
                    },
                },
                open: {
                    "0%": {
                        height: "0px",
                        display: "flex",
                    },
                    "100%": {
                        height: "45rem",
                        display: "block",
                    },
                },
                modal: {
                    "0%": {
                        height: "45rem",
                        display: "block",
                    },
                    "100%": {
                        height: "0px",
                        display: "hidden",
                    },
                },
                close: {
                    "0%": { zIndex: "50" },
                    "100%": { zIndex: "-10" },
                },
            },
            animation: {
                modal: "modal 0.75s",
                close: "close 1s",
                open: "open 0.5s",
                error_toast: "error_toast 0.75s",
            },
        },
    },
    plugins: [],
};
export default config;
