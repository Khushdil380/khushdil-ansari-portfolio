import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import CodingStatsModal from "./CodingStatsModal";
import "./CodingStats.css";

const CodingStats = () => {
  const { theme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState(null);

  const codingPlatforms = [
    { id: 1, name: "LeetCode", url: "#" },
    { id: 2, name: "GeeksforGeeks", url: "#" },
    { id: 3, name: "HackerRank", url: "#" },
    { id: 4, name: "CodeChef", url: "#" },
  ];

  const handlePlatformClick = (platform) => {
    setSelectedPlatform(platform);
    setIsModalOpen(true);
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
              "--coding-border-color": theme.subheading,
              "--coding-text-color": theme.content,
            }}
          >
            {platform.name}
          </button>
        ))}
      </div>

      {/* Coding Stats Modal */}
      <CodingStatsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        platform={selectedPlatform}
      />
    </div>
  );
};

export default CodingStats;
