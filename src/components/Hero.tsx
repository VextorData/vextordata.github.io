import {
  Box,
  Button,
  Stack,
  Typography,
} from "@mui/material";

import { motion } from "framer-motion";

import Container from "./Container";
import BackgroundNetwork from "./BackgroundNetwork";
import FloatingLogo from "./FloatingLogo";
import { translations, type Language } from "../translations";

const MotionBox = motion.create(Box);

interface HeroProps {
  t: (typeof translations)[Language];
}

const Hero = ({ t }: HeroProps) => {
  const handleProjectsClick = () => {
    document.getElementById("products")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleContactClick = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "linear-gradient(180deg,#F8FAFC 0%,#EFF6FF 100%)",
      }}
    >
      <BackgroundNetwork />

      <Container>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: {
              xs: 6,
              md: 2,
            },
            flexDirection: {
              xs: "column",
              md: "row",
            },
          }}
        >
          <Box
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              opacity: 0.5,
              zIndex: 0,
              pointerEvents: "none",
              width: "90vw",
              maxWidth: 700,
              height: 700,
              justifyContent: "center",
              alignItems: "center",
              filter: "blur(1px)",
              "& svg": {
                width: "100%",
                height: "100%",
              },
              "& img": {
                width: "100%",
                height: "100%",
                objectFit: "contain",
              },
            }}
          >
            <FloatingLogo />
          </Box>

          <MotionBox
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            sx={{
              position: "relative",
              zIndex: 1,
              maxWidth: 760,
            }}
          >
            <Stack spacing={4}>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 900,
                  lineHeight: 1.05,
                  letterSpacing: "-0.06em",
                  fontSize: {
                    xs: "3rem",
                    md: "4rem",
                  },
                }}
              >
                {t.hero.titleFirst}
                <br />

                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(135deg,#2563EB,#06B6D4)",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {t.hero.titleSecond}
                </Box>
              </Typography>

              <Typography
                variant="h5"
                color="text.secondary"
                sx={{
                  lineHeight: 1.6,
                  maxWidth: 650,
                  fontSize: {
                    xs: "1.15rem",
                    md: "1.5rem",
                  },
                }}
              >
                {t.hero.description}
              </Typography>

              <Stack
                direction={{
                  xs: "column",
                  sm: "row",
                }}
                spacing={2}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleProjectsClick}
                  sx={{
                    px: 4,
                    borderRadius: "999px",
                    background: "linear-gradient(135deg,#2563EB,#06B6D4)",
                    "&:hover": {
                      transform: "translateY(-2px)",
                    },
                    transition: "all .25s ease",
                  }}
                >
                  {t.hero.primaryButton}
                </Button>

                <Button variant="outlined" onClick={handleContactClick}>
                  {t.hero.secondaryButton}
                </Button>
              </Stack>
            </Stack>
          </MotionBox>

          <MotionBox
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              position: "relative",
              zIndex: 1,
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              "& img": {
                width: "100%",
                maxWidth: 620,
                height: "auto",
              },
              "& svg": {
                width: "100%",
                maxWidth: 620,
                height: "auto",
              },
            }}
          >
            <FloatingLogo />
          </MotionBox>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;