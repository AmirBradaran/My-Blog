import React from "react";
import { Stack, Typography, useTheme, useMediaQuery } from "@mui/material";
import WorkProcessList from "./WorkProcessList/index";

export default function WorkProcess() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Stack
      justifyContent="space-between"
      alignItems="center"
      gap={{ xs: 2, md: 2 }}
      direction="column"
      mx="auto"
      py={{ xs: 5, md: 10 }}
      px={{ xs: 3, md: 5 }}
      width={{ xs: "85%", sm: "85%", md: "800px", lg: "1000px" }}
      bgcolor="white"
      flexWrap={{ sm: "wrap", md: "nowrap" }}
      sx={{
        boxShadow: "-4px 4px 10px #00000025",
      }}
      borderRadius={5}
      position="relative"
      spacing={isSmallScreen ? 4 : 0}
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

      <WorkProcessList />
    </Stack>
  );
}
