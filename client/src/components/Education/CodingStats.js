import React from "react";
import { useTheme } from "../../context/ThemeContext";
import "./CodingStats.css";

const CodingStats = () => {
  const { theme } = useTheme();

  const codingPlatforms = [
    { id: 1, name: "LeetCode", url: "#" },
    { id: 2, name: "GeeksforGeeks", url: "#" },
    { id: 3, name: "HackerRank", url: "#" },
    { id: 4, name: "CodeChef", url: "#" },
  ];

  const handlePlatformClick = (platform) => {
    // Placeholder for future functionality
    console.log(`Clicked on ${platform.name}`);
  };

  return (
    <div className="coding-stats">
      <h2 className="coding-stats__title" style={{ color: theme.heading }}>
        Coding Profiles
      </h2>
      <div className="coding-stats__buttons">
        {codingPlatforms.map((platform) => (
          <button
            key={platform.id}
            className="coding-stats__button"
            onClick={() => handlePlatformClick(platform)}
            style={{
              borderColor: theme.accent,
              color: theme.text,
            }}
          >
            {platform.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CodingStats;
