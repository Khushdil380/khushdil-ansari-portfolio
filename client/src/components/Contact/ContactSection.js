import React from "react";
import { useTheme } from "../../context/ThemeContext";
import ContactForm from "./ContactForm";
import SocialIcon from "../Utility/SocialIcon";
import "./ContactSection.css";

const ContactSection = () => {
  const { theme } = useTheme();

  const socialLinks = [
    { platform: "GitHub", url: "https://github.com/Khushdil380" },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/khushdil-ansari/",
    },
    {
      platform: "Email",
      url: "mailto:khushdilansari345@gmail.com?subject=Let's Connect - Portfolio Inquiry&body=Hi Khushdil,%0D%0A%0D%0AI came across your portfolio and would love to connect with you. I'm interested in discussing potential opportunities and collaboration.%0D%0A%0D%0ALooking forward to hearing from you!%0D%0A%0D%0ABest regards",
    },
    {
      platform: "WhatsApp",
      url: "https://wa.me/918809059380?text=Hi%20Khushdil!%20I%20found%20your%20portfolio%20and%20would%20love%20to%20connect%20with%20you.%20I'm%20interested%20in%20discussing%20potential%20opportunities%20or%20collaboration.%20Looking%20forward%20to%20connecting!",
    },
    { platform: "Medium", url: "https://medium.com/@khushdilansari345" },
    {
      platform: "Quora",
      url: "https://www.quora.com/profile/Khushdil-Ansari-7",
    },
    { platform: "X", url: "https://x.com/Khushdil_380" },
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
