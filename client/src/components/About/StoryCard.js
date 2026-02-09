import React from "react";
import PropTypes from "prop-types";
import HorizontalImage from "../Utility/HorizontalImage";
import "./StoryCard.css";

const StoryCard = ({ story, theme }) => {
  return (
    <div className="story-card">
      {/* Image Section */}
      <div className="story-image-section">
        <HorizontalImage
          imagePath={`/about-image/${story.id}.png`}
          alt={`Story ${story.id}`}
          className="story-image"
          loading="eager"
          preload={true}
        />
      </div>

      {/* Content Section */}
      <div className="story-content-section">
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
