import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const HaveProject = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0d1b2a",
        minHeight: "40vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <Stack spacing={3}>
        <Box>
          <Typography variant="h4" fontWeight="bold" color="white">
            Do you have Project Idea?
          </Typography>
          <Typography variant="h4" fontWeight="bold" color="white">
            Let's discuss your project!
          </Typography>
        </Box>

        <Typography variant="body1" color="gray">
          Lets Make A Very Beautiful And Modern Website Together
        </Typography>

        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          sx={{
            backgroundColor: "#8e2de2",
            textTransform: "none",
            px: 4,
            py: 2,
            fontSize: "16px",
            fontWeight: 600,
            borderRadius: "50px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            "&:hover": {
              backgroundColor: "#6c1db3",
              transform: "scale(1.05)",
              boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
            },
            transition: "all 0.3s ease-in-out",
            alignSelf: "center",
          }}
        >
          Let's work Together
        </Button>
      </Stack>
    </Box>
  );
};

export default HaveProject;
