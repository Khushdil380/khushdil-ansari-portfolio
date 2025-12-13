import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import AboutIntro from "./AboutIntro";
import StorySlider from "./StorySlider";
import "./AboutSection.css";

const AboutSection = () => {
  const { theme } = useTheme();
  const [showStory, setShowStory] = useState(false);

  const handleKnowMore = () => {
    setShowStory(true);
  };

  const handleBackToAbout = () => {
    setShowStory(false);
  };

  return (
    <section
      className="about-section"
      style={{
        "--primary-bg": theme.primaryBg,
      }}
    >
      <div className="about-container">
        {!showStory ? (
          <AboutIntro onKnowMore={handleKnowMore} />
        ) : (
          <StorySlider onBackToAbout={handleBackToAbout} />
        )}
      </div>
    </section>
  );
};

export default AboutSection;
