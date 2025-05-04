import React from "react";
import { Box } from "@mui/material";
import {
  Analytics as AnalyticsIcon,
  Devices as DevicesIcon,
  DesignServices as DesignServicesIcon,
  Assignment as AssignmentIcon,
} from "@mui/icons-material";
import WorkProcessStep from "./WorkProcessStep";
import { useLanguage } from "../../../Utils/LanguageContext "; // فاصله اضافی حذف شد

export default function WorkProcessList() {
  const { language } = useLanguage();

  const texts = {
    en: [
      {
        title: "Analysis & Planning",
        description:
          "In this phase, project requirements are carefully assessed and a clear, efficient execution plan is established.",
      },
      {
        title: "Responsiveness & Optimization",
        description:
          "The design and development focus on high performance and full compatibility across all devices.",
      },
      {
        title: "UI Design & Development",
        description:
          "Combining creativity and user experience, beautiful, modern, and user-friendly interfaces are designed and implemented.",
      },
      {
        title: "Delivery, Documentation & Support",
        description:
          "The final product is delivered with complete documentation, along with ongoing support to ensure reliable performance.",
      },
    ],
    fa: [
      {
        title: "تحلیل و برنامه‌ریزی",
        description:
          "در این مرحله نیازهای پروژه به دقت بررسی شده و یک برنامه اجرایی شفاف و مؤثر تدوین می‌شود.",
      },
      {
        title: "واکنش‌گرا بودن و بهینه‌سازی",
        description:
          "طراحی و توسعه با تمرکز بر عملکرد بالا و سازگاری کامل با تمام دستگاه‌ها انجام می‌شود.",
      },
      {
        title: "طراحی و توسعه رابط کاربری",
        description:
          "با ترکیب خلاقیت و تجربه کاربری، رابط‌هایی زیبا، مدرن و کاربرپسند طراحی و پیاده‌سازی می‌شوند.",
      },
      {
        title: "تحویل، مستندسازی و پشتیبانی",
        description:
          "محصول نهایی با مستندات کامل تحویل داده می‌شود و پشتیبانی مستمر برای عملکرد مطمئن ارائه خواهد شد.",
      },
    ],
  };

  const stepTexts = texts[language];

  const steps = [
    {
      id: 1,
      title: stepTexts[0].title,
      description: stepTexts[0].description,
      icon: <AnalyticsIcon />,
    },
    {
      id: 2,
      title: stepTexts[1].title,
      description: stepTexts[1].description,
      icon: <DevicesIcon />,
    },
    {
      id: 3,
      title: stepTexts[2].title,
      description: stepTexts[2].description,
      icon: <DesignServicesIcon />,
    },
    {
      id: 4,
      title: stepTexts[3].title,
      description: stepTexts[3].description,
      icon: <AssignmentIcon />,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 4,
        justifyContent: "center",
        direction: language === "fa" ? "rtl" : "ltr",
        textAlign: language === "fa" ? "right" : "left",
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
