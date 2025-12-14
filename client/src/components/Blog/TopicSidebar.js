import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "../../context/ThemeContext";
import "./TopicSidebar.css";

const TopicSidebar = ({ topics, activeTopic, onTopicChange }) => {
  const { theme } = useTheme();

  return (
    <aside
      className="topic-sidebar"
      style={{ backgroundColor: theme.secondaryBg }}
    >
      <div className="topic-sidebar__list">
        {topics.map((topic) => (
          <button
            key={topic.id}
            className={`topic-sidebar__item ${
              activeTopic === topic.id ? "topic-sidebar__item--active" : ""
            }`}
            onClick={() => onTopicChange(topic.id)}
            style={{
              color: activeTopic === topic.id ? theme.heading : theme.content,
              backgroundColor:
                activeTopic === topic.id ? theme.primaryBg : "transparent",
              borderLeft:
                activeTopic === topic.id
                  ? `4px solid ${theme.accent}`
                  : "4px solid transparent",
            }}
          >
            {topic.title}
          </button>
        ))}
      </div>
    </aside>
  );
};

TopicSidebar.propTypes = {
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  activeTopic: PropTypes.string.isRequired,
  onTopicChange: PropTypes.func.isRequired,
};

export default TopicSidebar;
