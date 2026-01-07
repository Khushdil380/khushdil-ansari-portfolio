import reactIcon from "./tech-icon/react.svg";
import javascriptIcon from "./tech-icon/javascript.svg";
import pythonIcon from "./tech-icon/python.svg";
import sqlIcon from "./tech-icon/sql.svg";
import thumbnail from "./3.png";

const project3 = {
  id: 3,
  name: "Weather Dashboard",
  thumbnail: thumbnail,
  startDate: "1 August 2024",
  endDate: "15 September 2024",
  duration: "1.5 months",
  category: "Web App",
  technologies: [
    { name: "Vue.js", icon: reactIcon },
    { name: "OpenWeather API", icon: javascriptIcon },
    { name: "Chart.js", icon: javascriptIcon },
    { name: "Tailwind", icon: reactIcon },
  ],
  abstract:
    "An interactive weather dashboard providing real-time weather data, forecasts, and historical climate information. Features include geolocation-based weather, customizable widgets, severe weather alerts, and beautiful data visualizations with charts and graphs.",
  liveDemo: "https://youtube.com",
  codeRepo: "https://github.com",
};

export default project3;
