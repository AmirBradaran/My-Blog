import React from "react";
import {
  Button,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useLanguage } from "../../../../Utils/LanguageContext ";

export default function Texts() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const { language } = useLanguage(); // دسترسی به زبان از Context

  // متون برای هر زبان
  const content = {
    en: {
      header: "Hello, I'm Amir Baradaran",
      description:
        "I'm a Freelance UI/UX Designer and Front-end Developer based in Mashad(Iran). I strive to build modern and beautiful web applications through carefully and user-centric design.",
      button: "Say Hello!",
    },
    fa: {
      header: "سلام ، من امیر برادارن هستم",
      description:
        "من یک طراح UI/UX فریلنسر و توسعه‌دهنده Front-end از مشهد، ایران هستم. تلاش می‌کنم تا وب‌اپلیکیشن‌های زیبا و مدرن و همچنین طراحی متمرکز بر راحت بودن کاربر بسازم.",
      button: "خوش آمدید !",
    },
  };

  // استایل‌های عمومی
  const typographyStyles = {
    header: {
      lineHeight: isMobile ? 1.2 : 1.3,
      fontSize: isMobile ? "1.6rem" : "2.2rem",
    },
    description: {
      fontSize: isMobile ? "1rem" : "1.1rem",
      lineHeight: 1.6,
    },
  };

  const buttonStyles = {
    width: "160px",
    fontSize: "1.1rem",
    fontWeight: "bold",
    textTransform: "none",
    borderRadius: "25px",
    padding: "12px 30px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "purple",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
    },
    mx: { xs: "auto", md: "0" },
  };

  return (
    <Stack
      gap={4}
      alignItems={isSmallScreen ? "center" : "flex-start"}
      sx={{ direction: language === "fa" ? "rtl" : "ltr" }}
    >
      <Typography
        variant={isMobile ? "h4" : "h3"}
        fontWeight="bold"
        textAlign={
          isSmallScreen ? "center" : language === "fa" ? "right" : "left"
        }
        fontFamily={content.fa ? "Iran" : "Arial"}
        sx={typographyStyles.header}
      >
        {content[language].header}
      </Typography>
      <Typography
        width={"100%"}
        variant="body1"
        textAlign={
          isSmallScreen ? "center" : language === "fa" ? "right" : "left"
        }
        fontFamily={content.fa ? "Iran" : "Arial"}
        sx={typographyStyles.description}
      >
        {content[language].description}
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        sx={buttonStyles && { fontFamily: content.fa ? "Iran" : "Arial" }}
      >
        {content[language].button}
      </Button>
    </Stack>
  );
}
