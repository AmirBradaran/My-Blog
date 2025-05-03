import React from "react";
import Header from "./Header";
import Describe from "./Describe";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <>
      <Stack gap={{ xs: 5, md: 10 }} sx={{}}>
        <Header />
        <Describe />
      </Stack>
    </>
  );
}
