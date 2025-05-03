import React from "react";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Home from "./Pages/Home";
import { Box, Stack } from "@mui/material";
import WorkProcess from "./Pages/WorkProcess";
import Portfolio from "./Pages/Portfolio";
import Questions from "./Pages/Questions";

export default function App() {
  return (
    <Stack gap={15} sx={{ background: `whitesmoke` }}>
      <Navbar />
      <Stack gap={10} sx={{}}>
        <Home />
        <WorkProcess />
        <Portfolio />
        <Questions/>
      </Stack>
      <Footer />
    </Stack>
  );
}
