import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import ProjectNavigation from "./ProjectNavigation";
import ProjectDisplay from "./ProjectDisplay";
import projectsData from "./data/projectsData";
import "./ProjectsSection.css";

const ProjectsSection = () => {
  const { theme } = useTheme();
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const handleProjectChange = (newIndex) => {
    setActiveProjectIndex(newIndex);
  };

  const activeProject = projectsData[activeProjectIndex];

  return (
    <section
      className="projects-section"
      style={{
        backgroundColor: theme.primaryBg,
      }}
    >
      <div className="projects-section__container">
        <ProjectNavigation
          projects={projectsData}
          activeIndex={activeProjectIndex}
          onProjectChange={handleProjectChange}
        />

        <ProjectDisplay project={activeProject} />
      </div>
    </section>
  );
};

export default ProjectsSection;
