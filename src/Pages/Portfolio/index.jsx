import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
export default function Portfolio() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Stack
      justifyContent={"space-between"}
      alignItems={"center"}
      gap={{ xs: 2, md: 2 }}
      direction={"column"}
      mx={"auto"}
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
      <Stack justifyContent={"center"} alignItems={"center"} gap={1}>
        <Typography
          variant="h4"
          textAlign={"center"}
          fontWeight={"bold"}
          letterSpacing={"4px"}
        >
          Portfolio
        </Typography>
        <Typography
          textTransform={"capitalize"}
          variant="body1"
          textAlign={"center"}
        >
          some projects of UI/Ux design and also front-end sites .
        </Typography>
      </Stack>
      
    </Stack>
  );
}
