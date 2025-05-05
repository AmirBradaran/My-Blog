import React from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

export default function Questions() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div id="questions">
    <Box
      sx={{
        bgcolor: "#f9f9fb",
        px: { xs: 2, md: 10 },
        py: { xs: 3, md: 5 },
        minHeight: "80vh",
      }}
    >
      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row"}
        alignItems="center"
        justifyContent="space-between"
        maxWidth="1200px"
        mx="auto"
        gap={6}
      >
        {/* Left content */}
        <LeftContent />

        {/* Right cards */}
        <RightContent />
      </Box>
    </Box>
    </div>
  );
}
