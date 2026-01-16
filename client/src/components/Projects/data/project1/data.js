import reactIcon from "../../../../assets/techIcons/react.svg";
import javascriptIcon from "../../../../assets/techIcons/javascript.svg";
import pythonIcon from "../../../../assets/techIcons/python.svg";
import sqlIcon from "../../../../assets/techIcons/sql.svg";
import cssIcon from "../../../../assets/techIcons/css.svg";
import javaIcon from "../../../../assets/techIcons/java.svg";
import thumbnail from "./1.png";

const project1 = {
  id: 1,
  name: "E-Commerce Platform",
  thumbnail: thumbnail,
  startDate: "3 March 2024",
  endDate: "6 April 2024",
  duration: "1 month",
  category: "Web App",
  technologies: [
    { name: "React", icon: reactIcon },
    { name: "JavaScript", icon: javascriptIcon },
    { name: "SQL", icon: sqlIcon },
    { name: "Java", icon: javaIcon },
  ],
  abstract:
    "A full-stack e-commerce platform with user authentication, product catalog, shopping cart, payment integration, and admin dashboard. Features include real-time inventory management, order tracking, and responsive design for mobile and desktop users.",
  liveDemo: "https://youtube.com",
  codeRepo: "https://github.com",
};

export default project1;
