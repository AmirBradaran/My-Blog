import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Btn from "./Btn";
import Translate from "./Translate";
import { Stack } from "@mui/material";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY < lastScrollY) {
        setShowNavbar(true); // اسکرول به بالا
      } else {
        setShowNavbar(false); // اسکرول به پایین
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <Stack
      direction={"row"}
      justifyContent={"space-around"}
      py={2}
      sx={{
        background: "white",
        position: "fixed",
        top: showNavbar ? 0 : "-100px",
        left: 0,
        right: 0,
        transition: "top 0.3s ease-in-out",
        zIndex: 1000,
      }}
    >
      <Logo />
      <Stack direction={"row"} gap={2} alignItems={"center"}>
        <Btn />
        <Translate />
      </Stack>
    </Stack>
  );
}
