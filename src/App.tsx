import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Technology from "./components/Technology";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { translations, type Language } from "./translations";

import { Box } from "@mui/material";

const App = () => {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem("vextordata-language");
    return stored === "en" ? "en" : "es";
  });

  useEffect(() => {
    localStorage.setItem("vextordata-language", language);
  }, [language]);

  const t = translations[language];

  return (
    <>
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        t={t}
      />

      <Box
        sx={{
          pt: "84px",
        }}
      >
        <Hero t={t} />
        <About t={t} />
        <Projects t={t} />
        <Technology t={t} />
        <Contact t={t} />
        <Footer t={t} />
      </Box>
    </>
  );
};

export default App