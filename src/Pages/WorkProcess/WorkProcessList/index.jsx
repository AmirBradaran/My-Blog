import React from "react";
import { Box } from "@mui/material";
import {
  Analytics as AnalyticsIcon,
  Devices as DevicesIcon,
  DesignServices as DesignServicesIcon,
  Assignment as AssignmentIcon,
} from "@mui/icons-material";
import WorkProcessStep from "./WorkProcessStep";

const steps = [
  {
    id: 1,
    title: "Analysis & Planning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
    icon: <AnalyticsIcon />,
  },
  {
    id: 2,
    title: "Responsiveness & Optimization",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
    icon: <DevicesIcon />,
  },
  {
    id: 3,
    title: "UI Design & Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
    icon: <DesignServicesIcon />,
  },
  {
    id: 4,
    title: "Delivery, Documentation & Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
    icon: <AssignmentIcon />,
  },
];

export default function WorkProcessList() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 4,
        justifyContent: "center",
      }}
    >
      {[0, 1].map((columnIndex) => (
        <Box
          key={columnIndex}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            flex: "1 1 300px",
            maxWidth: "400px",
          }}
        >
          {steps.slice(columnIndex * 2, columnIndex * 2 + 2).map((step) => (
            <WorkProcessStep key={step.id} step={step} />
          ))}
        </Box>
      ))}
    </Box>
  );
}
