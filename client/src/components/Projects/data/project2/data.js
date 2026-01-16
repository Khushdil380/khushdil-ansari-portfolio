import reactIcon from "../../../../assets/techIcons/react.svg";
import javascriptIcon from "../../../../assets/techIcons/javascript.svg";
import pythonIcon from "../../../../assets/techIcons/python.svg";
import sqlIcon from "../../../../assets/techIcons/sql.svg";
import thumbnail from "./2.png";

const project2 = {
  id: 2,
  name: "Task Management App",
  thumbnail: thumbnail,
  startDate: "15 May 2024",
  endDate: "30 June 2024",
  duration: "45 days",
  category: "Mobile App",
  technologies: [
    { name: "React Native", icon: reactIcon },
    { name: "Firebase", icon: sqlIcon },
    { name: "Redux", icon: reactIcon },
    { name: "TypeScript", icon: javascriptIcon },
  ],
  abstract:
    "A cross-platform mobile application for task and project management with real-time collaboration features. Includes drag-and-drop task boards, deadline reminders, team chat, file sharing, and detailed analytics for productivity tracking.",
  liveDemo: "https://youtube.com",
  codeRepo: "https://github.com",
};

export default project2;
