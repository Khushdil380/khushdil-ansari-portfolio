import React from "react";
import { useTheme } from "../../context/ThemeContext";
import WorkExperience from "./WorkExperience";
import EducationItem from "./EducationItem";
import SkillItem from "./SkillItem";
import { workExperienceData, educationData, skillsData } from "./educationData";
import "./EducationSection.css";

const EducationSection = () => {
  const { theme } = useTheme();

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

        <div className="education-section__right">
          <h2
            className="education-section__title"
            style={{ color: theme.heading }}
          >
            Skills
          </h2>
          <div className="education-section__skills">
            {skillsData.map((skill) => (
              <SkillItem key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
