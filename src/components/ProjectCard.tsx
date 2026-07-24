import {
  Box,
  Chip,
  Typography,
} from "@mui/material";

import {
  ConstructionRounded,
} from "@mui/icons-material";

import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

interface Props {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const ProjectCard = ({
  title,
  description,
  tags,
}: Props) => {
  return (
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
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.35,
      }}
      sx={{
        borderRadius: 5,
        overflow: "hidden",
        background: "rgba(255,255,255,0.96)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 20px 50px rgba(0,0,0,.18)",
        cursor: "pointer",
        transition: "all .3s ease",

        "&:hover": {
          boxShadow: "0 30px 80px rgba(37,99,235,.35)",
        },
      }}
    >
      {/* HEADER */}

      <Box
        sx={{
          height: {
            xs: 200,
            md: 250,
          },

          background:
            "linear-gradient(135deg,#0F172A 0%,#1E3A8A 55%,#2563EB 100%)",

          display: "flex",

          flexDirection: "column",

          justifyContent: "center",

          alignItems: "center",

          textAlign: "center",

          px: 3,

          position: "relative",

          overflow: "hidden",

          "&::before": {
            content: '""',

            position: "absolute",

            width: 350,

            height: 350,

            borderRadius: "50%",

            background: "rgba(255,255,255,.05)",

            top: -150,

            right: -120,
          },

          "&::after": {
            content: '""',

            position: "absolute",

            width: 250,

            height: 250,

            borderRadius: "50%",

            background: "rgba(255,255,255,.04)",

            bottom: -120,

            left: -100,
          },
        }}
      >
        <ConstructionRounded
          sx={{
            color: "#FFFFFF",
            fontSize: 56,
            mb: 2,
            zIndex: 1,
          }}
        />

        <Typography
          sx={{
            color: "#FFFFFF",
            fontWeight: 800,
            fontSize: 24,
            zIndex: 1,
          }}
        >
          Coming Soon
        </Typography>

        <Typography
          sx={{
            color: "rgba(255,255,255,.75)",
            mt: 1,
            fontSize: 15,
            zIndex: 1,
            maxWidth: 260,
          }}
        >
          This product is currently under development.
        </Typography>
      </Box>

      {/* CONTENT */}

      <Box
        sx={{
          p: 4,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 900,
            mb: 2,
            letterSpacing: "-0.04em",
            color: "#0F172A",
          }}
        >
          {title}
        </Typography>

        <Typography
          color="text.secondary"
          sx={{
            lineHeight: 1.7,
            mb: 3,
          }}
        >
          {description}
        </Typography>

        {/* TAGS */}

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            mb: 3,
          }}
        >
          {tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{
                fontWeight: 700,
                background: "rgba(37,99,235,.08)",
                color: "#2563EB",
              }}
            />
          ))}
        </Box>

        <Typography
          sx={{
            color: "#2563EB",
            fontWeight: 700,
            fontSize: 15,
          }}
        >
          Learn more →
        </Typography>
      </Box>
    </MotionBox>
  );
};

export default ProjectCard;