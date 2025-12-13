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
    { platform: "GitHub", url: "https://github.com" },
    { platform: "LinkedIn", url: "https://linkedin.com" },
    { platform: "Email", url: "mailto:your.email@example.com" },
    { platform: "WhatsApp", url: "https://whatsapp.com" },
    { platform: "Medium", url: "https://medium.com" },
    { platform: "Quora", url: "https://quora.com" },
    { platform: "X", url: "https://x.com" },
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
