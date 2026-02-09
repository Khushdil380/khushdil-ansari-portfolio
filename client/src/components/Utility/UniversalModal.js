import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "../../context/ThemeContext";
import CloseButton from "./CloseButton";
import "./UniversalModal.css";

/**
 * UniversalModal - Centralized modal component for all modal needs
 * 
 * Supports multiple sizes and custom content rendering
 * Used by: Services (Know More), Resume Request, Skills, Education (Coding Stats)
 * 
 * @param {boolean} isOpen - Controls modal visibility
 * @param {function} onClose - Callback when modal closes
 * @param {string} size - Modal size: 'small' (600px), 'medium' (900px), 'large' (1200px), 'xlarge' (1400px)
 * @param {node} children - Content to render inside modal
 * @param {boolean} showCloseButton - Show/hide close button (default: true)
 * @param {boolean} closeOnBackdropClick - Allow closing on backdrop click (default: true)
 * @param {string} customClass - Additional CSS class for custom styling
 */
const UniversalModal = ({
  isOpen,
  onClose,
  size = "medium",
  children,
  showCloseButton = true,
  closeOnBackdropClick = true,
  customClass = "",
}) => {
  const { theme } = useTheme();

  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (closeOnBackdropClick && e.target.classList.contains("universal-modal")) {
      onClose();
    }
  };

  // Don't render if not open
  if (!isOpen) return null;

  return (
    <div
      className={`universal-modal ${customClass}`}
      onClick={handleBackdropClick}
    >
      <div
        className={`universal-modal__content universal-modal__content--${size}`}
        style={{
          backgroundColor: theme.primaryBg,
          color: theme.content,
          "--accent-color": theme.accent,
          "--border-color": theme.subheading,
          "--heading-color": theme.heading,
          "--content-color": theme.content,
          "--primary-bg": theme.primaryBg,
          "--secondary-bg": theme.secondaryBg,
          "--card-bg": theme.secondaryBg,
        }}
      >
        {/* Close Button */}
        {showCloseButton && (
          <div className="universal-modal__close">
            <CloseButton onClick={onClose} />
          </div>
        )}

        {/* Modal Content */}
        <div className="universal-modal__body">
          {children}
        </div>
      </div>
    </div>
  );
};

UniversalModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large", "xlarge"]),
  children: PropTypes.node.isRequired,
  showCloseButton: PropTypes.bool,
  closeOnBackdropClick: PropTypes.bool,
  customClass: PropTypes.string,
};

export default UniversalModal;
