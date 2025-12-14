import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "../../context/ThemeContext";
import CloseButton from "../Navigation/CloseButton";
import "./TopicDrawer.css";

const TopicDrawer = ({
  isOpen,
  topics,
  activeTopic,
  onTopicChange,
  onClose,
}) => {
  const { theme } = useTheme();

  const handleTopicSelect = (topicId) => {
    onTopicChange(topicId);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="topic-drawer__overlay" onClick={onClose} />
      <div
        className="topic-drawer"
        style={{ backgroundColor: theme.primaryBg }}
      >
        <div
          className="topic-drawer__header"
          style={{ borderBottom: `2px solid ${theme.subheading}` }}
        >
          <h3 style={{ color: theme.heading }}>Topics</h3>
          <CloseButton onClick={onClose} />
        </div>

        <div className="topic-drawer__content">
          {topics.map((topic) => (
            <button
              key={topic.id}
              className={`topic-drawer__item ${
                activeTopic === topic.id ? "topic-drawer__item--active" : ""
              }`}
              onClick={() => handleTopicSelect(topic.id)}
              style={{
                color: activeTopic === topic.id ? theme.heading : theme.content,
                backgroundColor:
                  activeTopic === topic.id ? theme.secondaryBg : "transparent",
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
      </div>
    </>
  );
};

TopicDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  activeTopic: PropTypes.string.isRequired,
  onTopicChange: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default TopicDrawer;
