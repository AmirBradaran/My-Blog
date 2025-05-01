import React from "react";
import { Box, IconButton, Stack } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import TelegramIcon from "@mui/icons-material/Telegram";
const Links = () => {
  const icons = [
    {
      icon: <TelegramIcon />,
      link: "https://t.me/Codemashad_021",
      color: "#9b59b6",
    },
    {
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/codemashad?igsh=bThqZDQ5Z3U0bW1l",
      color: "#9b59b6",
    },
    {
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/in/amirmohamad-baradaran-6b5a45328/",
      color: "white",
      bgColor: "#9b59b6",
    },
    { icon: <MailIcon />, link: "baradaran13085@gmail.com", color: "#9b59b6" },
  ];
  return (
    <Stack
      direction={"row"}
      width={"55%"}
      gap={2}
      p={2}
      bgcolor="white"
      justifyContent="center"
      borderRadius={2}
      position={"relative"}
      top={{xs:-70 ,sm: -70, md: -50, lg: -50 }}
      sx={{ boxShadow: "0px 4px 10px #00000050" }}
    >
      {icons.map((item, index) => (
        <IconButton
          key={index}
          href={item.link}
          sx={{
            color: item.color,
            bgcolor: item.bgColor || "transparent",
            "&:hover": {
              bgcolor: item.bgColor || "rgba(155, 89, 182, 0.1)",
            },
            borderRadius: 2,
            transition: "0.3s",
          }}
        >
          {item.icon}
        </IconButton>
      ))}
    </Stack>
  );
};

export default Links;
