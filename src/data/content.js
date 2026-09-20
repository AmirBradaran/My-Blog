import digitalShopImg from "../assets/figma(1).jpg";
import electroImg from "../assets/electro.png";
import motorImg from "../assets/motorx.jpg";
import landingImg from "../assets/Dark-Landing-Page.jpg";
import dashboardImg from "../assets/Dashboard-Page-v1.jpg";
import blogImg from "../assets/Blog-Mine.jpg";
import lightInfoImg from "../assets/Light-Information-Page.jpg";
import adminPanelImg from "../assets/Desktop-Dashboard-Admin-Panel-v3.png";
import buySellImg from "../assets/Buy-and-sell-table-1.jpg";
import stdDashImg from "../assets/Std-Dshboard-v1.jpg";
import dashAdminImg from "../assets/Dashboard-Admin-Panel-v-03.jpg";

export const brand = {
  name: "Baradaran",
  fullName: {
    en: "AmirMohammad Baradaran Hosseini",
    fa: "امیرمحمد برادران حسینی",
  },
  shortName: {
    en: "AmirMohammad",
    fa: "امیرمحمد",
  },
  role: {
    en: "Front-end Developer & UI Designer",
    fa: "توسعه‌دهنده فرانت‌اند و طراح رابط کاربری",
  },
  location: {
    en: "Mashhad, Iran",
    fa: "مشهد، ایران",
  },
};

export const nav = {
  en: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
    { id: "work", label: "Work" },
    { id: "contact", label: "Contact" },
  ],
  fa: [
    { id: "home", label: "خانه" },
    { id: "about", label: "درباره" },
    { id: "resume", label: "رزومه" },
    { id: "work", label: "کارها" },
    { id: "contact", label: "تماس" },
  ],
};

export const hero = {
  en: {
    brand: "Baradaran",
    headline: "Interfaces with cinematic presence.",
    support:
      "I craft modern web experiences where motion, clarity, and craft meet — built to hire, built to last.",
    ctaPrimary: "View Work",
    ctaSecondary: "Let's Talk",
  },
  fa: {
    brand: "Baradaran",
    headline: "رابط‌هایی با حضور سینمایی.",
    support:
      "تجربه‌های وب مدرن می‌سازم جایی که حرکت، وضوح و دقت به هم می‌رسند — برای استخدام شدن، برای ماندن.",
    ctaPrimary: "مشاهده کارها",
    ctaSecondary: "گفتگو کنیم",
  },
};

export const about = {
  en: {
    eyebrow: "About",
    title: "Building digital products people feel.",
    body: "I'm AmirMohammad Baradaran Hosseini — a freelance front-end developer and UI designer based in Mashhad. I turn ideas into polished React experiences with careful typography, responsive structure, and intentional motion.",
    points: [
      "Hireable and open to remote collaboration",
      "Focused on React, modern CSS, and UX clarity",
      "Shipping real products from concept to deploy",
    ],
  },
  fa: {
    eyebrow: "درباره من",
    title: "محصولاتی دیجیتال که حس می‌شوند.",
    body: "من امیرمحمد برادران حسینی هستم — توسعه‌دهنده فرانت‌اند فریلنسر و طراح UI مقیم مشهد. ایده‌ها را به تجربه‌های React صیقلی تبدیل می‌کنم با تایپوگرافی دقیق، ساختار واکنش‌گرا و موشن هدفمند.",
    points: [
      "آماده همکاری ریموت و استخدام",
      "تمرکز روی React، CSS مدرن و وضوح UX",
      "از ایده تا دیپلوی محصولات واقعی",
    ],
  },
};

export const resume = {
  en: {
    eyebrow: "Resume",
    title: "Experience shaped by shipped work.",
    experienceTitle: "Experience",
    skillsTitle: "Skills",
    statsTitle: "At a glance",
    experience: [
      {
        role: "Freelance Front-end Developer",
        company: "Independent",
        period: "2024 — Present",
        bullets: [
          "Designed and built React web apps, landing pages, and admin dashboards.",
          "Delivered e-commerce, media, and game-related UI experiences end to end.",
          "Collaborated remotely with clear communication and iteration cycles.",
        ],
      },
    ],
    skills: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Vite",
      "Framer Motion",
      "Three.js / R3F",
      "MUI",
      "Responsive Design",
      "UI / UX",
      "REST APIs",
      "Git / GitHub",
    ],
    stats: [
      { value: "8+", label: "Public projects" },
      { value: "2+", label: "Years building" },
      { value: "∞", label: "Craft focus" },
    ],
  },
  fa: {
    eyebrow: "رزومه",
    title: "تجربه‌ای ساخته‌شده از کار واقعی.",
    experienceTitle: "سابقه",
    skillsTitle: "مهارت‌ها",
    statsTitle: "در یک نگاه",
    experience: [
      {
        role: "توسعه‌دهنده فرانت‌اند فریلنسر",
        company: "مستقل",
        period: "۲۰۲۴ — اکنون",
        bullets: [
          "طراحی و ساخت وب‌اپ‌های React، لندینگ‌پیج و داشبوردهای مدیریتی.",
          "تحویل تجربه‌های UI فروشگاهی، رسانه‌ای و گیم از ابتدا تا انتها.",
          "همکاری ریموت با ارتباط شفاف و چرخه‌های تکرار سریع.",
        ],
      },
    ],
    skills: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Vite",
      "Framer Motion",
      "Three.js / R3F",
      "MUI",
      "طراحی واکنش‌گرا",
      "UI / UX",
      "REST APIs",
      "Git / GitHub",
    ],
    stats: [
      { value: "۸+", label: "پروژه عمومی" },
      { value: "۲+", label: "سال ساخت" },
      { value: "∞", label: "تمرکز روی کیفیت" },
    ],
  },
};

export const projects = {
  en: {
    eyebrow: "Selected Work",
    title: "Projects from the build log.",
    subtitle: "Real repositories and UI studies — click through to GitHub.",
    viewGithub: "GitHub",
    viewLive: "Live",
  },
  fa: {
    eyebrow: "کارهای منتخب",
    title: "پروژه‌ها از لاگ ساخت.",
    subtitle: "ریپازیتوری‌های واقعی و مطالعات UI — برای دیدن کد به گیت‌هاب بروید.",
    viewGithub: "گیت‌هاب",
    viewLive: "لایو",
  },
  items: [
    {
      id: "digital-shop",
      title: { en: "Digital Shop", fa: "دیجیتال شاپ" },
      description: {
        en: "Household appliances storefront built with React — product browsing with a clean commerce UI.",
        fa: "فروشگاه لوازم خانگی با React — مرور محصول با رابط فروشگاهی تمیز.",
      },
      stack: ["React", "JavaScript", "CSS"],
      image: digitalShopImg,
      github: "https://github.com/AmirBradaran/Digital-Shop",
      live: null,
      category: "commerce",
    },
    {
      id: "sedaplus",
      title: { en: "SedaPlus", fa: "صداپلاس" },
      description: {
        en: "Web application focused on polished interaction and modern front-end structure.",
        fa: "وب‌اپلیکیشن با تمرکز روی تعامل صیقلی و ساختار فرانت‌اند مدرن.",
      },
      stack: ["React", "JavaScript"],
      image: landingImg,
      github: "https://github.com/AmirBradaran/SedaPlus",
      live: null,
      category: "app",
    },
    {
      id: "gamespartty",
      title: { en: "GamesPartty", fa: "گیمزپارتی" },
      description: {
        en: "Game-oriented web experience with playful UI patterns in React.",
        fa: "تجربه وب گیم‌محور با الگوهای UI بازی‌گونه در React.",
      },
      stack: ["React", "JavaScript"],
      image: motorImg,
      github: "https://github.com/AmirBradaran/GamesPartty",
      live: null,
      category: "game",
    },
    {
      id: "food-website",
      title: { en: "Food Website", fa: "سایت غذا" },
      description: {
        en: "Food-focused React site with appetizing layout and responsive sections.",
        fa: "سایت غذا با React؛ چیدمان جذاب و سکشن‌های واکنش‌گرا.",
      },
      stack: ["React", "JavaScript"],
      image: electroImg,
      github: "https://github.com/AmirBradaran/Food-Website",
      live: null,
      category: "marketing",
    },
    {
      id: "namava",
      title: { en: "Namava Clone", fa: "کلون نماوا" },
      description: {
        en: "Streaming-style interface rebuilt with HTML, CSS, and JavaScript.",
        fa: "رابط استریمینگ بازسازی‌شده با HTML، CSS و JavaScript.",
      },
      stack: ["HTML", "CSS", "JavaScript"],
      image: blogImg,
      github: "https://github.com/AmirBradaran/Namava-Site-Js",
      live: null,
      category: "media",
    },
    {
      id: "clash-carts",
      title: { en: "Clash Cards", fa: "کارت‌های کلش" },
      description: {
        en: "Clash of Clans card UI with React hooks and json-server data flow.",
        fa: "UI کارت کلش‌آف‌کلنز با React hooks و جریان داده json-server.",
      },
      stack: ["React", "CSS", "json-server"],
      image: buySellImg,
      github: "https://github.com/AmirBradaran/Clash-Of-Clans-Carts-React",
      live: null,
      category: "app",
    },
    {
      id: "calculator",
      title: { en: "Calculator", fa: "ماشین‌حساب" },
      description: {
        en: "Clean React calculator — focused UI and precise interaction states.",
        fa: "ماشین‌حساب React تمیز — UI متمرکز و stateهای تعامل دقیق.",
      },
      stack: ["React", "JavaScript", "CSS"],
      image: lightInfoImg,
      github: "https://github.com/AmirBradaran/Calculator",
      live: null,
      category: "utility",
    },
    {
      id: "my-blog",
      title: { en: "This Portfolio", fa: "همین پورتفولیو" },
      description: {
        en: "Personal cinematic portfolio — React, motion, and 3D presence.",
        fa: "پورتفولیو شخصی سینمایی — React، موشن و حضور سه‌بعدی.",
      },
      stack: ["React", "R3F", "Framer Motion"],
      image: dashboardImg,
      github: "https://github.com/AmirBradaran/My-Blog",
      live: "https://my-blog-qrlf.vercel.app",
      category: "portfolio",
    },
    {
      id: "ui-admin",
      title: { en: "Admin Dashboard UI", fa: "UI داشبورد ادمین" },
      description: {
        en: "UI study for dense admin panels — hierarchy, tables, and clarity.",
        fa: "مطالعه UI برای پنل‌های ادمین متراکم — سلسله‌مراتب، جدول و وضوح.",
      },
      stack: ["UI/UX", "Figma"],
      image: adminPanelImg,
      github: null,
      live: null,
      category: "ui",
    },
    {
      id: "ui-std",
      title: { en: "Operations Panel", fa: "پنل عملیات" },
      description: {
        en: "Dashboard layout exploration for monitoring and management flows.",
        fa: "کاوش چیدمان داشبورد برای جریان‌های مانیتورینگ و مدیریت.",
      },
      stack: ["UI/UX"],
      image: stdDashImg,
      github: null,
      live: null,
      category: "ui",
    },
    {
      id: "ui-dash-v3",
      title: { en: "Analytics Shell", fa: "پوسته آنالیتیکس" },
      description: {
        en: "Visual system for analytics dashboards with strong contrast and grid.",
        fa: "سیستم بصری برای داشبورد آنالیتیکس با کنتراست قوی و گرید.",
      },
      stack: ["UI/UX"],
      image: dashAdminImg,
      github: null,
      live: null,
      category: "ui",
    },
  ],
};

export const process = {
  en: {
    eyebrow: "Process",
    title: "How the work moves.",
    steps: [
      {
        num: "01",
        title: "Discovery & Plan",
        text: "Clarify goals, users, and constraints before a single pixel ships.",
      },
      {
        num: "02",
        title: "Design System",
        text: "Define type, color, and motion so the product feels intentional.",
      },
      {
        num: "03",
        title: "Build & Polish",
        text: "React implementation with responsive layouts and cinematic detail.",
      },
      {
        num: "04",
        title: "Ship & Support",
        text: "Deploy, document, and iterate with feedback that matters.",
      },
    ],
  },
  fa: {
    eyebrow: "فرآیند",
    title: "کار چگونه جلو می‌رود.",
    steps: [
      {
        num: "۰۱",
        title: "کشف و برنامه",
        text: "اهداف، کاربران و محدودیت‌ها را قبل از یک پیکسل مشخص می‌کنم.",
      },
      {
        num: "۰۲",
        title: "سیستم طراحی",
        text: "تایپ، رنگ و موشن را تعریف می‌کنم تا محصول حس هدفمند داشته باشد.",
      },
      {
        num: "۰۳",
        title: "ساخت و صیقل",
        text: "پیاده‌سازی React با چیدمان واکنش‌گرا و جزئیات سینمایی.",
      },
      {
        num: "۰۴",
        title: "تحویل و پشتیبانی",
        text: "دیپلوی، مستندسازی و تکرار بر اساس بازخورد واقعی.",
      },
    ],
  },
};

export const cta = {
  en: {
    title: "Have a project in mind?",
    body: "Let's build a website that feels inevitable — modern, memorable, and ready for the next hire conversation.",
    button: "Start a conversation",
  },
  fa: {
    title: "ایده‌ای برای پروژه دارید؟",
    body: "بیایید سایتی بسازیم که اجتناب‌ناپذیر به نظر برسد — مدرن، به‌یادماندنی و آماده گفتگوی استخدام.",
    button: "شروع گفتگو",
  },
};

export const contact = {
  en: {
    eyebrow: "Contact",
    title: "Let's discuss your project.",
    body: "Send a message and it lands in my inbox. Prefer social? I'm active on the channels below.",
    fields: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      submit: "Send message",
      sending: "Sending…",
      success: "Message sent. I'll get back to you soon.",
      error: "Something went wrong. Try again or email me directly.",
    },
    addressLabel: "Location",
    emailLabel: "Email",
    phoneLabel: "Phone",
  },
  fa: {
    eyebrow: "تماس",
    title: "بیایید درباره پروژه‌تان حرف بزنیم.",
    body: "پیام بفرستید تا مستقیم به اینباکس من برسد. ترجیح شبکه اجتماعی؟ کانال‌های زیر فعال‌اند.",
    fields: {
      name: "نام",
      email: "ایمیل",
      subject: "موضوع",
      message: "پیام",
      submit: "ارسال پیام",
      sending: "در حال ارسال…",
      success: "پیام ارسال شد. به‌زودی پاسخ می‌دهم.",
      error: "مشکلی پیش آمد. دوباره تلاش کنید یا مستقیم ایمیل بزنید.",
    },
    addressLabel: "موقعیت",
    emailLabel: "ایمیل",
    phoneLabel: "تلفن",
  },
  info: {
    email: "baradaran13085@gmail.com",
    phone: "+98 930 190 5219",
    location: { en: "Iran, Mashhad", fa: "ایران، مشهد" },
  },
  socials: [
    {
      name: "Instagram",
      url: "https://instagram.com/codemashad",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/amirmohamad-baradaran-6b5a45328/",
    },
    {
      name: "GitHub",
      url: "https://github.com/AmirBradaran",
    },
    {
      name: "Telegram",
      url: "https://t.me/codemashad_021",
    },
  ],
};

export const footer = {
  en: {
    rights: "Crafted with cinematic intent.",
  },
  fa: {
    rights: "ساخته‌شده با نیت سینمایی.",
  },
};
