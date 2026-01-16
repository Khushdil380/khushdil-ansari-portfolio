import reactIcon from "../../../../assets/techIcons/react.svg";
import javascriptIcon from "../../../../assets/techIcons/javascript.svg";
import pythonIcon from "../../../../assets/techIcons/python.svg";
import sqlIcon from "../../../../assets/techIcons/sql.svg";
import cssIcon from "../../../../assets/techIcons/css.svg";
import cIcon from "../../../../assets/techIcons/c.svg";
import thumbnail from "./4.png";

const project4 = {
  id: 4,
  name: "Puzzle Game",
  thumbnail: thumbnail,
  startDate: "10 October 2024",
  endDate: "25 November 2024",
  duration: "46 days",
  category: "Game",
  technologies: [
    { name: "Python", icon: pythonIcon },
    { name: "C", icon: cIcon },
    { name: "React", icon: reactIcon },
    { name: "CSS", icon: cssIcon },
  ],
  abstract:
    "An engaging 3D puzzle game with progressive difficulty levels and immersive gameplay mechanics. Features include physics-based puzzles, level editor, achievement system, leaderboards, and stunning visual effects with optimized performance for multiple platforms.",
  liveDemo: "https://youtube.com",
  codeRepo: "https://github.com",
};

export default project4;
