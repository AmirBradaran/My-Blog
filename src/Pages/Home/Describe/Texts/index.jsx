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
          width: { xs: "100%", sm: "115px" },
          fontSize: "1rem",
          textTransform: "none",
          mt: { xs: 1, sm: 0 },
          mx:{sm:"auto" , md:"0"}
        }}
      >
        My Project
      </Button>
    </Stack>
  );
}
