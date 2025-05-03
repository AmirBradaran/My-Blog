import React from "react";
import CountUp from "../../../../TextAnimations/CountUp/CountUp";
import { Stack, Typography, useTheme, useMediaQuery, Box as MuiBox } from "@mui/material";
import { CheckCircle, People, Work } from "@mui/icons-material"; // آیکون‌ها

export default function Box() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Stack
      direction={"row"}
      gap={isSmallScreen ? 1 : isMediumScreen ? 2 : 3}
      flexWrap={isSmallScreen ? "wrap" : "nowrap"}
      justifyContent="center"
    >
      {/* Box for Experience */}
      <MuiBox
        display="flex"
        flexDirection="column"
        alignItems="center"
        p={isSmallScreen ? 0.5 : 1}
        borderRadius={3}
        color="white"
        sx={{
          backgroundColor: "#2EA98C", // Green
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          width: isSmallScreen ? "40%" : "auto",
          minWidth: isSmallScreen ? 90 : 100,
          mb: isSmallScreen ? 1 : 0,
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 8px 15px rgba(0, 0, 0, 0.4)",
          },
        }}
      >
        <CheckCircle sx={{ fontSize: 40 }} />
        <CountUp
          from={0}
          to={1}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text"
        />
        <Typography variant={isSmallScreen ? "body2" : "body1"} sx={{ fontWeight: "bold", mt: 1 }}>
          Experience
        </Typography>
      </MuiBox>

      {/* Box for Project Completed */}
      <MuiBox
        display="flex"
        flexDirection="column"
        alignItems="center"
        p={isSmallScreen ? 0.5 : 1}
        borderRadius={3}
        color="white"
        sx={{
          backgroundColor: "#FF7043", // Orange
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          width: isSmallScreen ? "40%" : "auto",
          minWidth: isSmallScreen ? 90 : 100,
          mb: isSmallScreen ? 1 : 0,
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 8px 15px rgba(0, 0, 0, 0.4)",
          },
        }}
      >
        <Work sx={{ fontSize: 40 }} />
        <CountUp
          from={0}
          to={30}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text"
        />
        <Typography variant={isSmallScreen ? "body2" : "body1"} sx={{ fontWeight: "bold", mt: 1 }}>
          Project Completed
        </Typography>
      </MuiBox>

      {/* Box for Happy Client */}
      <MuiBox
        display="flex"
        flexDirection="column"
        alignItems="center"
        p={isSmallScreen ? 0.5 : 1}
        borderRadius={3}
        color="white"
        sx={{
          backgroundColor: "#7E57C2", // Purple
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          width: isSmallScreen ? "50%" : "auto",
          minWidth: isSmallScreen ? 90 : 100,
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 8px 15px rgba(0, 0, 0, 0.4)",
          },
        }}
      >
        <People sx={{ fontSize: 40 }} />
        <CountUp
          from={0}
          to={20}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text"
        />
        <Typography variant={isSmallScreen ? "body2" : "body1"} sx={{ fontWeight: "bold", mt: 1 }}>
          Happy Client
        </Typography>
      </MuiBox>
    </Stack>
  );
}
