import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "light",

        primary: {
            main: "#2563EB",
        },

        secondary: {
            main: "#06B6D4",
        },

        background: {
            default: "#F8FAFC",
            paper: "#FFFFFF",
        },

        text: {
            primary: "#0F172A",
            secondary: "#64748B",
        },
    },

    typography: {
        fontFamily: "Inter, sans-serif",

        h1: {
            fontWeight: 800,
            fontSize: "4rem",
        },

        h2: {
            fontWeight: 700,
        },

        h3: {
            fontWeight: 700,
        },

        button: {
            textTransform: "none",
            fontWeight: 600,
        },
    },

    shape: {
        borderRadius: 12,
    },
});

export default theme;