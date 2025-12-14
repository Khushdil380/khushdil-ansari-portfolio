import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "../../context/ThemeContext";
import Button from "../Utility/Button";
import "./ContentNavigation.css";

const ContentNavigation = ({ currentPage, totalPages, onPageChange }) => {
  const { theme } = useTheme();

  if (totalPages <= 1) return null;

  const hasPrevious = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return (
    <div className="content-navigation">
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        variant="secondary"
        disabled={!hasPrevious}
      >
        ◀ Prev
      </Button>

      <span
        className="content-navigation__indicator"
        style={{ color: theme.content }}
      >
        Page {currentPage} of {totalPages}
      </span>

      <Button
        onClick={() => onPageChange(currentPage + 1)}
        variant="secondary"
        disabled={!hasNext}
      >
        Next ▶
      </Button>
    </div>
  );
};

ContentNavigation.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default ContentNavigation;
