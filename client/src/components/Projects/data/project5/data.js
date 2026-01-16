import reactIcon from "../../../../assets/techIcons/react.svg";
import javascriptIcon from "../../../../assets/techIcons/javascript.svg";
import pythonIcon from "../../../../assets/techIcons/python.svg";
import sqlIcon from "../../../../assets/techIcons/sql.svg";
import javaIcon from "../../../../assets/techIcons/java.svg";
import cssIcon from "../../../../assets/techIcons/css.svg";
import thumbnail from "./5.png";

const project5 = {
  id: 5,
  name: "Social Media Dashboard",
  thumbnail: thumbnail,
  startDate: "1 December 2024",
  endDate: "31 December 2024",
  duration: "1 month",
  category: "Web App",
  technologies: [
    { name: "React", icon: reactIcon },
    { name: "JavaScript", icon: javascriptIcon },
    { name: "SQL", icon: sqlIcon },
    { name: "Python", icon: pythonIcon },
  ],
  abstract:
    "A comprehensive social media analytics dashboard for managing multiple accounts and tracking engagement metrics. Includes post scheduling, sentiment analysis, audience insights, competitor tracking, and automated reporting with customizable data visualizations.",
  liveDemo: "https://youtube.com",
  codeRepo: "https://github.com",
};

export default project5;
