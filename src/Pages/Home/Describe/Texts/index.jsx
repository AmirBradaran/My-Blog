import {
  Button,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { useLanguage } from "../../../../Utils/LanguageContext "; // بدون فاصله اضافی

export default function Texts() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { language } = useLanguage();

  const texts = {
    en: {
      title: "I am Professional Front-end Developer",
      line1:
        "I design and develop services for customers specializing creating modern websites, web services and online stores.",
      line2: "My passion is to design digital user experiences.",
      line3:
        "I design and develop services for customers specializing creating modern websites, web services.",
      button: "My Project",
    },
    fa: {
      title: "من یک توسعه‌دهنده حرفه‌ای فرانت‌اند هستم",
      line1:
        "من خدماتی را طراحی و توسعه می‌دهم که در ایجاد وب‌سایت‌های مدرن، خدمات وب و فروشگاه‌های آنلاین تخصص دارم .",
      line2: "علاقه من طراحی تجربه‌های دیجیتالی و ساده برای کاربران است .",
      line3:
        "خدماتی را طراحی و توسعه می‌دهم که در ایجاد وب‌سایت‌های مدرن و خدمات وب تخصص دارم .",
      button: "پروژه‌های من",
    },
  };

  const t = texts[language];

  return (
    <Stack
      gap={{ xs: 2, sm: 3 }}
      alignItems={{ xs: "center", sm: "flex-start" }}
      sx={{ direction: language === "fa" ? "rtl" : "ltr" }}
      textAlign={
        isSmallScreen ? "center" : language === "fa" ? "right" : "left"
      }
    >
      <Typography
        variant={isSmallScreen ? "h5" : "h4"}
        fontWeight="bold"
        fontFamily={language === "fa" ? "Iran" : "Arial"}
        sx={{ lineHeight: 1.2 }}
      >
        {t.title}
      </Typography>

      <Typography
        fontFamily={language === "fa" ? "Iran" : "Arial"}
        variant="body1"
      >
        {t.line1}
      </Typography>
      <Typography
        fontFamily={language === "fa" ? "Iran" : "Arial"}
        variant="body1"
      >
        {t.line2}
      </Typography>
      <Typography
        fontFamily={language === "fa" ? "Iran" : "Arial"}
        variant="body1"
      >
        {t.line3}
      </Typography>

      <Button
        variant="contained"
        color="secondary"
        sx={{
          width: "140px",
          fontSize: "0.85rem",
          fontWeight: "bold",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "purple",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
          },
          mx: { xs: "auto", md: "0" },
          borderRadius: "25px",
          padding: "12px 30px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease",
          fontFamily: language === "fa" ? "Iran" : "Arial",
        }}
      >
        {t.button}
      </Button>
    </Stack>
  );
}
