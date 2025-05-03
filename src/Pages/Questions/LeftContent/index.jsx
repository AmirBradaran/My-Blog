import React from "react";
import CustomBox from "../../Home/Header/Box"; // تغییر نام به CustomBox
import {
  Box as MUIBox, // تغییر نام Box از MUI به MUIBox
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Send as SendIcon,
} from "@mui/icons-material";

export default function LeftContent() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <MUIBox flex={1} textAlign={isMobile ? "center" : "left"}>
      <Typography variant="h3" fontWeight={900} color="text.primary" mb={2}>
        What I Do?
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        maxWidth="450px"
        mb={2}
      >
        Questions you might have about why I’m the right choice to build your
        next website.
      </Typography>
      <Button
        variant="contained"
        size="large"
        endIcon={<SendIcon />}
        sx={{
          background: "linear-gradient(90deg, #a855f7, #9333ea)",
          textTransform: "none",
          fontWeight: 700,
          px: 4,
          py: 1.5,
          borderRadius: "999px",
          boxShadow: "0 6px 15px rgba(148, 0, 211, 0.3)",
          "&:hover": {
            background: "linear-gradient(90deg, #9333ea, #7e22ce)",
          },
        }}
      >
        Say Hello!
      </Button>
    </MUIBox>
  );
}
