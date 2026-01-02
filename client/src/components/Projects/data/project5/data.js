import reactIcon from "./tech-icon/react.svg";
import javascriptIcon from "./tech-icon/javascript.svg";
import pythonIcon from "./tech-icon/python.svg";
import sqlIcon from "./tech-icon/sql.svg";

const project5 = {
  id: 5,
  name: "Social Media Dashboard",
  thumbnail: "/placeholder-project5.jpg",
  startDate: "1 December 2024",
  endDate: "31 December 2024",
  duration: "1 month",
  category: "Web App",
  technologies: [
    { name: "Next.js", icon: reactIcon },
    { name: "GraphQL", icon: javascriptIcon },
    { name: "PostgreSQL", icon: sqlIcon },
    { name: "Docker", icon: pythonIcon },
  ],
  abstract:
    "A comprehensive social media analytics dashboard for managing multiple accounts and tracking engagement metrics. Includes post scheduling, sentiment analysis, audience insights, competitor tracking, and automated reporting with customizable data visualizations.",
  liveDemo: "https://youtube.com",
  codeRepo: "https://github.com",
};

export default project5;
