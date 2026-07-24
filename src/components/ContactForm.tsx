import {
  Box,
  Button,
  TextField,
} from "@mui/material";

const ContactForm = () => {
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
      transition: "all .25s ease",
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

    "& .MuiInputLabel-root.Mui-focused.MuiInputLabel-shrink": {
      color: "#06B6D4",
      background: "rgba(15,23,42,.98)",
    },

    "& .MuiOutlinedInput-input": {
      color: "#FFFFFF",
      caretColor: "#06B6D4",
    },

    "& .MuiOutlinedInput-input::placeholder": {
      color: "rgba(255,255,255,.5)",
      opacity: 1,
    },
  };

  return (
    <Box
      sx={{
        background: "rgba(15,23,42,.55)",

        backdropFilter: "blur(20px)",

        borderRadius: 5,

        p: {
          xs: 3,
          md: 4,
        },

        border: "1px solid rgba(255,255,255,.15)",

        boxShadow: "0 25px 80px rgba(0,0,0,.35)",
      }}
    >
      <TextField
        fullWidth
        label="Name"
        variant="outlined"
        sx={inputStyles}
      />

      <TextField
        fullWidth
        label="Email"
        variant="outlined"
        sx={inputStyles}
      />

      <TextField
        fullWidth
        label="Message"
        multiline
        rows={5}
        variant="outlined"
        sx={inputStyles}
      />

      <Button
        fullWidth
        variant="contained"
        size="large"
        sx={{
          borderRadius: "999px",

          py: 1.5,

          mt: 1,

          background:
            "linear-gradient(135deg,#2563EB,#06B6D4)",

          fontWeight: 700,

          boxShadow: "0 10px 30px rgba(37,99,235,.35)",

          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 15px 40px rgba(37,99,235,.45)",
          },

          transition: "all .25s ease",
        }}
      >
        Send Message
      </Button>
    </Box>
  );
};

export default ContactForm;