import { Box, Typography } from "@mui/material";
import { IconMail } from "@tabler/icons-react";
import { motion } from "framer-motion";

import Container from "./Container";
import ContactForm from "./ContactForm.tsx";
import { translations, type Language } from "../translations";

const MotionBox = motion.create(Box);

interface ContactProps {
  t: (typeof translations)[Language];
}

const Contact = ({ t }: ContactProps) => {
  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 14 },
        background: "linear-gradient(135deg,#020617 0%,#0F172A 55%,#1E3A8A 100%)",
        color: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 8,
            alignItems: "center",
          }}
        >
          <MotionBox
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                letterSpacing: "-0.05em",
                mb: 3,
              }}
            >
              {t.contact.title}
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,.75)",
                fontSize: 18,
                lineHeight: 1.7,
                maxWidth: 500,
                mb: 5,
              }}
            >
              {t.contact.description}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  width: 45,
                  height: 45,
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(255,255,255,.1)",
                }}
              >
                <IconMail size={24} />
              </Box>

              <Box>
                <Typography sx={{ fontSize: 14, color: "rgba(255,255,255,.6)" }}>
                  {t.contact.email}
                </Typography>

                <Typography sx={{ fontWeight: 700 }}>
                  contact@vextordata.com
                </Typography>
              </Box>
            </Box>
          </MotionBox>

          <ContactForm t={t} />
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;