import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import PropTypes from "prop-types";
import StoryCard from "./StoryCard";
import Button from "../Utility/Button";
import "./StorySlider.css";

const StorySlider = ({ onBackToAbout }) => {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const storyParts = [
    {
      id: 1,
      title: "My Story - Part 1",
      image: "placeholder-1",
      content: [
        "This is the first part of my journey. It all started with a fascination for technology and how things work behind the scenes.",
        "Growing up, I was always curious about computers and how they could solve real-world problems.",
        "This curiosity led me to pursue Computer Science, where I discovered my passion for coding and software development.",
        "Every challenge I faced became a learning opportunity, shaping me into the developer I am today.",
      ],
    },
    {
      id: 2,
      title: "My Story - Part 2",
      image: "placeholder-2",
      content: [
        "The second chapter of my journey involved diving deep into web development and modern frameworks.",
        "I explored various technologies, from frontend to backend, learning the importance of full-stack development.",
        "Building real projects taught me more than any tutorial ever could. Each project was a new adventure.",
        "Collaboration with other developers helped me understand the value of teamwork and code reviews.",
      ],
    },
    {
      id: 3,
      title: "My Story - Part 3",
      image: "placeholder-3",
      content: [
        "Part three marks my transition into professional development and understanding industry standards.",
        "Working on real-world applications taught me the importance of scalable and maintainable code.",
        "I learned to balance between perfect code and practical solutions that deliver value.",
        "Mentorship and continuous learning became integral parts of my growth as a developer.",
      ],
    },
    {
      id: 4,
      title: "My Story - Part 4",
      image: "placeholder-4",
      content: [
        "This phase focused on specialization and finding my niche in the vast world of technology.",
        "I discovered my passion for creating user-centric applications that solve real problems.",
        "Understanding user experience and design principles became as important as writing efficient code.",
        "I learned that great software is not just about functionality, but also about the experience it provides.",
      ],
    },
    {
      id: 5,
      title: "What I love to work in free time",
      image: "placeholder-5",
      content: [
        "In my free time, I love exploring new technologies and building side projects that interest me.",
        "Contributing to open-source projects has been incredibly rewarding and educational.",
        "I enjoy reading tech blogs, attending webinars, and staying updated with the latest industry trends.",
        "Gaming and photography are my other passions that help me relax and find creative inspiration.",
      ],
    },
    {
      id: 6,
      title: "Area of Improvement",
      image: "placeholder-6",
      content: [
        "I'm constantly working on improving my understanding of system design and architecture patterns.",
        "Learning more about DevOps practices and cloud technologies is high on my priority list.",
        "I want to become better at technical writing and sharing my knowledge with the community.",
        "Improving my communication skills and becoming a better mentor to junior developers is important to me.",
        "Time management and balancing multiple projects efficiently is an area I'm actively working on.",
      ],
    },
  ];

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      // Go back to About intro
      onBackToAbout();
    }
  };

  const handleNext = () => {
    if (currentIndex < storyParts.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const isFirstSlide = currentIndex === 0;
  const isLastSlide = currentIndex === storyParts.length - 1;

  return (
    <div className="story-slider">
      <StoryCard story={storyParts[currentIndex]} theme={theme} />

      <div className="story-navigation">
        <Button onClick={handlePrevious} variant="secondary">
          {isFirstSlide ? "Back to About" : "Prev"}
        </Button>
        <Button
          onClick={handleNext}
          disabled={isLastSlide}
          variant={isLastSlide ? "secondary" : "primary"}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

StorySlider.propTypes = {
  onBackToAbout: PropTypes.func.isRequired,
};

export default StorySlider;
