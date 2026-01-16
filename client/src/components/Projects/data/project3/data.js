import reactIcon from "../../../../assets/techIcons/react.svg";
import javascriptIcon from "../../../../assets/techIcons/javascript.svg";
import pythonIcon from "../../../../assets/techIcons/python.svg";
import sqlIcon from "../../../../assets/techIcons/sql.svg";
import cssIcon from "../../../../assets/techIcons/css.svg";
import javaIcon from "../../../../assets/techIcons/java.svg";
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
    { name: "React", icon: reactIcon },
    { name: "Python", icon: pythonIcon },
    { name: "JavaScript", icon: javascriptIcon },
    { name: "CSS", icon: cssIcon },
  ],
  abstract:
    "An interactive weather dashboard providing real-time weather data, forecasts, and historical climate information. Features include geolocation-based weather, customizable widgets, severe weather alerts, and beautiful data visualizations with charts and graphs.",
  liveDemo: "https://youtube.com",
  codeRepo: "https://github.com",
};

export default project3;
