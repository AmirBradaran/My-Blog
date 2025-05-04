import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useLanguage } from "../../Utils/LanguageContext ";

const text = {
  en: {
    title1: "Do you have Project Idea?",
    title2: "Let's discuss your project!",
    subtitle: "Let's Make A Very Beautiful And Modern Website Together",
    button: "Let's work Together",
  },
  fa: {
    title1: "آیا ایده‌ای برای پروژه دارید؟",
    title2: "بیایید درباره‌ی پروژه شما صحبت کنیم!",
    subtitle: "بیایید با هم یک وب‌سایت بسیار زیبا و مدرن بسازیم",
    button: "بیایید با هم کار کنیم",
  },
};

const HaveProject = () => {
  const { language } = useLanguage();
  const lang = language;
  const fontFamily = lang === "fa" ? "Iran" : "Arial";

  return (
    <Box
      sx={{
        backgroundColor: "#0d1b2a",
        minHeight: "40vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <Stack
        spacing={3}
        direction="column"
        sx={{ direction: lang === "fa" ? "rtl" : "ltr" }}
      >
        <Box>
          <Typography
            variant="h4"
            fontWeight="bold"
            color="white"
            fontFamily={fontFamily}
          >
            {text[lang].title1}
          </Typography>
          <Typography
            variant="h4"
            fontWeight="bold"
            color="white"
            fontFamily={fontFamily}
          >
            {text[lang].title2}
          </Typography>
        </Box>

        <Typography fontFamily={fontFamily} variant="body1" color="gray">
          {text[lang].subtitle}
        </Typography>

        <Button
          startIcon={lang === "fa" ? <ArrowForwardIcon /> : null}
          endIcon={lang === "en" ? <ArrowForwardIcon /> : null}
          variant="contained"
          sx={{
            backgroundColor: "#8e2de2",
            textTransform: "none",
            px: 4,
            py: 2,
            fontSize: "16px",
            fontWeight: 600,
            borderRadius: "50px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            "&:hover": {
              backgroundColor: "#6c1db3",
              transform: "scale(1.05)",
              boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
            },
            transition: "all 0.3s ease-in-out",
            alignSelf: "center",
            fontFamily: fontFamily,
          }}
        >
          {text[lang].button}
        </Button>
      </Stack>
    </Box>
  );
};

export default HaveProject;
