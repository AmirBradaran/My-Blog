import {
  Button,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
export default function Texts() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack gap={4}>
      <Typography
        variant={isMobile ? "h4" : "h3"}
        fontWeight={"bold"}
        textAlign={"left"}
      >
        Hello, I'm <br /> Amir Baradaran
      </Typography>
      <Typography variant="body1" textAlign={"left"}>
        I'm a Freelance UI/UX Designer and Front-end Developer based in <br />
        Mashad, Iran. I strives to build immersive and beautiful web
        applications <br />
        through carefully crafted code and user-centric design.
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        sx={{
          width: "160px",
          fontSize: "1.1rem",
          fontWeight: "bold",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "purple",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
          },
          mx: { xs: "auto", md: "0" },
          borderRadius: "25px",
          padding: "12px 30px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease",
        }}
      >
        Say Hello !
      </Button>
    </Stack>
  );
}
