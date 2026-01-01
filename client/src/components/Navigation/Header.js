import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";
import HamburgerIcon from "./HamburgerIcon";
import CloseButton from "./CloseButton";
import SocialIcon from "../Utility/SocialIcon";
import "./Header.css";

const Header = () => {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
    { name: "About me", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Education & Skill", path: "/education" },
    { name: "Service", path: "/services" },
    { name: "Contact me", path: "/contact" },
    { name: "Blog", path: "/blog" },
  ];

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        className="header"
        style={{
          "--secondary-bg": theme.secondaryBg,
          "--content-color": theme.content,
        }}
      >
        <div className="header-container">
          <Link
            to="/"
            className="header-name-link"
            style={{ textDecoration: "none" }}
          >
            <h1 className="header-name" style={{ color: theme.heading }}>
              KHUSHDIL ANSARI
            </h1>
          </Link>
          <div className="header-controls">
            <ThemeToggle />
            <HamburgerIcon onClick={toggleMenu} isOpen={isMenuOpen} />
          </div>
        </div>
      </header>

      {/* Navigation Overlay */}
      <div
        className={`nav-overlay ${isMenuOpen ? "open" : ""}`}
        style={{
          "--secondary-bg": theme.secondaryBg,
          "--content-color": theme.content,
          "--heading-color": theme.heading,
          "--subheading-color": theme.subheading,
        }}
      >
        <div className="nav-overlay-header">
          <CloseButton onClick={toggleMenu} />
        </div>

        <div className="nav-overlay-content">
          <div className="nav-left-section">
            <div className="nav-profile-section">
              <div className="nav-profile-pic">
                <div className="profile-placeholder">KA</div>
              </div>
            </div>

            <h2 className="nav-name" style={{ color: theme.heading }}>
              KHUSHDIL ANSARI
            </h2>

            <div className="nav-social-icons">
              {socialLinks.map((social, index) => (
                <SocialIcon
                  key={index}
                  platform={social.platform}
                  url={social.url}
                />
              ))}
            </div>
          </div>

          <nav className="nav-links">
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="nav-link"
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
