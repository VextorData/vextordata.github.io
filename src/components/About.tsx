import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

import Container from "./Container";
import { translations, type Language } from "../translations";

const MotionBox = motion.create(Box);

interface AboutProps {
  t: (typeof translations)[Language];
}

const About = ({ t }: AboutProps) => {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 14 },
        background:
          "radial-gradient(circle at 10% 20%, rgba(37,99,235,0.08), transparent 35%), #FFFFFF",
        scrollMarginTop: "80px",
      }}
    >
      <Container>
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          sx={{ maxWidth: 850, mb: 7 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              letterSpacing: "-0.05em",
              mb: 3,
            }}
          >
            {t.about.title}
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              fontSize: { xs: "1.1rem", md: "1.25rem" },
              lineHeight: 1.8,
            }}
          >
            {t.about.paragraph1}
            <br />
            <br />
            {t.about.paragraph2}
          </Typography>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default About;