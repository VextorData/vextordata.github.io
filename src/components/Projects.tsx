import {
  Box,
  Typography,
} from "@mui/material";

import { motion } from "framer-motion";

import Container from "./Container";
import ProjectCard from "./ProjectCard";
import { translations, type Language } from "../translations";

const MotionBox = motion.create(Box);

const projects = [
  {
    title: "PMS Monitor",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    tags: ["EMA", "SPOR", "PMS", "Medicinal Products", "Monitoring"],
  },
];

interface ProjectsProps {
  t: (typeof translations)[Language];
}

const Projects = ({ t }: ProjectsProps) => {
  return (
    <Box
      id="products"
      sx={{
        py: {
          xs: 8,
          md: 14,
        },
        background:
          "linear-gradient(135deg,#0F172A 0%,#1E3A8A 55%,#2563EB 100%)",
        scrollMarginTop: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container>
        <MotionBox
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "#FFFFFF",
              fontWeight: 900,
              letterSpacing: "-0.05em",
              mb: 2,
            }}
          >
            {t.projects.title}
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,.75)",
              maxWidth: 700,
              mb: 6,
              fontSize: 18,
              lineHeight: 1.7,
            }}
          >
            {t.projects.description}
          </Typography>
        </MotionBox>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(3,1fr)",
            },
            gap: 4,
          }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
              description={t.projects.featureDescription}
              comingSoonTitle={t.projects.comingSoonTitle}
              comingSoonDescription={t.projects.comingSoonDescription}
              learnMore={t.projects.learnMore}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;