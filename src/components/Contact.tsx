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
            gap: { xs: 5, md: 8 },
            alignItems: "center",
          }}
        >
          <MotionBox
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            sx={{ width: "100%", maxWidth: "100%" }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                letterSpacing: "-0.05em",
                mb: { xs: 2, md: 3 },
                fontSize: { xs: "2.25rem", md: "3.5rem" },
                lineHeight: { xs: 1.1, md: 1.05 },
              }}
            >
              {t.contact.title}
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,.75)",
                fontSize: { xs: 16, md: 18 },
                lineHeight: 1.7,
                maxWidth: { xs: "100%", md: 500 },
                mb: { xs: 3, md: 5 },
              }}
            >
              {t.contact.description}
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                flexWrap: "wrap",
                width: "100%",
                maxWidth: "100%",
              }}
            >
              <Box
                sx={{
                  width: 45,
                  height: 45,
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(255,255,255,.1)",
                  flexShrink: 0,
                }}
              >
                <IconMail size={24} />
              </Box>

              <Box sx={{ minWidth: 0, flex: 1 }}>
                <Typography sx={{ fontSize: 14, color: "rgba(255,255,255,.6)" }}>
                  {t.contact.email}
                </Typography>

                <Typography sx={{ fontWeight: 700, wordBreak: "break-word" }}>
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
