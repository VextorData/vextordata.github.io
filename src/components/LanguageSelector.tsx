import { ToggleButton, ToggleButtonGroup } from "@mui/material";

import { type Language } from "../translations";

interface LanguageSelectorProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

const LanguageSelector = ({ language, onLanguageChange }: LanguageSelectorProps) => {
  return (
    <ToggleButtonGroup
      value={language}
      exclusive
      size="small"
      onChange={(_, nextValue) => {
        if (nextValue) {
          onLanguageChange(nextValue as Language);
        }
      }}
      sx={{
        borderRadius: "999px",
        background: "rgba(255,255,255,0.7)",
        border: "1px solid rgba(15,23,42,0.08)",
        overflow: "hidden",
        ml: 1,
        "& .MuiToggleButtonGroup-grouped": {
          border: 0,
          px: 1.3,
          py: 0.7,
          color: "#334155",
          fontWeight: 700,
          minWidth: 42,
          textTransform: "uppercase",
          letterSpacing: "0.04em",
        },
        "& .Mui-selected": {
          background: "linear-gradient(135deg,#2563EB,#06B6D4) !important",
          color: "#FFFFFF !important",
        },
      }}
    >
      <ToggleButton value="es">ES</ToggleButton>
      <ToggleButton value="en">EN</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default LanguageSelector;
