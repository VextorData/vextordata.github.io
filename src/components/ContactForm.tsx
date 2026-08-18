import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Divider,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { translations, type Language } from "../translations";

interface ContactFormProps {
  t: (typeof translations)[Language];
}

const ContactForm = ({ t }: ContactFormProps) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const inputStyles = {
    mb: 2,
    "& .MuiOutlinedInput-root": {
      borderRadius: 3,
      background: "rgba(255,255,255,.10)",
      backdropFilter: "blur(10px)",
      transition: "all .25s ease",

      "& fieldset": {
        borderColor: "rgba(255,255,255,.18)",
      },

      "&:hover": {
        background: "rgba(255,255,255,.13)",
      },

      "&:hover fieldset": {
        borderColor: "#06B6D4",
      },

      "&.Mui-focused": {
        background: "rgba(255,255,255,.15)",
      },

      "&.Mui-focused fieldset": {
        borderColor: "#06B6D4",
        borderWidth: 2,
      },

      "& input": {
        color: "#FFFFFF",
      },

      "& textarea": {
        color: "#FFFFFF",
      },
    },

    "& .MuiInputLabel-root": {
      color: "rgba(255,255,255,.75)",
    },

    "& .MuiInputLabel-root.Mui-focused": {
      color: "#06B6D4",
      fontWeight: 600,
    },

    "& .MuiInputLabel-root.MuiInputLabel-shrink": {
      color: "#FFFFFF",
      background: "rgba(15,23,42,.95)",
      padding: "0 8px",
      borderRadius: "8px",
    },

    "& .MuiOutlinedInput-input": {
      color: "#FFFFFF",
      caretColor: "#06B6D4",
    },
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.message.trim()
    ) {
      setError(true);
      return;
    }

    setLoading(true);
    setError(false);

    try {
      const response = await fetch(
        "https://vextordata-contact-api.vercel.app/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSuccess(true);

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error("Contact form error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          background: "rgba(15,23,42,.55)",
          backdropFilter: "blur(20px)",
          borderRadius: 5,
          p: { xs: 2.5, md: 4 },
          border: "1px solid rgba(255,255,255,.15)",
          boxShadow: "0 25px 80px rgba(0,0,0,.35)",
          width: "100%",
          maxWidth: "100%",
          mx: "auto",
        }}
      >
        <TextField
          fullWidth
          required
          name="name"
          label={t.form.name}
          value={form.name}
          onChange={handleChange}
          variant="outlined"
          sx={inputStyles}
        />

        <TextField
          fullWidth
          required
          name="email"
          type="email"
          label={t.form.email}
          value={form.email}
          onChange={handleChange}
          variant="outlined"
          sx={inputStyles}
        />

        <TextField
          fullWidth
          required
          name="message"
          label={t.form.message}
          multiline
          rows={5}
          value={form.message}
          onChange={handleChange}
          variant="outlined"
          sx={inputStyles}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          disabled={loading}
          sx={{
            borderRadius: "999px",
            py: 1.5,
            mt: 1,
            background:
              "linear-gradient(135deg,#2563EB,#06B6D4)",
            fontWeight: 700,
            boxShadow:
              "0 10px 30px rgba(37,99,235,.35)",

            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow:
                "0 15px 40px rgba(37,99,235,.45)",
            },

            transition: "all .25s ease",
          }}
        >
          {loading ? (
            <CircularProgress
              size={24}
              sx={{ color: "white" }}
            />
          ) : (
            t.form.send
          )}
        </Button>

        <Divider
          sx={{
            my: 4,
            borderColor: "rgba(255,255,255,.15)",
            color: "rgba(255,255,255,.6)",
          }}
        >
          {t.form.or}
        </Divider>

        <Typography
          variant="h6"
          align="center"
          sx={{
            color: "#FFFFFF",
            fontWeight: 700,
            mb: 1,
          }}
        >
          {t.form.prefer}
        </Typography>

        <Typography
          align="center"
          sx={{
            color: "rgba(255,255,255,.75)",
            mb: 3,
            lineHeight: 1.7,
            fontSize: {
              xs: "0.95rem",
              md: "1rem",
            },
          }}
        >
          {t.form.schedule}
        </Typography>

        <Button
          fullWidth
          size="large"
          startIcon={<CalendarMonthIcon />}
          onClick={() =>
            window.open(
              "https://calendly.com/contact-vextordata/30min",
              "_blank",
              "noopener,noreferrer"
            )
          }
          sx={{
            borderRadius: "999px",
            py: 1.5,
            border: "2px solid #06B6D4",
            color: "#06B6D4",
            fontWeight: 700,
            transition: "all .25s ease",

            "&:hover": {
              background: "rgba(6,182,212,.08)",
              transform: "translateY(-2px)",
              borderColor: "#22D3EE",
            },
          }}
        >
          {t.form.book}
        </Button>
      </Box>

      {/* Success Snackbar */}
      <Snackbar
        open={success}
        autoHideDuration={5000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Alert
          severity="success"
          variant="filled"
          sx={{ borderRadius: 3 }}
        >
          {t.form.success}
        </Alert>
      </Snackbar>

      {/* Error Snackbar */}
      <Snackbar
        open={error}
        autoHideDuration={5000}
        onClose={() => setError(false)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Alert
          severity="error"
          variant="filled"
          sx={{ borderRadius: 3 }}
        >
          {t.form.error}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContactForm;