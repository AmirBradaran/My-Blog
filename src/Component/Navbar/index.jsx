import React from "react";
import Logo from "./Logo";
import Btn from "./Btn";
import Translate from "./Translate";
import { Stack } from "@mui/material";
export default function Navbar() {
  return (
    <>
      <Stack  direction={"row"} justifyContent={"space-around"} sx={{}}>
        <Logo />
        <Stack direction={"row"} gap={2} alignItems={"center"}>
        <Btn />
        <Translate />
        </Stack>
      </Stack>
    </>
  );
}
