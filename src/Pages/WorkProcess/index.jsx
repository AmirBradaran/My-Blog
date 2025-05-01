// WorkProcess.jsx
import React from "react";
import { Box, Typography, Paper, Grid, useTheme, alpha } from "@mui/material";
import {
  Analytics as AnalyticsIcon,
  Devices as DevicesIcon,
  DesignServices as DesignServicesIcon,
  Assignment as AssignmentIcon,
} from "@mui/icons-material";

const steps = [
  {
    id: 1,
    title: "Analysis & Planning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
    icon: <AnalyticsIcon />,
  },
  {
    id: 2,
    title: "Responsiveness & Optimization",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
    icon: <DevicesIcon />,
  },
  {
    id: 3,
    title: "UI Design & Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
    icon: <DesignServicesIcon />,
  },
  {
    id: 4,
    title: "Delivery, Documentation & Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
    icon: <AssignmentIcon />,
  },
];

export default function WorkProcess() {
  const theme = useTheme();
  const purpleMain = "#7c3aed";
  const purpleBg = alpha(purpleMain, 0.18);

  return (
    <Box
      sx={{
        maxWidth: 800,
        mx: "auto", // وسط چین
        p: 4,
        bgcolor: theme.palette.grey[100],
        borderRadius: 2,
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{
          textAlign: "center",
          fontWeight: 700,
          mb: 5,
          color: theme.palette.grey[900],
        }}
      >
        Work Process
      </Typography>

      <Grid container spacing={4}>
        {steps.map((step) => (
          <Grid
            key={step.id}
            item
            xs={12} // موبایل: یک ستون
            sm={6} // sm و بالاتر: دو ستون
          >
            <Paper
              elevation={2}
              sx={{
                p: 3,
                bgcolor: "#fff",
                borderRadius: 3,
                border: `1px solid ${theme.palette.grey[200]}`,
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: theme.shadows[4],
                },
              }}
            >
              <Box
                sx={{
                  width: 52,
                  height: 52,
                  bgcolor: purpleBg,
                  borderRadius: 1.5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2,
                }}
              >
                {React.cloneElement(step.icon, {
                  sx: { fontSize: 28, color: purpleMain },
                })}
              </Box>

              <Typography
                variant="h6"
                component="h3"
                sx={{ fontWeight: 600, mb: 1, color: theme.palette.grey[900] }}
              >
                {step.id}. {step.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: theme.palette.grey[600], lineHeight: 1.6 }}
              >
                {step.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
