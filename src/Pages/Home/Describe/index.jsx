import { Stack, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Texts from "./Texts";
import Img from "./Img";
import Links from "./Links";

export default function Describe() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Stack
      justifyContent={"space-between"}
      alignItems={"center"}
      gap={{xs:2 , md:2}}
      direction={isSmallScreen ? "column" : "row"}
      mx={"auto"}
      py={{ xs: 5, md: 10 }}
      px={{ xs: 3, md: 5 }}
      width={{xs:"85%" , sm:"85%" ,md:"800px" ,lg:"1000px" }}
      bgcolor="white"
      flexWrap={{ sm: "wrap", md: "nowrap" }}
      sx={{
        boxShadow: "-4px 4px 10px #00000025",
      }}
      borderRadius={5}
      position="relative"
      spacing={isSmallScreen ? 4 : 0}
    >
      <Stack direction="column" alignItems="center" spacing={4}>
        <Img />
        <Links />
      </Stack>
      <Texts />
    </Stack>
  );
}
