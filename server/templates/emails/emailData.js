// Email template data configuration
const emailData = {
  // Base URL for hosted email images
  baseImageUrl:
    "https://khushdil-ansari-portfolio-frontend.vercel.app/email-images",

  personal: {
    name: "KHUSHDIL ANSARI (HE)",
    title: "Computer Science Engineer | Software Developer",
    quote: "The best way to get started is to quit talking and begin doing",
    responseTime: "24-48 hours",
    portfolioUrl: "https://khushdil-ansari-portfolio-frontend.vercel.app",
  },

  services: [
    {
      name: "Full Stack Development",
      description:
        "End-to-end web applications using React, Node.js, and modern frameworks. Building scalable solutions with clean architecture.",
      icon: "💻",
    },
    {
      name: "Android Development",
      description:
        "Native Android apps with Java/Kotlin. Creating intuitive mobile experiences with Material Design principles.",
      icon: "📱",
    },
    {
      name: "UI/UX Development",
      description:
        "User-centered design with Figma and Adobe XD. Crafting interfaces that are both beautiful and functional.",
      icon: "🎨",
    },
    {
      name: "Machine Learning",
      description:
        "ML models with Python, TensorFlow, and PyTorch. Implementing intelligent solutions for real-world problems.",
      icon: "🤖",
    },
    {
      name: "Teaching",
      description:
        "Technical mentorship and training in web development, programming, and software engineering best practices.",
      icon: "👨‍🏫",
    },
  ],

  stats: {
    projectsCompleted: "50+",
    yearsExperience: "3+",
  },

  navigation: [
    {
      label: "Projects",
      url: "https://khushdil-ansari-portfolio-frontend.vercel.app/projects",
      description:
        "Browse through my portfolio of web apps, mobile solutions, and ML projects showcasing real-world implementations",
    },
    {
      label: "Skills",
      url: "https://khushdil-ansari-portfolio-frontend.vercel.app/education",
      description:
        "View my technical stack including React, Node.js, Python, Java, and cloud technologies I work with",
    },
    {
      label: "Education",
      url: "https://khushdil-ansari-portfolio-frontend.vercel.app/education",
      description:
        "Discover my academic background, certifications, and continuous learning journey in computer science",
    },
    {
      label: "Services",
      url: "https://khushdil-ansari-portfolio-frontend.vercel.app/services",
      description:
        "Learn about the development services I offer from web apps to mobile solutions and consulting",
    },
    {
      label: "Blog",
      url: "https://khushdil-ansari-portfolio-frontend.vercel.app/blog",
      description:
        "Read my articles on software development, tech trends, coding tutorials, and industry insights",
    },
  ],

  social: [
    { name: "GitHub", icon: "🔗", url: "https://github.com/Khushdil380" },
    {
      name: "LinkedIn",
      icon: "💼",
      url: "https://www.linkedin.com/in/khushdil-ansari/",
    },
    {
      name: "Medium",
      icon: "📝",
      url: "https://medium.com/@khushdilansari345",
    },
    {
      name: "Quora",
      icon: "🔍",
      url: "https://www.quora.com/profile/Khushdil-Ansari-7",
    },
    { name: "X", icon: "🐦", url: "https://x.com/Khushdil_380" },
    {
      name: "WhatsApp",
      icon: "💬",
      url: "https://wa.me/918809059380?text=Hi%20Khushdil!%20I%20found%20your%20portfolio%20and%20would%20love%20to%20connect%20with%20you.%20I'm%20interested%20in%20discussing%20potential%20opportunities%20or%20collaboration.%20Looking%20forward%20to%20connecting!",
    },
  ],

  footer: {
    title: "Khushdil Ansari",
    subtitle: "Developer | Software Engineer",
    disclaimer:
      "This is an automated response. I will review your message and respond shortly. Please do not reply directly to this email.",
    copyright: "© 2026 Khushdil Ansari. All rights reserved.",
  },
};

module.exports = { emailData };
