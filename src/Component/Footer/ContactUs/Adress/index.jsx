import {
  Email,
  GitHub,
  Instagram,
  LinkedIn,
  LocationOn,
  Phone,
  Telegram,
} from "@mui/icons-material";
import { Box, Typography, IconButton, Tooltip, useTheme } from "@mui/material";
import { purple } from "@mui/material/colors";
import React from "react";

export default function Address() {
  const infoBoxStyle = {
    display: "flex",
    alignItems: "center",
    gap: 2,
    p: 2,
    borderRadius: 3,
    bgcolor: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
    mb: 3,
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
    },
  };

  const iconBoxStyle = {
    width: 44,
    height: 44,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #9F3DFF, #7C3AED)",
    color: "#fff",
  };

  const socialLinks = [
    {
      icon: Instagram,
      url: "https://instagram.com/codemashad",
      name: "Instagram",
      gradient:
        "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
    },
    {
      icon: LinkedIn,
      url: "https://linkedin.com/in/amirmohamad-baradaran-6b5a45328/",
      name: "LinkedIn",
      gradient: "linear-gradient(135deg, #0077b5, #005582)",
    },
    {
      icon: GitHub,
      url: "https://github.com/AmirBradaran",
      name: "GitHub",
      gradient: "linear-gradient(135deg, #333, #6e5494)",
    },
    {
      icon: Telegram,
      url: "https://t.me/codemashad_021",
      name: "Telegram",
      gradient: "linear-gradient(135deg, #0088cc, #229ed9)",
    },
  ];

  return (
    <Box sx={{ flex: 1 }}>
      <Typography variant="h4" fontWeight={700} mb={2}>
        Let’s discuss your Project
      </Typography>
      <Typography mb={4} sx={{ color: "text.secondary" }}>
        You can also find me and follow my work on the platforms below. These
        are the social media channels where I’m active and share my latest
        updates.
      </Typography>

      <Box sx={infoBoxStyle}>
        <Box sx={iconBoxStyle}>
          <LocationOn />
        </Box>
        <Box>
          <Typography fontWeight={600} color="text.primary">
            Address:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Iran, Mashhad
          </Typography>
        </Box>
      </Box>

      <Box sx={infoBoxStyle}>
        <Box sx={iconBoxStyle}>
          <Email />
        </Box>
        <Box>
          <Typography fontWeight={600} color="text.primary">
            My Email:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            baradaran13085@gmail.com
          </Typography>
        </Box>
      </Box>

      <Box sx={infoBoxStyle}>
        <Box sx={iconBoxStyle}>
          <Phone />
        </Box>
        <Box>
          <Typography fontWeight={600} color="text.primary">
            Call Me Now:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            +98-930-190-5219
          </Typography>
        </Box>
      </Box>

      {/* Social Icons */}
      <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
        {socialLinks.map(({ icon: Icon, url, name, gradient }, i) => (
          <Tooltip key={i} title={name} arrow>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <IconButton
                sx={{
                  background: gradient,
                  color: "#fff",
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                  transition: "all 0.35s ease",
                  "&:hover": {
                    transform: "translateY(-4px) scale(1.1)",
                    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                <Icon fontSize="small" />
              </IconButton>
            </a>
          </Tooltip>
        ))}
      </Box>
    </Box>
  );
}
