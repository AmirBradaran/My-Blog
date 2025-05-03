import React from "react";
import { Box, IconButton, Stack } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";

const Links = () => {
  const icons = [
    {
      icon: <TelegramIcon />,
      link: "https://t.me/Codemashad_021",
      color: "#fff",
      bgColor: "#1DA1F2",
    },
    {
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/codemashad",
      color: "#fff",
      bgColor: "#E1306C",
    },
    {
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/in/amirmohamad-baradaran-6b5a45328/",
      color: "white",
      bgColor: "#0077B5",
    },
    {
      icon: <GitHub />,
      link: "https://github.com/AmirBradaran",
      color: "#fff",
      bgColor: "#000",
    },
  ];

  return (
    <Stack
      direction={"row"}
      width={"70%"}
      gap={2}
      p={2}
      bgcolor="white"
      justifyContent="center"
      borderRadius={2}
      position={"relative"}
      top={{ xs: -70, sm: -70, md: -50, lg: -50 }}
      sx={{
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
        transition: "all 0.3s ease",
      }}
    >
      {icons.map((item, index) => (
        <IconButton
          key={index}
          href={item.link}
          sx={{
            color: item.color,
            bgcolor: item.bgColor,
            "&:hover": {
              bgcolor: `${item.bgColor}`,
              transform: "scale(1.1)",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            },
            borderRadius: "50%",
            padding: "12px",
            transition: "all 0.3s ease",
          }}
        >
          {item.icon}
        </IconButton>
      ))}
    </Stack>
  );
};

export default Links;
