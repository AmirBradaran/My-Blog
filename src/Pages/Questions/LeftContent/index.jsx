import React from "react";
import CustomBox from "../../Home/Header/Box";
import {
  Box as MUIBox,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  Stack,
} from "@mui/material";
import { Send as SendIcon } from "@mui/icons-material";
import { useLanguage } from "../../../Utils/LanguageContext "; // بدون فاصله اضافی

const LeftContent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { language } = useLanguage(); // 'en' یا 'fa'
  const fontFamily = language === "fa" ? "Iran" : "Arial";
  const align = language === "fa" ? "right" : "left";
  const text = {
    en: {
      title: "What I Do?",
      description:
        "Questions you might have about why I’m the right choice to build your next website.",
      button: "Say Hello!",
    },
    fa: {
      title: "من چه کاری انجام می‌دهم؟",
      description:
        "سوالاتی که ممکن است درباره اینکه چرا من انتخاب مناسبی برای ساخت وب‌سایت بعدی شما هستم داشته باشید.",
      button: " مشاهده !",
    },
  };
  return (
    <Stack
      sx={{ direction: language === "fa" ? "rtl" : "ltr" }}
      flex={1}
      textAlign={isMobile ? "center" : "left"}
    >
      <Typography
        variant="h3"
        fontFamily={fontFamily}
        fontWeight={900}
        color="text.primary"
        mb={2}
        textAlign={align}
      >
        {text[language].title}
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        maxWidth="450px"
        fontFamily={fontFamily}
        mb={2}
        textAlign={align}
      >
        {text[language].description}
      </Typography>
      <Button
        variant="contained"
        size="large"
        startIcon={<SendIcon sx={{ ml: 1.5 }} />}
        sx={{
          background: "linear-gradient(90deg, #a855f7, #9333ea)",
          textTransform: "none",
          fontWeight: 700,
          px: 4,
          py: 1.5,
          borderRadius: "999px",
          boxShadow: "0 6px 15px rgba(148, 0, 211, 0.3)",
          "&:hover": {
            background: "linear-gradient(90deg, #9333ea, #7e22ce)",
          },
          fontFamily: { fontFamily },
        }}
      >
        {text[language].button}
      </Button>
    </Stack>
  );
};

export default LeftContent;
