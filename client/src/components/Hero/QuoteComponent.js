import React, { useState, useEffect, useMemo } from "react";
import { useTheme } from "../../context/ThemeContext";
import "./QuoteComponent.css";

const QuoteComponent = () => {
  const { theme } = useTheme();

  const quotes = useMemo(
    () => [
      "Turning ideas into elegant code, one line at a time.",
      "Building digital solutions that make a difference.",
      "Crafting the future through innovative software development.",
    ],
    []
  );

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentQuote = quotes[currentQuoteIndex];

    const typingSpeed = isDeleting ? 30 : 80;
    const pauseTime = isDeleting ? 500 : 3000;

    if (!isDeleting && charIndex === currentQuote.length) {
      setTimeout(() => setIsDeleting(true), pauseTime);
      return;
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText(currentQuote.substring(0, charIndex));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentQuoteIndex, quotes]);

  return (
    <div className="quote-component">
      <p className="quote-text" style={{ color: theme.subheading }}>
        {displayedText}
        <span className="cursor">|</span>
      </p>
    </div>
  );
};

export default QuoteComponent;
