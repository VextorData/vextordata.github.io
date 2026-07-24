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

const MotionBox = motion.create(Box);

const technologies = [
  {
    name: "Python",
    description:
      "Backend development, automation and data processing.",
    icon: IconBrandPython,
  },

  {
    name: "React",
    description:
      "Modern web applications with intuitive user experiences.",
    icon: IconBrandReact,
  },

  {
    name: "TypeScript",
    description:
      "Reliable, maintainable and scalable applications.",
    icon: IconBrandTypescript,
  },

  {
    name: "FastAPI",
    description:
      "High-performance APIs and backend services.",
    icon: IconApi,
  },

  {
    name: "Cloud",
    description:
      "Cloud-native architectures built to scale.",
    icon: IconCloud,
  },

  {
    name: "Databases",
    description:
      "Structured and unstructured data management.",
    icon: IconDatabase,
  },

  {
    name: "Docker",
    description:
      "Portable and consistent deployment environments.",
    icon: IconBrandDocker,
  },

  {
    name: "Data Engineering",
    description:
      "ETL pipelines, integrations and data automation.",
    icon: IconChartBar,
  },
];

const Technology = () => {
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
              fontWeight: 900,
              letterSpacing: "-0.05em",
              mb: 2,
            }}
          >
            Our Technology
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
            We combine proven technologies to build{" "}
            <Box
              component="span"
              sx={{
                color: "#2563EB",
                fontWeight: 700,
              }}
            >
              secure
            </Box>
            ,{" "}
            <Box
              component="span"
              sx={{
                color: "#2563EB",
                fontWeight: 700,
              }}
            >
              scalable
            </Box>{" "}
            and{" "}
            <Box
              component="span"
              sx={{
                color: "#2563EB",
                fontWeight: 700,
              }}
            >
              maintainable
            </Box>{" "}
            software. Our technology stack is carefully selected to automate
            processes, integrate complex systems and deliver reliable solutions
            that help businesses grow.
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
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.25,
                }}
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
                <Box
                  sx={{
                    color: "#2563EB",
                    mb: 2,
                  }}
                >
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
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.7,
                  }}
                >
                  {tech.description}
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