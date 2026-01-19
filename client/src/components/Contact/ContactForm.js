import React, { useState, useEffect, lazy, Suspense } from "react";
import { useTheme } from "../../context/ThemeContext";
import Button from "../Utility/Button";
import PropTypes from "prop-types";
import "./ContactForm.css";

/**
 * =============================================================================
 * LAZY LOADED COMPONENTS - Resume Request Feature
 * =============================================================================
 * These components are lazy loaded to improve initial page load performance.
 * They only load when the user interacts with the resume request button.
 *
 * To remove resume request feature:
 * 1. Delete these lazy imports
 * 2. Remove RequestResumeButton from contact-form__actions-left div
 * 3. Remove ContactFormWithModal wrapper at the bottom
 * 4. Export ContactForm directly
 * 5. Clean up unused CSS: .contact-form__actions-left styles
 */
const RequestResumeButton = lazy(
  () => import("../Utility/RequestResumeButton"),
);
const RequestResumeModal = lazy(() => import("../Utility/RequestResumeModal"));

/**
 * =============================================================================
 * CONTACT FORM COMPONENT
 * =============================================================================
 * Main contact form for user inquiries with validation and API submission.
 *
 * Props:
 * @param {function} onResumeRequest - Callback to open resume request modal
 *
 * Features:
 * - Form validation with real-time error display
 * - Auto-dismiss success/error messages (6 seconds)
 * - API integration for email submission
 * - Resume request button integration (left side of actions)
 *
 * Layout Structure:
 * - Form fields: Full Name, Email, Title, Message
 * - Action buttons row:
 *   - Left: Resume Request Button (lazy loaded)
 *   - Right: Clear + Submit buttons
 */
const ContactForm = ({ onResumeRequest }) => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    title: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Auto-dismiss success/error message after 6 seconds
  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 6000);

      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    } else if (formData.title.trim().length < 3) {
      newErrors.title = "Title must be at least 3 characters";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleClear = () => {
    setFormData({
      fullName: "",
      email: "",
      title: "",
      message: "",
    });
    setErrors({});
    setSubmitStatus(null);
  };

  const handleCloseStatus = () => {
    setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000";
      const response = await fetch(`${apiUrl}/api/contact/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({
          type: "success",
          message:
            "Your query has been submitted successfully! Please check your email for confirmation.",
        });
        // Clear form after showing success message
        setTimeout(() => {
          setFormData({
            fullName: "",
            email: "",
            title: "",
            message: "",
          });
          setErrors({});
        }, 100);
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Submit error:", error);
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Loading spinner component
  const LoadingSpinner = () => (
    <svg
      className="contact-form__spinner"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="32"
        strokeDashoffset="32"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="32;0"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__field">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="contact-form__input"
          style={{
            borderColor: errors.fullName ? theme.accent : theme.subheading,
            color: theme.content,
            backgroundColor: theme.secondaryBg,
          }}
        />
        {errors.fullName && (
          <span className="contact-form__error">{errors.fullName}</span>
        )}
      </div>

      <div className="contact-form__field">
        <input
          type="email"
          name="email"
          placeholder="Correct Email"
          value={formData.email}
          onChange={handleChange}
          className="contact-form__input"
          style={{
            borderColor: errors.email ? theme.accent : theme.subheading,
            color: theme.content,
            backgroundColor: theme.secondaryBg,
          }}
        />
        {errors.email && (
          <span className="contact-form__error">{errors.email}</span>
        )}
      </div>

      <div className="contact-form__field">
        <input
          type="text"
          name="title"
          placeholder="Title about query"
          value={formData.title}
          onChange={handleChange}
          className="contact-form__input"
          style={{
            borderColor: errors.title ? theme.accent : theme.subheading,
            color: theme.content,
            backgroundColor: theme.secondaryBg,
          }}
        />
        {errors.title && (
          <span className="contact-form__error">{errors.title}</span>
        )}
      </div>

      <div className="contact-form__field">
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="contact-form__textarea"
          rows="6"
          style={{
            borderColor: errors.message ? theme.accent : theme.subheading,
            color: theme.content,
            backgroundColor: theme.secondaryBg,
          }}
        />
        {errors.message && (
          <span className="contact-form__error">{errors.message}</span>
        )}
      </div>

      {submitStatus && (
        <div
          className={`contact-form__status contact-form__status--${submitStatus.type}`}
          style={{
            backgroundColor:
              submitStatus.type === "success" ? theme.subheading : theme.accent,
          }}
        >
          <span>{submitStatus.message}</span>
          <button
            type="button"
            className="contact-form__status-close"
            onClick={handleCloseStatus}
            aria-label="Close message"
          >
            ×
          </button>
        </div>
      )}

      {/* 
        =======================================================================
        ACTION BUTTONS ROW - Three-button layout
        =======================================================================
        Layout: [Resume Request]  <--- space --->  [Clear] [Submit]
        
        Structure:
        - contact-form__actions: Main container (space-between alignment)
          - contact-form__actions-left: Resume request button (left side)
          - contact-form__actions-right: Clear + Submit buttons (right side)
        
        Responsive behavior:
        - Desktop: Resume left, Clear/Submit right with full-width spacing
        - Mobile: Same layout maintained for consistency
        
        To remove resume button:
        - Delete contact-form__actions-left div
        - Update CSS: change justify-content to flex-end
        - Keep only contact-form__actions-right div
      */}
      <div className="contact-form__actions">
        {/* Resume Request Button - Left side */}
        <div className="contact-form__actions-left">
          <Suspense fallback={null}>
            <RequestResumeButton onClick={onResumeRequest} />
          </Suspense>
        </div>

        {/* Form Action Buttons - Right side */}
        <div className="contact-form__actions-right">
          <Button
            type="button"
            onClick={handleClear}
            variant="secondary"
            disabled={isSubmitting}
          >
            Clear
          </Button>
          <Button type="submit" variant="primary" disabled={isSubmitting}>
            {isSubmitting ? (
              <span className="contact-form__button-content">
                <LoadingSpinner />
                Sending...
              </span>
            ) : (
              "Submit"
            )}
          </Button>
        </div>
      </div>
    </form>
  );
};

ContactForm.propTypes = {
  onResumeRequest: PropTypes.func.isRequired,
};

/**
 * =============================================================================
 * WRAPPER COMPONENT - Contact Form with Modal
 * =============================================================================
 * This wrapper manages the resume request modal state and prevents nested forms.
 *
 * Architecture Decision:
 * - Modal is rendered OUTSIDE the contact form to avoid nested <form> elements
 * - Modal state is managed at this level, not inside ContactForm
 * - ContactForm receives onResumeRequest callback to trigger modal
 *
 * Why this pattern:
 * - Prevents form submission conflicts (nested forms cause page refresh)
 * - Maintains proper HTML structure (forms cannot be nested)
 * - Allows modal to overlay entire page without form constraints
 * - Enables proper lazy loading of modal only when needed
 *
 * To integrate elsewhere:
 * - Import ContactFormWithModal (not ContactForm directly)
 * - This component handles all modal logic internally
 *
 * To remove modal feature:
 * - Delete this wrapper component
 * - Export ContactForm directly: `export default ContactForm;`
 * - Remove onResumeRequest prop from ContactForm
 * - Remove lazy imports at the top
 */
const ContactFormWithModal = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <>
      {/* Contact Form with resume request trigger */}
      <ContactForm onResumeRequest={() => setIsResumeModalOpen(true)} />

      {/* 
        Resume Request Modal - Rendered outside form 
        - Only loads when user clicks resume request button
        - Positioned outside ContactForm to prevent nested form issues
        - Fallback is null (no loading indicator during lazy load)
      */}
      {isResumeModalOpen && (
        <Suspense fallback={null}>
          <RequestResumeModal
            isOpen={isResumeModalOpen}
            onClose={() => setIsResumeModalOpen(false)}
          />
        </Suspense>
      )}
    </>
  );
};

export default ContactFormWithModal;
