import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import Button from "../Utility/Button";
import "./ContactForm.css";

const ContactForm = () => {
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
        setSubmitStatus({ type: "success", message: data.message });
        handleClear();
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
            borderColor: errors.fullName ? "#E32227" : theme.subheading,
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
            borderColor: errors.email ? "#E32227" : theme.subheading,
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
            borderColor: errors.title ? "#E32227" : theme.subheading,
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
            borderColor: errors.message ? "#E32227" : theme.subheading,
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
              submitStatus.type === "success" ? "#8BE030" : "#E32227",
          }}
        >
          {submitStatus.message}
        </div>
      )}

      <div className="contact-form__actions">
        <Button
          type="button"
          onClick={handleClear}
          variant="secondary"
          disabled={isSubmitting}
        >
          Clear
        </Button>
        <Button type="submit" variant="primary" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
