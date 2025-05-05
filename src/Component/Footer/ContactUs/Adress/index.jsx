import {
  Email,
  GitHub,
  Instagram,
  LinkedIn,
  LocationOn,
  Phone,
  Telegram,
} from "@mui/icons-material";
import {
  Box,
  Typography,
  IconButton,
  Tooltip,
  useTheme,
} from "@mui/material";
import React from "react";
import { useLanguage } from "../../../../Utils/LanguageContext "; // مسیر را مطابق پروژه‌ات تنظیم کن

export default function Address() {
  const theme = useTheme();
  const { language } = useLanguage();
  const fontFamily = language === "fa" ? "Iran" : "Arial";
  const isFa = language === "fa";

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
    direction: isFa ? "rtl" : "ltr",
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

  const content = {
    en: {
      title: "Let’s discuss your Project",
      desc: `You can also find me and follow my work on the platforms below. These are the social media channels where I’m active and share my latest updates.`,
      address: "Address",
      location: "Iran, Mashhad",
      emailTitle: "My Email",
      phoneTitle: "Call Me Now",
    },
    fa: {
      title: "بیایید درباره پروژه شما صحبت کنیم",
      desc: `همچنین می‌توانید در شبکه‌های اجتماعی زیر من را دنبال کنید. در این پلتفرم‌ها فعالیت دارم و جدیدترین مطالبم را منتشر می‌کنم.`,
      address: "آدرس",
      location: "ایران، مشهد",
      emailTitle: "ایمیل من",
      phoneTitle: "تماس بگیرید",
    },
  };

  const t = content[language];

  return (
    <Box sx={{ flex: 1, direction: isFa ? "rtl" : "ltr" }}>
      <Typography
        variant="h4"
        fontWeight={700}

        mb={2}
        textAlign={isFa ? "right" : "left"}
        fontFamily={fontFamily}
      >
        {t.title}
      </Typography>
      <Typography
        mb={4}
        color="text.secondary"
        textAlign={isFa ? "right" : "left"}
        fontFamily={fontFamily}
      >
        {t.desc}
      </Typography>

      {/* Address */}
      <Box sx={infoBoxStyle}>
        <Box sx={iconBoxStyle}>
          <LocationOn />
        </Box>
        <Box>
          <Typography fontWeight={600} fontFamily={fontFamily} color="text.primary" textAlign={isFa ? "right" : "left"}>
            {t.address}:
          </Typography>
          <Typography variant="body2" fontFamily={fontFamily} color="text.secondary" textAlign={isFa ? "right" : "left"}>
            {t.location}
          </Typography>
        </Box>
      </Box>

      {/* Email */}
      <Box sx={infoBoxStyle}>
        <Box sx={iconBoxStyle}>
          <Email />
        </Box>
        <Box>
          <Typography fontWeight={600} fontFamily={fontFamily} color="text.primary" textAlign={isFa ? "right" : "left"}>
            {t.emailTitle}:
          </Typography>
          <Typography variant="body2" fontFamily={fontFamily} color="text.secondary" textAlign={isFa ? "right" : "left"}>
            baradaran13085@gmail.com
          </Typography>
        </Box>
      </Box>

      {/* Phone */}
      <Box sx={infoBoxStyle}>
        <Box sx={iconBoxStyle}>
          <Phone />
        </Box>
        <Box>
          <Typography fontWeight={600} fontFamily={fontFamily} color="text.primary" textAlign={isFa ? "right" : "left"}>
            {t.phoneTitle}:
          </Typography>
          <Typography variant="body2" fontFamily={fontFamily} color="text.secondary" textAlign={isFa ? "right" : "left"}>
            98-930-190-5219
          </Typography>
        </Box>
      </Box>

      {/* Social Icons */}
      <Box sx={{ display: "flex", gap: 2, mt: 3, justifyContent: isFa ? "flex-end" : "flex-start" }}>
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
