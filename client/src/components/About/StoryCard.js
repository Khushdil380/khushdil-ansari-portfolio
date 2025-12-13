import React from "react";
import PropTypes from "prop-types";
import "./StoryCard.css";

const StoryCard = ({ story, theme }) => {
  return (
    <div className="story-card">
      {/* Image Section */}
      <div className="story-image-section">
        <div
          className="story-image-placeholder"
          style={{
            borderColor: theme.subheading,
          }}
        >
          <span style={{ color: theme.subheading }}>Image - {story.id}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="story-content-section">
        <h2 className="story-title" style={{ color: theme.heading }}>
          {story.title}
        </h2>
        <div className="story-text" style={{ color: theme.content }}>
          {story.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

StoryCard.propTypes = {
  story: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  theme: PropTypes.object.isRequired,
};

export default StoryCard;
