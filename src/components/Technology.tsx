import {
  Box,
  Typography,
} from "@mui/material";

import {
  IconBrandPython,
  IconBrandReact,
  IconCloud,
  IconApi,
  IconDatabase,
  IconBrandDocker,
  IconBrandTypescript,
  IconChartBar,
} from "@tabler/icons-react";

import { motion } from "framer-motion";

import Container from "./Container";
import { translations, type Language } from "../translations";

const MotionBox = motion.create(Box);

const technologies = [
  {
    key: "python",
    name: "Python",
    icon: IconBrandPython,
  },
  {
    key: "react",
    name: "React",
    icon: IconBrandReact,
  },
  {
    key: "typescript",
    name: "TypeScript",
    icon: IconBrandTypescript,
  },
  {
    key: "fastapi",
    name: "FastAPI",
    icon: IconApi,
  },
  {
    key: "cloud",
    name: "Cloud",
    icon: IconCloud,
  },
  {
    key: "databases",
    name: "Databases",
    icon: IconDatabase,
  },
  {
    key: "docker",
    name: "Docker",
    icon: IconBrandDocker,
  },
  {
    key: "dataEngineering",
    name: "Data Engineering",
    icon: IconChartBar,
  },
];

interface TechnologyProps {
  t: (typeof translations)[Language];
}

const Technology = ({ t }: TechnologyProps) => {
  return (
    <Box
      id="technology"
      sx={{
        py: {
          xs: 8,
          md: 14,
        },
        background: "#F8FAFC",
        scrollMarginTop: "80px",
      }}
    >
      <Container>
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              letterSpacing: "-0.05em",
              mb: 2,
            }}
          >
            {t.technology.title}
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              maxWidth: 760,
              fontSize: 18,
              lineHeight: 1.8,
              mb: 6,
            }}
          >
            {t.technology.description}{" "}
            <Box component="span" sx={{ color: "#2563EB", fontWeight: 700 }}>
              {t.technology.secure}
            </Box>
            ,{" "}
            <Box component="span" sx={{ color: "#2563EB", fontWeight: 700 }}>
              {t.technology.scalable}
            </Box>{" "}
            {t.technology.and}{" "}
            <Box component="span" sx={{ color: "#2563EB", fontWeight: 700 }}>
              {t.technology.maintainable}
            </Box>
            {t.technology.descriptionSuffix}
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2,1fr)",
                md: "repeat(4,1fr)",
              },
              gap: 3,
            }}
          >
            {technologies.map((tech) => (
              <MotionBox
                key={tech.name}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.25 }}
                sx={{
                  background: "#FFFFFF",
                  borderRadius: 4,
                  p: 3,
                  boxShadow: "0 15px 40px rgba(15,23,42,.06)",
                  border: "1px solid rgba(15,23,42,.06)",
                  transition: "all .3s ease",
                  "&:hover": {
                    boxShadow: "0 20px 50px rgba(37,99,235,.12)",
                    borderColor: "rgba(37,99,235,.18)",
                  },
                }}
              >
                <Box sx={{ color: "#2563EB", mb: 2 }}>
                  <tech.icon size={38} />
                </Box>

                <Typography
                  sx={{
                    fontWeight: 800,
                    mb: 1,
                    color: "#0F172A",
                  }}
                >
                  {tech.name}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(15,23,42,.7)",
                    lineHeight: 1.7,
                  }}
                >
                  {t.technology.cards[tech.key as keyof typeof t.technology.cards]}
                </Typography>
              </MotionBox>
            ))}
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Technology;