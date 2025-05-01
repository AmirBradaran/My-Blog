import React from "react";
import CountUp from "../../../../TextAnimations/CountUp/CountUp";
import { Stack, Typography, useTheme, useMediaQuery } from "@mui/material";

export default function Box() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Stack
      direction={"row"}
      gap={isSmallScreen ? 2 : isMediumScreen ? 3 : 5}
      flexWrap={isSmallScreen ? "wrap" : "nowrap"}
      justifyContent="center"
    >
      <Stack
        direction={"column"}
        alignItems={"center"}
        p={isSmallScreen ? 1 : 2}
        borderRadius={4}
        sx={{
          backgroundColor: "#EDD8FF",
          boxShadow: "-4px 3px 5px #00000050",
          width: isSmallScreen ? "45%" : "auto",
          minWidth: isSmallScreen ? 0 : 120,
          mb: isSmallScreen ? 2 : 0,
        }}
      >
        <CountUp
          from={0}
          to={1}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text"
        />
        <Typography variant={isSmallScreen ? "body2" : "body1"}>
          Experience
        </Typography>
      </Stack>
      
      <Stack
        direction={"column"}
        alignItems={"center"}
        p={isSmallScreen ? 1 : 2}
        borderRadius={4}
        sx={{
          backgroundColor: "#EDD8FF",
          boxShadow: "-4px 3px 5px #00000050",
          width: isSmallScreen ? "45%" : "auto",
          minWidth: isSmallScreen ? 0 : 120,
          mb: isSmallScreen ? 2 : 0,
        }}
      >
        <CountUp
          from={0}
          to={30}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text"
        />
        <Typography variant={isSmallScreen ? "body2" : "body1"}>
          Project Completed
        </Typography>
      </Stack>

      <Stack
        direction={"column"}
        alignItems={"center"}
        p={isSmallScreen ? 1 : 2}
        borderRadius={4}
        sx={{
          backgroundColor: "#EDD8FF",
          boxShadow: "-4px 3px 5px #00000050",
          width: isSmallScreen ? "50%" : "auto",
          minWidth: isSmallScreen ? 0 : 120,
        }}
      >
        <CountUp
          from={0}
          to={20}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text"
        />
        <Typography variant={isSmallScreen ? "body2" : "body1"}>
          Happy Client
        </Typography>
      </Stack>
    </Stack>
  );
}
