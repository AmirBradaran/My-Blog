import React from "react";
import CountUp from "../../../../TextAnimations/CountUp/CountUp";
import {
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
  Box as MuiBox,
} from "@mui/material";
import { CheckCircle, People, Work } from "@mui/icons-material";
import { useLanguage } from "../../../../Utils/LanguageContext "; // اضافه شده برای زبان

export default function Box() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const { language } = useLanguage(); // دریافت زبان

  const texts = {
    en: {
      experience: "Experience",
      projects: "Project Completed",
      clients: "Happy Client",
    },
    fa: {
      experience: "تجربه (سال)",
      projects: "پروژه‌ انجام‌شده",
      clients: "مشتری راضی",
    },
  };
  const fontFamily = language === "fa" ? "Iran" : "Arial";
  return (
    <Stack
      direction={"row"}
      gap={isSmallScreen ? 1 : isMediumScreen ? 2 : 3}
      flexWrap={isSmallScreen ? "wrap" : "nowrap"}
      justifyContent="center"
      sx={{ direction: language === "fa" ? "rtl" : "ltr" }}
    >
      {/* Box for Experience */}
      <MuiBox
        display="flex"
        flexDirection="column"
        alignItems="center"
        p={isSmallScreen ? 0.5 : 1}
        borderRadius={3}
        color="white"
        sx={{
          backgroundColor: "#2EA98C",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          width: isSmallScreen ? "40%" : "auto",
          minWidth: isSmallScreen ? 90 : 100,
          mb: isSmallScreen ? 1 : 0,
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 8px 15px rgba(0, 0, 0, 0.4)",
          },
        }}
      >
        <CheckCircle sx={{ fontSize: 40 }} />
        <CountUp
          from={0}
          to={1}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text"
        />
        <Typography
          fontFamily={fontFamily}
          variant={isSmallScreen ? "body2" : "body1"}
          sx={{ fontWeight: "bold", mt: 1 }}
        >
          {texts[language].experience}
        </Typography>
      </MuiBox>

      {/* Box for Project Completed */}
      <MuiBox
        display="flex"
        flexDirection="column"
        alignItems="center"
        p={isSmallScreen ? 0.5 : 1}
        borderRadius={3}
        color="white"
        sx={{
          backgroundColor: "#FF7043",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          width: isSmallScreen ? "40%" : "auto",
          minWidth: isSmallScreen ? 90 : 100,
          mb: isSmallScreen ? 1 : 0,
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 8px 15px rgba(0, 0, 0, 0.4)",
          },
        }}
      >
        <Work sx={{ fontSize: 40 }} />
        <CountUp
          from={0}
          to={30}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text"
        />
        <Typography
          fontFamily={fontFamily}
          variant={isSmallScreen ? "body2" : "body1"}
          sx={{ fontWeight: "bold", mt: 1 }}
        >
          {texts[language].projects}
        </Typography>
      </MuiBox>

      {/* Box for Happy Client */}
      <MuiBox
        display="flex"
        flexDirection="column"
        alignItems="center"
        p={isSmallScreen ? 0.5 : 1}
        borderRadius={3}
        color="white"
        sx={{
          backgroundColor: "#7E57C2",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          width: isSmallScreen ? "50%" : "auto",
          minWidth: isSmallScreen ? 90 : 100,
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 8px 15px rgba(0, 0, 0, 0.4)",
          },
        }}
      >
        <People sx={{ fontSize: 40 }} />
        <CountUp
          from={0}
          to={20}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text"
        />
        <Typography
          fontFamily={fontFamily}
          variant={isSmallScreen ? "body2" : "body1"}
          sx={{ fontWeight: "bold", mt: 1 }}
        >
          {texts[language].clients}
        </Typography>
      </MuiBox>
    </Stack>
  );
}
