import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import React from "react";
import { Send } from "@mui/icons-material";
import { useLanguage } from "../../../../Utils/LanguageContext "; // مسیر را مطابق پروژه‌ات تنظیم کن

export default function Form() {
  const { language } = useLanguage();
  const isFa = language === "fa";
  const fontFamily = language === "fa" ? "Iran" : "Arial";
  const formContent = {
    en: {
      name: "Name*",
      email: "Email*",
      location: "Location",
      budget: "Budget*",
      subject: "Subject*",
      message: "Message*",
      submit: "Submit",
    },
    fa: {
      name: "نام*",
      email: "ایمیل*",
      location: "موقعیت",
      budget: "بودجه*",
      subject: "موضوع*",
      message: "پیام*",
      submit: "ارسال",
    },
  };

  const t = formContent[language];

  return (
    <Box
      component="form"
      action="https://formspree.io/f/xjkwyeqv"
      method="POST"
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        direction: isFa ? "rtl" : "ltr", // Right-to-left for Persian
      }}
    >
      <TextField
        label={t.name}
        name="name"
        fullWidth
        variant="standard"
        fontFamily={fontFamily}
      />
      <TextField
        label={t.email}
        name="email"
        fullWidth
        variant="standard"
        fontFamily={fontFamily}
      />
      <TextField
        label={t.location}
        name="location"
        fullWidth
        variant="standard"
        fontFamily={fontFamily}
      />

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label={t.budget}
            name="budget"
            fullWidth
            variant="standard"
            fontFamily={fontFamily}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label={t.subject}
            name="subject"
            fullWidth
            variant="standard"
            fontFamily={fontFamily}
          />
        </Grid>
      </Grid>

      <TextField
        label={t.message}
        name="message"
        fullWidth
        multiline
        minRows={3}
        variant="standard"
        fontFamily={fontFamily}
      />

      <Button
        type="submit"
        variant="contained"
        endIcon={<Send />}
        sx={{
          alignSelf: isFa ? "flex-end" : "flex-start",
          mt: 2,
          px: 3,
          py: 1.5,
          borderRadius: "30px",
          fontWeight: 600,
          letterSpacing: "0.5px",
          fontSize: "0.9rem",
          background: "linear-gradient(135deg, #9F3DFF, #7C3AED)",
          color: "#fff",
          boxShadow: "0 4px 12px rgba(159, 61, 255, 0.4)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            background: "linear-gradient(135deg, #7C3AED, #5B21B6)",
            transform: "translateY(-2px)",
            boxShadow: "0 6px 16px rgba(124, 58, 237, 0.5)",
          },fontFamily:fontFamily
        }}
      >
        {t.submit}
      </Button>
    </Box>
  );
}
