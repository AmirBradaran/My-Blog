import React, { useState } from "react";
import {
  Card,
  CardMedia,
  Button,
  Typography,
  Box,
  Modal,
  Grid,
  Stack,
} from "@mui/material";
import res from "../../../assets/Resturant.jpg";
import motor from "../../../assets/motorx.jpg";
import digitalShop from "../../../assets/figma(1).jpg";
import electroShop from "../../../assets/electro.png";
import loginForm from "../../../assets/login-form-sofa.jpg";
import Blog from "../../../assets/Blog-Mine.jpg";
import { useLanguage } from "../../../Utils/LanguageContext "; // فرض بر این‌که استفاده می‌کنی

const data = {
  en: [
    {
      image: res,
      title: "Restaurant and Cafe Design Project",
      description:
        "This project is created to showcase my visual design skills in the restaurant and cafe industry.",
    },
    {
      image: motor,
      title: "Motor Layout",
      description:
        "A modern Motor design focused on user experience and interior aesthetics.",
    },
    {
      image: digitalShop,
      title: "digitalShop Layout",
      description:
        "A modern digitalShop design focused on user experience and interior aesthetics.",
    },
    {
      image: electroShop,
      title: "ElectroShop Layout",
      description:
        "A modern ElectroShop design focused on user experience and interior aesthetics.",
    },
    {
      image: loginForm,
      title: "LoginForm Layout",
      description:
        "A modern LoginForm design focused on user experience and interior aesthetics.",
    },
    {
      image: Blog,
      title: "Blog Layout",
      description:
        "A modern Blog design focused on user experience and interior aesthetics.",
    },
  ],
  fa: [
    {
      image: res,
      title: "پروژه طراحی رستوران و کافه",
      description:
        "این پروژه برای نمایش مهارت‌های طراحی بصری من در صنعت رستوران و کافه ایجاد شده است.",
    },
    {
      image: motor,
      title: "طراحی موتور",
      description:
        "طراحی مدرن موتور که بر تجربه کاربری و زیبایی‌شناسی داخلی تمرکز دارد.",
    },
    {
      image: digitalShop,
      title: "طراحی دیجیتال شاپ",
      description:
        "طراحی مدرن دیجیتال شاپ که بر تجربه کاربری و زیبایی‌شناسی داخلی تمرکز دارد.",
    },
    {
      image: electroShop,
      title: "طراحی الکتروشاپ",
      description:
        "طراحی مدرن الکتروشاپ که بر تجربه کاربری و زیبایی‌شناسی داخلی تمرکز دارد.",
    },
    {
      image: loginForm,
      title: "طراحی فرم ورود",
      description:
        "طراحی مدرن فرم ورود که بر تجربه کاربری و زیبایی‌شناسی داخلی تمرکز دارد.",
    },
    {
      image: Blog,
      title: "طراحی بلاگ",
      description:
        "طراحی مدرن بلاگ که بر تجربه کاربری و زیبایی‌شناسی داخلی تمرکز دارد.",
    },
  ],
};

export default function Sites() {
  const [open, setOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const { language } = useLanguage();
  const fontFamily = language === "fa" ? "Iran" : "Arial";

  return (
    <>
      <Grid container spacing={4}>
        {data[language].map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: "50vh",
                boxShadow: 6,
                borderRadius: 4,
                overflow: "hidden",
                position: "relative",
                transition: "all 0.3s ease-in-out",
                cursor: "pointer",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
                },
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <CardMedia
                component="img"
                alt={project.title}
                image={project.image}
                sx={{
                  objectFit: "cover",
                  width: "300px",
                  height: "100%",
                  transition: "transform 0.5s ease-in-out",
                  transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)",
                  userSelect: "none", // جلوگیری از انتخاب تصویر
                }}
                onContextMenu={(e) => e.preventDefault()} // جلوگیری از کلیک راست
              />
              {hoveredIndex === index && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2))",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "all 0.4s ease-in-out",
                    opacity: 1,
                  }}
                >
                  <Button
                    variant="outlined"
                    sx={{
                      color: "#fff",
                      borderColor: "#fff",
                      borderRadius: 10,
                      py: 1.5,
                      px: 1.5,
                      fontWeight: "bold",
                      fontSize: "0.7rem",
                      textShadow: "0 1px 3px rgba(0,0,0,0.6)",
                      backdropFilter: "blur(4px)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        transform: "scale(1.1)",
                      },
                      fontFamily: language === "fa" ? "Iran" : "Arial",
                    }}
                    onClick={() => {
                      setSelectedProject(project);
                      setOpen(true);
                    }}
                  >
                    {data.fa ? "مشاهده بیشتر" : " See More"}
                  </Button>
                </Box>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Stack
          gap={5}
          sx={{
            width: "100%",
            maxHeight: "100vh",
            bgcolor: "rgba(0,0,0,0.95)",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            overflowY: "auto",
            p: { xs: 2, md: 4 },
            borderRadius: 2,
            boxShadow: 24,
          }}
        >
          <CardMedia
            component="img"
            image={selectedProject?.image}
            alt={selectedProject?.title}
            sx={{
              maxWidth: { xs: "100%", md: "60%" },
              maxHeight: "90vh",
              objectFit: "contain",
              borderRadius: 2,
              boxShadow: 6,
              mb: { xs: 2, md: 0 },
              transition: "transform 0.5s ease-in-out",
              transform: "scale(1.05)",
              mt: { xs: 30, sm: 0 },
            }}
          />
          <Stack
            justifyContent={"center"}
            sx={{
              color: "#fff",
              textAlign: "center",
              ml: { md: 4 },
              mt: { xs: -2, md: 0 },
              maxWidth: 500,
              animation: "fadeIn 0.5s ease-in-out",
              height: "100vh",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              fontFamily={fontFamily}
              sx={{
                textShadow: "0 2px 6px rgba(0,0,0,0.5)",
                fontSize: "2rem",
              }}
            >
              {selectedProject?.title}
            </Typography>

            <Typography
              variant="body1"
              fontFamily={fontFamily}
              sx={{
                mb: 3,
                textShadow: "0 1px 4px rgba(0,0,0,0.4)",
                fontSize: "1.1rem",
              }}
            >
              {selectedProject?.description}
            </Typography>

            <Button
              variant="outlined"
              sx={{
                color: "#fff",
                borderColor: "#fff",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
                py: 1.5,
                px: 4,
                fontSize: "1rem",
                mb: { xs: 5 },
                fontFamily: language === "fa" ? "Iran" : "Arial",
              }}
              onClick={() => setOpen(false)}
            >
              {data.fa ? "بستن" : "Close"}
            </Button>
          </Stack>
        </Stack>
      </Modal>
    </>
  );
}
