import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "../../context/ThemeContext";
import "./ContentDisplay.css";

const ContentDisplay = ({ pageContent }) => {
  const { theme } = useTheme();

  if (!pageContent) {
    return (
      <div
        className="content-display content-display--empty"
        style={{ color: theme.content }}
      >
        <p>Select a topic to view content</p>
      </div>
    );
  }

  const renderSection = (section, index) => {
    switch (section.type) {
      case "heading":
        return (
          <h3
            key={index}
            className="content-display__heading"
            style={{ color: theme.heading }}
          >
            {section.content}
          </h3>
        );

      case "text":
        return (
          <p
            key={index}
            className="content-display__text"
            style={{ color: theme.content }}
          >
            {section.content}
          </p>
        );

      case "list":
        return (
          <ul
            key={index}
            className="content-display__list"
            style={{ color: theme.content }}
          >
            {section.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );

      case "code":
        return (
          <pre
            key={index}
            className="content-display__code"
            style={{ backgroundColor: theme.secondaryBg }}
          >
            <code style={{ color: theme.content }}>{section.content}</code>
          </pre>
        );

      default:
        return null;
    }
  };

  return (
    <div className="content-display">
      <h2 className="content-display__title" style={{ color: theme.heading }}>
        {pageContent.title}
      </h2>

      <div className="content-display__sections">
        {pageContent.sections.map((section, index) =>
          renderSection(section, index)
        )}
      </div>
    </div>
  );
};

ContentDisplay.propTypes = {
  pageContent: PropTypes.shape({
    page: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf(["heading", "text", "list", "code"]).isRequired,
        content: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.string),
        language: PropTypes.string,
      })
    ).isRequired,
  }),
};

export default ContentDisplay;
