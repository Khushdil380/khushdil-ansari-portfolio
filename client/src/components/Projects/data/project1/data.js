import reactIcon from "./tech-icon/react.svg";
import javascriptIcon from "./tech-icon/javascript.svg";
import pythonIcon from "./tech-icon/python.svg";
import sqlIcon from "./tech-icon/sql.svg";

const project1 = {
  id: 1,
  name: "E-Commerce Platform",
  thumbnail: "/placeholder-project1.jpg",
  startDate: "3 March 2024",
  endDate: "6 April 2024",
  duration: "1 month",
  category: "Web App",
  technologies: [
    { name: "React", icon: reactIcon },
    { name: "Node.js", icon: javascriptIcon },
    { name: "MongoDB", icon: sqlIcon },
    { name: "Express", icon: javascriptIcon },
    { name: "Redux", icon: reactIcon },
  ],
  abstract:
    "A full-stack e-commerce platform with user authentication, product catalog, shopping cart, payment integration, and admin dashboard. Features include real-time inventory management, order tracking, and responsive design for mobile and desktop users.",
  liveDemo: "https://youtube.com",
  codeRepo: "https://github.com",
};

export default project1;
