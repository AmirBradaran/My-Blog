import React from "react";
import { Box, Paper, useTheme } from "@mui/material";
import Address from "./Adress";
import Form from "./Form";

export default function ContactUs() {
  return (
    <Box sx={{ bgcolor: "#f9f9f9", py: 8 }}>
      <Paper
        elevation={3}
        sx={{
          maxWidth: 1200,
          mx: "auto",
          borderRadius: 2,
          p: 4,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
        }}
      >
        {/* Left: Contact Info */}
        <Address />

        {/* Right: Form */}
        <Form />
      </Paper>
    </Box>
  );
}
