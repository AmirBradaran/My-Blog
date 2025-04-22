import { Stack, Typography } from "@mui/material";
import React from "react";

export default function Logo() {
  return (
    <>
      <Stack direction={"row"} alignItems={"center"} gap={0.5}>
        <img
          src="/logo.png"
          style={{ width: "50px", margin: "0" }}
          alt="logo Site"
        />
        <Typography variant="h6" fontWeight={"bold"}>Baradaran</Typography>
      </Stack>
    </>
  );
}
