import React from "react";
import Box from "./Box";
import Texts from "./Texts";
import Img from "./Img";
import { Stack, Typography, useTheme, useMediaQuery } from "@mui/material";

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack
      direction={isMobile ? "column" : "row-reverse"}
      alignItems="center"
      justifyContent="space-between"
      spacing={isMobile ? 4 : 8}
      mx={"auto"}
      my={isMobile ? 4 : 0}
      sx={{
        padding: isMobile ? "16px" : "0",
        textAlign: isMobile ? "center" : "inherit",
      }}
    >
      <Img
        sx={{
          width: "100%",
          maxWidth: isMobile ? "500px" : "none",
          height: "auto",
        }}
      />

      <Stack
        gap={10}
        width={isMobile ? "90%" : "auto"}
        alignItems={isMobile ? "center" : "flex-start"}
      >
        <Texts
          sx={{
            fontSize: isSmallScreen ? "1.5rem" : "2rem",
          }}
        />
        <Box
          sx={{
            width: isMobile ? "90%" : "auto",
            padding: isMobile ? "12px" : "16px",
          }}
        />
      </Stack>
    </Stack>
  );
}
