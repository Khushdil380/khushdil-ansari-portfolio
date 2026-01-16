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
