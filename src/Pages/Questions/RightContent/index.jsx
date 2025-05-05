import React from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Paper,
  Stack,
} from "@mui/material";
import { Send as DesignServices, Code, Language } from "@mui/icons-material";
import { useLanguage } from "../../../Utils/LanguageContext "; // Import LanguageContext

const services = {
  en: [
    {
      title: "User Experience (UX)",
      description:
        "Creating intuitive and engaging designs to enhance user satisfaction and accessibility across all platforms.",
      icon: DesignServices,
      color: "#a855f7", // Purple
    },
    {
      title: "Front-end Development",
      description:
        "Building responsive and modern websites with clean code, using React, HTML, CSS, and JavaScript.",
      icon: Code,
      color: "#34D399", // Green
    },
    {
      title: "Responsive Web Design",
      description:
        "Ensuring your website looks stunning and functions perfectly on all devices, from desktops to mobile phones.",
      icon: Language,
      color: "#3B82F6", // Blue
    },
  ],
  fa: [
    {
      title: "تجربه کاربری (UX)",
      description:
        "طراحی‌های شهودی و جذاب برای بهبود رضایت و دسترسی کاربران در تمامی پلتفرم‌ها.",
      icon: DesignServices,
      color: "#a855f7", // Purple
    },
    {
      title: "توسعه فرانت-اند",
      description:
        "ساخت وب‌سایت‌های واکنش‌گرا و مدرن با کد تمیز، با استفاده از React، HTML، CSS و JavaScript.",
      icon: Code,
      color: "#34D399", // Green
    },
    {
      title: "طراحی وب‌سایت واکنش‌گرا",
      description:
        "مطمئن شوید که وب‌سایت شما در تمامی دستگاه‌ها، از دسکتاپ تا موبایل، به خوبی کار می‌کند و ظاهر زیبا دارد.",
      icon: Language,
      color: "#3B82F6", // Blue
    },
  ],
};

export default function RightContent() {
  const { language } = useLanguage(); // Use the language from context
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const fontFamily = language === "fa" ? "Iran" : "Arial";
  const align = language === "fa" ? "right" : "left";
  return (
    <Stack spacing={3} flex={1.5}>
      {services[language].map(
        ({ title, description, icon: Icon, color }, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              width: isMobile ? "85%" : "100%",
              p: 3,
              borderRadius: 8,
              backgroundColor: "#fff",
              transition: "transform 0.4s ease, box-shadow 0.4s ease",
              boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
              position: "relative",
              overflow: "hidden",
              "&:hover": {
                transform: "translateY(-10px) scale(1.05)",
                boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
              },
            }}
          >
            <Box
              sx={{
                width: 72,
                height: 72,
                background: `linear-gradient(135deg, ${color}, ${color}80)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                mb: 3,
                mx: isMobile ? "auto" : "0",
              }}
            >
              <Icon sx={{ color: "#fff", fontSize: 36 }} />
            </Box>

            <Typography
              variant="h6"
              fontWeight={700}
              gutterBottom
              fontFamily={fontFamily}
              sx={{
                mb: 1,
                color: "text.primary",
                letterSpacing: "0.5px",
                textAlign:{align},
                direction: language === "fa" ? "rtl" : "ltr", // Apply RTL direction for Persian
              }}
            >
              {title}
            </Typography>

            <Box
              sx={{
                width: "80%",
                height: 3,
                bgcolor: color,
                borderRadius: 2,
                mb: 2,
                mx: isMobile ? "auto" : "0",
              }}
            />

            <Typography
              variant="body2"
              color="text.secondary"
              fontFamily={fontFamily}
              textAlign={align}
              sx={{
                lineHeight: 1.8,
                direction: language === "fa" ? "rtl" : "ltr", // Apply RTL direction for Persian
              }}
            >
              {description}
            </Typography>
          </Paper>
        )
      )}
    </Stack>
  );
}
