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
  const [pageContent, setPageContent] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Initialize first topic when subject changes
  useEffect(() => {
    const topics = getTopicsForSubject(activeSubject);
    if (topics.length > 0) {
      setActiveTopic(topics[0].id);
      setCurrentPage(1);
    }
  }, [activeSubject]);

  // Load content when topic or page changes
  useEffect(() => {
    const loadContent = async () => {
      if (!activeTopic) {
        setPageContent(null);
        setTotalPages(0);
        return;
      }

      setIsLoading(true);
      try {
        const content = await getPageContent(
          activeSubject,
          activeTopic,
          currentPage
        );

        console.log("Loaded page content:", content); // Debug log
        setPageContent(content);

        // Get total pages for the topic
        const topics = getTopicsForSubject(activeSubject);
        const currentTopicData = topics.find((t) => t.id === activeTopic);

        // For lazy topics, we need to load content to get page count
        if (currentTopicData?._isLazy && !currentTopicData._cachedContent) {
          const { loadTopicContent } = await import(
            "./data/subjects/contentParser"
          );
          const loadedTopic = await loadTopicContent(currentTopicData);
          console.log("Loaded topic:", loadedTopic); // Debug log
          setTotalPages(loadedTopic?.content?.length || 0);
        } else {
          setTotalPages(
            currentTopicData?.content?.length ||
              currentTopicData?._cachedContent?.length ||
              0
          );
        }
      } catch (error) {
        console.error("Error loading content:", error);
        setPageContent(null);
        setTotalPages(0);
      } finally {
        setIsLoading(false);
      }
    };

    loadContent();
  }, [activeSubject, activeTopic, currentPage]);

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
            {isLoading ? (
              <div
                className="content-display content-display--loading"
                style={{ color: theme.content }}
              >
                <p>Loading content...</p>
              </div>
            ) : (
              <ContentDisplay pageContent={pageContent} />
            )}

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
