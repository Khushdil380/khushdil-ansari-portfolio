import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import SubjectNavigation from "./SubjectNavigation";
import TopicSidebar from "./TopicSidebar";
import TopicDrawer from "./TopicDrawer";
import ContentDisplay from "./ContentDisplay";
import ContentNavigation from "./ContentNavigation";
import HamburgerIcon from "../Navigation/HamburgerIcon";
import {
  blogData,
  getSubjects,
  getTopicsForSubject,
  getPageContent,
} from "./data/blogData";
import "./BlogSection.css";

const BlogSection = () => {
  const { theme } = useTheme();
  const subjects = getSubjects();

  const [activeSubject, setActiveSubject] = useState(subjects[0]);
  const [activeTopic, setActiveTopic] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Initialize first topic when subject changes
  useEffect(() => {
    const topics = getTopicsForSubject(activeSubject);
    if (topics.length > 0) {
      setActiveTopic(topics[0].id);
      setCurrentPage(1);
    }
  }, [activeSubject]);

  const handleSubjectChange = (subject) => {
    setActiveSubject(subject);
  };

  const handleTopicChange = (topicId) => {
    setActiveTopic(topicId);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const topics = getTopicsForSubject(activeSubject);
  const currentTopic = topics.find((t) => t.id === activeTopic);
  const pageContent = activeTopic
    ? getPageContent(activeSubject, activeTopic, currentPage)
    : null;
  const totalPages = currentTopic?.content?.length || 0;

  return (
    <section
      className="blog-section"
      style={{ backgroundColor: theme.primaryBg }}
    >
      <div className="blog-section__container">
        {/* Header with Subject Navigation */}
        <div className="blog-section__header">
          <button
            className="blog-section__hamburger"
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Open topics menu"
          >
            <HamburgerIcon />
          </button>

          <SubjectNavigation
            subjects={subjects}
            activeSubject={activeSubject}
            onSubjectChange={handleSubjectChange}
          />
        </div>

        {/* Main Content Area */}
        <div className="blog-section__content">
          {/* Desktop Sidebar */}
          <TopicSidebar
            topics={topics}
            activeTopic={activeTopic || ""}
            onTopicChange={handleTopicChange}
          />

          {/* Mobile Drawer */}
          <TopicDrawer
            isOpen={isDrawerOpen}
            topics={topics}
            activeTopic={activeTopic || ""}
            onTopicChange={handleTopicChange}
            onClose={() => setIsDrawerOpen(false)}
          />

          {/* Content Area */}
          <div className="blog-section__main">
            <ContentDisplay pageContent={pageContent} />

            <ContentNavigation
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
