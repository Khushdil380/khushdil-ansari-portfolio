import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import PropTypes from "prop-types";
import CloseButton from "../Utility/CloseButton";
import Button from "../Utility/Button";
import "./RequestResumeModal.css";
import "./AnimatedBorder.css";

const RequestResumeModal = ({ isOpen, onClose }) => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    companyName: "",
    receiverEmail: "",
    requirement: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000";
      const response = await fetch(`${apiUrl}/api/resume-request`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          companyName: "",
          receiverEmail: "",
          requirement: "",
          description: "",
        });
        setTimeout(() => {
          onClose();
          setSubmitStatus(null);
        }, 2000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting resume request:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="resume-modal-overlay">
      <div
        className="resume-modal-content animated-border"
        style={{
          "--secondary-bg": theme.secondaryBg,
          "--heading-color": theme.heading,
          "--content-color": theme.content,
          "--accent-color": theme.accent,
          "--primary-bg": theme.primaryBg,
          "--card-bg": theme.secondaryBg,
        }}
      >
        <div className="resume-modal-header">
          <h2 className="resume-modal-title" style={{ color: theme.heading }}>
            Request Resume
          </h2>
          <CloseButton onClick={onClose} />
        </div>

        <form onSubmit={handleSubmit} className="resume-form">
          <div className="form-group">
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
              placeholder="Company Name *"
              style={{
                backgroundColor: theme.primaryBg,
                color: theme.content,
                borderColor: theme.subheading,
              }}
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              id="receiverEmail"
              name="receiverEmail"
              value={formData.receiverEmail}
              onChange={handleChange}
              required
              placeholder="Receiver Email *"
              style={{
                backgroundColor: theme.primaryBg,
                color: theme.content,
                borderColor: theme.subheading,
              }}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              id="requirement"
              name="requirement"
              value={formData.requirement}
              onChange={handleChange}
              required
              placeholder="Position/Role Requirement *"
              style={{
                backgroundColor: theme.primaryBg,
                color: theme.content,
                borderColor: theme.subheading,
              }}
            />
          </div>

          <div className="form-group">
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              placeholder="Additional details (Optional)"
              style={{
                backgroundColor: theme.primaryBg,
                color: theme.content,
                borderColor: theme.subheading,
              }}
            />
          </div>

          {submitStatus === "success" && (
            <div
              className="submit-message success"
              style={{ color: theme.accent }}
            >
              ✓ Request sent successfully!
            </div>
          )}

          {submitStatus === "error" && (
            <div className="submit-message error" style={{ color: "#ff4444" }}>
              ✗ Failed to send request. Please try again.
            </div>
          )}

          <div className="form-actions">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Submit Request"}
            </Button>
            <Button
              type="button"
              variant="secondary"
              onClick={() =>
                setFormData({
                  companyName: "",
                  receiverEmail: "",
                  requirement: "",
                  description: "",
                })
              }
            >
              Clear
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

RequestResumeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default RequestResumeModal;
