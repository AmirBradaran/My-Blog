import React from "react";
import { Paper, Typography, Box, useTheme, alpha } from "@mui/material";

export default function WorkProcessStep({ step }) {
  const theme = useTheme();
  const purpleMain = "#7c3aed";
  const purpleBg = `linear-gradient(135deg, ${alpha(purpleMain, 0.25)}, ${alpha(
    purpleMain,
    0.05
  )})`;

  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        bgcolor: "#ffffff",
        borderRadius: 4,
        border: `1px solid ${alpha(purpleMain, 0.1)}`,
        position: "relative",
        overflow: "hidden",
        transition: "all 0.3s ease",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.04)",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 12px 32px rgba(124, 58, 237, 0.15)",
        },
        "&::before": {
          content: '""',
          position: "absolute",
          width: 120,
          height: 120,
          background: purpleBg,
          borderRadius: "50%",
          top: -40,
          right: -40,
          opacity: 0.15,
        },
      }}
    >
      <Box
        sx={{
          width: 60,
          height: 60,
          background: purpleBg,
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 2,
          zIndex: 1,
        }}
      >
        {React.cloneElement(step.icon, {
          sx: { fontSize: 32, color: purpleMain },
        })}
      </Box>

      <Typography
        variant="h6"
        component="h3"
        sx={{
          fontWeight: 700,
          mb: 1,
          color: theme.palette.grey[900],
          zIndex: 1,
        }}
      >
        {step.id}. {step.title}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: theme.palette.grey[700],
          lineHeight: 1.75,
          fontSize: "0.95rem",
          zIndex: 1,
        }}
      >
        {step.description}
      </Typography>
    </Paper>
  );
}
