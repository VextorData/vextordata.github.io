import { useEffect, useState } from "react";

import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { motion, AnimatePresence } from "framer-motion";

import Container from "./Container";
import LanguageSelector from "./LanguageSelector";
import { translations, type Language } from "../translations";

import logo from "../assets/logo.png";

const MotionBox = motion.create(Box);

interface NavbarProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
  t: (typeof translations)[Language];
}

const Navbar = ({ language, onLanguageChange, t }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { key: "products", label: t.nav.products },
    { key: "technology", label: t.nav.technology },
    { key: "about", label: t.nav.about },
  ];

  const handleNavigation = (item: string) => {
    if (item === "about") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      return;
    }

    const sections: Record<string, string> = {
      products: "products",
      technology: "technology",
      contact: "contact",
    };

    const sectionId = sections[item];

    if (sectionId) {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: scrolled ? "rgba(248,250,252,0.78)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(15,23,42,.08)" : "none",
        transition: "all .35s ease",
      }}
    >
      <Container>
        <Toolbar
          disableGutters
          sx={{
            height: 84,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box
              component="img"
              src={logo}
              alt="VextorData"
              sx={{
                width: { xs: 72, md: 84 },
                height: { xs: 72, md: 84 },
                objectFit: "contain",
                filter: "drop-shadow(0 10px 22px rgba(37,99,235,.35))",
              }}
            />

            <Typography
              sx={{
                fontSize: 22,
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color: "#0F172A",
              }}
            >
              VextorData
            </Typography>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 0.5,
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item.key}
                onClick={() => handleNavigation(item.key)}
                sx={{ color: "#334155", fontWeight: 600, px: 2 }}
              >
                {item.label}
              </Button>
            ))}

            <Button
              variant="contained"
              onClick={() => handleNavigation("contact")}
              sx={{
                ml: 2,
                px: 3,
                borderRadius: "999px",
                background: "linear-gradient(135deg,#2563EB,#06B6D4)",
                "&:hover": { transform: "translateY(-2px)" },
                transition: "all .25s ease",
              }}
            >
              {t.nav.contact}
            </Button>

            <LanguageSelector language={language} onLanguageChange={onLanguageChange} />
          </Box>

          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              gap: 1,
            }}
          >
            <LanguageSelector language={language} onLanguageChange={onLanguageChange} />
            <IconButton onClick={() => setMobileOpen(!mobileOpen)} sx={{ color: "#0F172A" }}>
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <MotionBox
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            sx={{
              overflow: "hidden",
              background: "rgba(248,250,252,.95)",
              backdropFilter: "blur(20px)",
              px: 3,
              pb: 3,
            }}
          >
            {[...menuItems, { key: "contact", label: t.nav.contact }].map((item) => (
              <Button
                key={item.key}
                fullWidth
                onClick={() => {
                  setMobileOpen(false);
                  setTimeout(() => {
                    handleNavigation(item.key);
                  }, 200);
                }}
                sx={{
                  justifyContent: "flex-start",
                  py: 1.5,
                  color: "#334155",
                  fontWeight: 600,
                }}
              >
                {item.label}
              </Button>
            ))}
          </MotionBox>
        )}
      </AnimatePresence>
    </AppBar>
  );
};

export default Navbar;