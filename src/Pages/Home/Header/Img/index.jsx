import { Box, Stack, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import layer2Img from "../../../../assets/layer2.png";

export default function Img({ sx }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        height: isMobile ? "40vh" : "500px",
        width: isMobile ? "100%" : "450px",
        maxWidth: isSmallScreen ? "400px" : "450px",
        borderRadius: "5px",
        position: "relative",
        padding: 0,
        margin: 0,
      }}
    >
      <Box
        component="img"
        src={layer2Img}
        alt=""
        sx={{
          width: isSmallScreen ? "100%" : isMobile ? "600px" : "600px",
          height: isSmallScreen ? "600px" : isMobile ? "600px" : "600px",
          maxHeight: isMobile ? "600px" : "600px",
          borderRadius: "5px",
          objectFit: "contain",
        }}
      />
    </Stack>
  );
}