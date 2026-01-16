// Tech color configuration for bubble effects
// Each tech has: text, textColor, bgColor1, bgColor2 (for gradient)

export const techColors = {
  // Languages used in portfolio
  C: {
    text: "C Language",
    textColor: "#000",
    bgColor1: "#A8B9CC",
    bgColor2: "#5C6BC0",
  },
  "C++": {
    text: "C++",
    textColor: "#fff",
    bgColor1: "#00599C",
    bgColor2: "#004482",
  },
  CSS: {
    text: "CSS3",
    textColor: "#fff",
    bgColor1: "#1572B6",
    bgColor2: "#33A9DC",
  },
  Java: {
    text: "Java",
    textColor: "#fff",
    bgColor1: "#007396",
    bgColor2: "#E76F00",
  },
  JavaScript: {
    text: "JavaScript",
    textColor: "#000",
    bgColor1: "#F7DF1E",
    bgColor2: "#FFE66D",
  },
  Python: {
    text: "Python",
    textColor: "#fff",
    bgColor1: "#3776AB",
    bgColor2: "#FFD43B",
  },
  React: {
    text: "React",
    textColor: "#000",
    bgColor1: "#61DAFB",
    bgColor2: "#7EE2FC",
  },
  SQL: {
    text: "SQL",
    textColor: "#fff",
    bgColor1: "#CC2927",
    bgColor2: "#E38524",
  },

  // Frameworks & Libraries
  "Node.js": {
    text: "Node.js",
    textColor: "#fff",
    bgColor1: "#339933",
    bgColor2: "#66BB66",
  },
  "React Native": {
    text: "React Native",
    textColor: "#000",
    bgColor1: "#61DAFB",
    bgColor2: "#00D8FF",
  },
  Redux: {
    text: "Redux",
    textColor: "#fff",
    bgColor1: "#764ABC",
    bgColor2: "#993ECC",
  },
  "Vue.js": {
    text: "Vue.js",
    textColor: "#fff",
    bgColor1: "#42B883",
    bgColor2: "#35495E",
  },
  "Next.js": {
    text: "Next.js",
    textColor: "#fff",
    bgColor1: "#000000",
    bgColor2: "#333333",
  },
  Express: {
    text: "Express",
    textColor: "#fff",
    bgColor1: "#000000",
    bgColor2: "#404040",
  },
  Tailwind: {
    text: "Tailwind CSS",
    textColor: "#fff",
    bgColor1: "#06B6D4",
    bgColor2: "#0EA5E9",
  },
  "Chart.js": {
    text: "Chart.js",
    textColor: "#fff",
    bgColor1: "#FF6384",
    bgColor2: "#36A2EB",
  },

  // Languages
  TypeScript: {
    text: "TypeScript",
    textColor: "#fff",
    bgColor1: "#3178C6",
    bgColor2: "#235A97",
  },
  "C#": {
    text: "C#",
    textColor: "#fff",
    bgColor1: "#239120",
    bgColor2: "#68217A",
  },

  // Databases
  MongoDB: {
    text: "MongoDB",
    textColor: "#fff",
    bgColor1: "#47A248",
    bgColor2: "#4DB33D",
  },
  PostgreSQL: {
    text: "PostgreSQL",
    textColor: "#fff",
    bgColor1: "#336791",
    bgColor2: "#4169A1",
  },
  Firebase: {
    text: "Firebase",
    textColor: "#000",
    bgColor1: "#FFCA28",
    bgColor2: "#FFA000",
  },

  // Tools & Others
  GraphQL: {
    text: "GraphQL",
    textColor: "#fff",
    bgColor1: "#E10098",
    bgColor2: "#C3007A",
  },
  Docker: {
    text: "Docker",
    textColor: "#fff",
    bgColor1: "#2496ED",
    bgColor2: "#1D7FC5",
  },
  Unity: {
    text: "Unity",
    textColor: "#fff",
    bgColor1: "#000000",
    bgColor2: "#222222",
  },
  Blender: {
    text: "Blender",
    textColor: "#fff",
    bgColor1: "#F5792A",
    bgColor2: "#E67E22",
  },
  Photoshop: {
    text: "Photoshop",
    textColor: "#fff",
    bgColor1: "#31A8FF",
    bgColor2: "#0078D4",
  },
  "OpenWeather API": {
    text: "OpenWeather API",
    textColor: "#fff",
    bgColor1: "#EB6E4B",
    bgColor2: "#FF8C42",
  },

  // Default fallback
  default: {
    text: "Tech",
    textColor: "#fff",
    bgColor1: "#6366F1",
    bgColor2: "#8B5CF6",
  },
};

// Get color configuration for a tech
export const getTechColor = (techName) => {
  return techColors[techName] || techColors.default;
};
