import React from "react";
import { useTheme } from "../../context/ThemeContext";
import ContactForm from "./ContactForm";
import SocialIcon from "../Utility/SocialIcon";
import "./ContactSection.css";

const ContactSection = () => {
  const { theme } = useTheme();

  const socialLinks = [
    { platform: "GitHub", url: "https://github.com" },
    { platform: "LinkedIn", url: "https://linkedin.com" },
    { platform: "Email", url: "mailto:your.email@example.com" },
    { platform: "WhatsApp", url: "https://whatsapp.com" },
    { platform: "Medium", url: "https://medium.com" },
    { platform: "Quora", url: "https://quora.com" },
    { platform: "X", url: "https://x.com" },
  ];

  return (
    <section
      className="contact-section"
      style={{
        backgroundColor: theme.primaryBg,
      }}
    >
      <div className="contact-section__container">
        <div className="contact-section__left">
          <div
            className="contact-section__image-container"
            style={{
              borderColor: theme.subheading,
            }}
          >
            <div className="contact-section__image-placeholder">
              <span style={{ color: theme.subheading }}>Image</span>
            </div>
          </div>

          <h2
            className="contact-section__title"
            style={{ color: theme.heading }}
          >
            Get In Touch
          </h2>

          <p
            className="contact-section__description"
            style={{ color: theme.content }}
          >
            If you have any questions, just want to say hi, please use the
            contact form!
          </p>

          <div className="contact-section__social">
            <div className="contact-section__social-grid">
              {socialLinks.map((link) => (
                <SocialIcon
                  key={link.platform}
                  platform={link.platform}
                  url={link.url}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="contact-section__right">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
