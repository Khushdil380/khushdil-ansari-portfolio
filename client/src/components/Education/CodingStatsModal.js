import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "../../context/ThemeContext";
import UniversalModal from "../Utility/UniversalModal";
import "./CodingStatsModal.css";

/**
 * CodingStatsModal - Displays detailed coding statistics
 * Used in Education page (Coding Profiles) and Skills section
 * Uses UniversalModal with "large" size for rich content display
 */
const CodingStatsModal = ({ isOpen, onClose, platform }) => {
  const { theme } = useTheme();

  if (!platform) return null;

  return (
    <UniversalModal
      isOpen={isOpen}
      onClose={onClose}
      size="large"
      closeOnBackdropClick={true}
      customClass="coding-stats-modal"
    >
      <div className="coding-stats-modal__content">
        {/* Header */}
        <div className="coding-stats-modal__header">
          <h2
            className="coding-stats-modal__title"
            style={{ color: theme.heading }}
          >
            {platform.name} - Coding Statistics
          </h2>
          <p
            className="coding-stats-modal__subtitle"
            style={{ color: theme.subheading }}
          >
            Performance Overview & Achievements
          </p>
        </div>

        {/* Stats Grid - Placeholder for future content */}
        <div className="coding-stats-modal__grid">
          <div
            className="coding-stats-modal__card"
            style={{
              backgroundColor: theme.secondaryBg,
              borderColor: theme.subheading,
            }}
          >
            <h3
              className="coding-stats-modal__card-title"
              style={{ color: theme.accent }}
            >
              Total Problems Solved
            </h3>
            <p
              className="coding-stats-modal__card-value"
              style={{ color: theme.heading }}
            >
              ---
            </p>
            <p
              className="coding-stats-modal__card-label"
              style={{ color: theme.content }}
            >
              Problems Completed
            </p>
          </div>

          <div
            className="coding-stats-modal__card"
            style={{
              backgroundColor: theme.secondaryBg,
              borderColor: theme.subheading,
            }}
          >
            <h3
              className="coding-stats-modal__card-title"
              style={{ color: theme.accent }}
            >
              Contest Rating
            </h3>
            <p
              className="coding-stats-modal__card-value"
              style={{ color: theme.heading }}
            >
              ---
            </p>
            <p
              className="coding-stats-modal__card-label"
              style={{ color: theme.content }}
            >
              Current Rating
            </p>
          </div>

          <div
            className="coding-stats-modal__card"
            style={{
              backgroundColor: theme.secondaryBg,
              borderColor: theme.subheading,
            }}
          >
            <h3
              className="coding-stats-modal__card-title"
              style={{ color: theme.accent }}
            >
              Global Rank
            </h3>
            <p
              className="coding-stats-modal__card-value"
              style={{ color: theme.heading }}
            >
              ---
            </p>
            <p
              className="coding-stats-modal__card-label"
              style={{ color: theme.content }}
            >
              Overall Ranking
            </p>
          </div>

          <div
            className="coding-stats-modal__card"
            style={{
              backgroundColor: theme.secondaryBg,
              borderColor: theme.subheading,
            }}
          >
            <h3
              className="coding-stats-modal__card-title"
              style={{ color: theme.accent }}
            >
              Streak Days
            </h3>
            <p
              className="coding-stats-modal__card-value"
              style={{ color: theme.heading }}
            >
              ---
            </p>
            <p
              className="coding-stats-modal__card-label"
              style={{ color: theme.content }}
            >
              Consecutive Days
            </p>
          </div>
        </div>

        {/* Placeholder Section */}
        <div className="coding-stats-modal__placeholder">
          <p style={{ color: theme.content }}>
            📊 Detailed statistics and charts will be displayed here
          </p>
          <p style={{ color: theme.subheading, fontSize: "0.9rem" }}>
            Content structure is ready for customization
          </p>
        </div>
      </div>
    </UniversalModal>
  );
};

CodingStatsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  platform: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string,
  }),
};

export default CodingStatsModal;
