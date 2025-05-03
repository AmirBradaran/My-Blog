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
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack
      gap={{ xs: 2, sm: 3 }}
      alignItems={{ xs: "center", sm: "flex-start" }}
      textAlign={{ xs: "center", sm: "left" }}
    >
      <Typography
        variant={isSmallScreen ? "h5" : "h4"}
        fontWeight="bold"
        sx={{ lineHeight: 1.2 }}
      >
        I am Professional Front-end Developer
      </Typography>

      <Typography variant="body1">
        I design and develop services for customers specializing creating modern
        websites, web services and online stores.
      </Typography>

      <Typography variant="body1">
        My passion is to design digital user experiences.
      </Typography>

      <Typography variant="body1">
        I design and develop services for customers specializing creating modern
        websites, web services.
      </Typography>

      <Button
        variant="contained"
        color="secondary"
        sx={{
          width: "140px",
          fontSize: "0.9rem",
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
        My Project
      </Button>
    </Stack>
  );
}
