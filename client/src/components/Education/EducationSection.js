import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import WorkExperience from "./WorkExperience";
import EducationItem from "./EducationItem";
import SkillItem from "./SkillItem";
import CodingStats from "./CodingStats";
import { workExperienceData, educationData, skillsData } from "./educationData";
import "./EducationSection.css";

const EducationSection = () => {
  const { theme } = useTheme();
  const [animationTrigger, setAnimationTrigger] = useState({});

  // Continuous random skill animation
  useEffect(() => {
    let timeoutId;
    let isActive = true;

    const triggerRandomAnimation = () => {
      if (!isActive) return;

      // Random delay between 3-5 seconds
      const randomDelay = Math.random() * 2000 + 3000;

      timeoutId = setTimeout(() => {
        if (!isActive) return;

        // Pick random skill
        const randomIndex = Math.floor(Math.random() * skillsData.length);
        const randomSkillId = skillsData[randomIndex].id;

        // Trigger animation for this skill by incrementing its counter
        setAnimationTrigger((prev) => ({
          ...prev,
          [randomSkillId]: (prev[randomSkillId] || 0) + 1,
        }));

        // Schedule next animation
        triggerRandomAnimation();
      }, randomDelay);
    };

    // Start the animation cycle
    triggerRandomAnimation();

    // Cleanup
    return () => {
      isActive = false;
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <section
      className="education-section"
      style={{
        backgroundColor: theme.primaryBg,
      }}
    >
      <div className="education-section__container">
        <div className="education-section__left">
          <div className="education-section__work">
            <h2
              className="education-section__title"
              style={{ color: theme.heading }}
            >
              Work Experience
            </h2>
            {workExperienceData.map((experience) => (
              <WorkExperience key={experience.id} experience={experience} />
            ))}
          </div>

          <div className="education-section__education">
            <h2
              className="education-section__title"
              style={{ color: theme.heading }}
            >
              Education
            </h2>
            {educationData.map((education) => (
              <EducationItem key={education.id} education={education} />
            ))}
          </div>
        </div>

        <div className="education-section__middle">
          <h2
            className="education-section__title"
            style={{ color: theme.heading }}
          >
            Skills
          </h2>
          <div className="education-section__skills">
            {skillsData.map((skill) => (
              <SkillItem
                key={skill.id}
                skill={skill}
                triggerAnimation={animationTrigger[skill.id] || 0}
              />
            ))}
          </div>
        </div>

        <div className="education-section__far-right">
          <CodingStats />
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
