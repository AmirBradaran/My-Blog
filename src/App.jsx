import React from "react";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Home from "./Pages/Home";
import { Box, Stack } from "@mui/material";
import WorkProcess from "./Pages/WorkProcess";
import Portfolio from "./Pages/Portfolio";
import Questions from "./Pages/Questions";
import Idea from "./Pages/HaveProject";
import { Outlet } from "react-router-dom";
import { LanguageProvider } from "./Utils/LanguageContext ";
export default function App() {
  return (
    <LanguageProvider>
      <Stack
        gap={15}
        sx={{
          background: `whitesmoke`,
          fontFamily:
            "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif , 'Iran'",
        }}
      >
        <Navbar />
        <Stack gap={10} mt={15}>
          <Home />
          <WorkProcess />
          <Portfolio />
          <Idea />
          <Questions />
        </Stack>
        <Footer />
      </Stack>
    </LanguageProvider>
  );
}
