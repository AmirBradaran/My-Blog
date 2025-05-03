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

const services = [
  {
    title: "User Experience (UX)",
    description:
      "Creating intuitive and engaging designs to enhance user satisfaction and accessibility across all platforms.",
    icon: DesignServices,
    color: "#a855f7", // بنفش
  },
  {
    title: "Front-end Development",
    description:
      "Building responsive and modern websites with clean code, using React, HTML, CSS, and JavaScript.",
    icon: Code,
    color: "#34D399", // سبز
  },
  {
    title: "Responsive Web Design",
    description:
      "Ensuring your website looks stunning and functions perfectly on all devices, from desktops to mobile phones.",
    icon: Language,
    color: "#3B82F6", // آبی
  },
];

export default function RightContent() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Stack spacing={3} flex={1.5}>
      {services.map(({ title, description, icon: Icon, color }, index) => (
        <Paper
          key={index}
          elevation={3}
          sx={{
            width:isMobile?"85%":"100%",
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
              mx:isMobile?"auto":"0"
            }}
          >
            <Icon sx={{ color: "#fff", fontSize: 36 }} />
          </Box>

          <Typography
            variant="h6"
            fontWeight={700}
            gutterBottom
            sx={{
              mb: 1,
              color: "text.primary",
              letterSpacing: "0.5px",
              textAlign:isMobile?"center":"none"
            }}
          >
            {title}
          </Typography>

          <Box
            sx={{
              width:"80%",
              height: 3,
              bgcolor: color,
              borderRadius: 2,
              mb: 2,
              mx:isMobile?"auto":"0"
            }}
          />

          <Typography
            variant="body2"
            color="text.secondary"
            textAlign={isMobile?"center":"none"}
            sx={{ lineHeight: 1.8 }}
          >
            {description}
          </Typography>
        </Paper>
      ))}
    </Stack>
  );
}
