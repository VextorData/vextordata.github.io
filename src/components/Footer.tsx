import { Box, Typography } from "@mui/material";

import Container from "./Container";
import { translations, type Language } from "../translations";

interface FooterProps {
  t: (typeof translations)[Language];
}

const Footer = ({ t }: FooterProps) => {
  return (
    <Box
      sx={{
        background: "#020617",
        py: { xs: 4, md: 5 },
        borderTop: "1px solid rgba(255,255,255,.08)",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            gap: 2,
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 0.5,
              }}
            >
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontWeight: 800,
                  fontSize: 18,
                  letterSpacing: "-0.03em",
                }}
              >
                VextorData
              </Typography>
            </Box>

            <Typography
              sx={{
                color: "rgba(255,255,255,.5)",
                fontSize: 14,
              }}
            >
              {t.footer.tagline}
            </Typography>
          </Box>

          <Typography
            component="a"
            href="mailto:contact@vextordata.com"
            sx={{
              color: "rgba(255,255,255,.65)",
              fontSize: 14,
              textDecoration: "none",
              "&:hover": {
                color: "#06B6D4",
              },
            }}
          >
            contact@vextordata.com
          </Typography>
        </Box>

        <Box
          sx={{
            mt: 3,
            pt: 2,
            borderTop: "1px solid rgba(255,255,255,.08)",
          }}
        >
          <Typography
            sx={{
              color: "rgba(255,255,255,.35)",
              fontSize: 13,
            }}
          >
            © {new Date().getFullYear()} VextorData. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;