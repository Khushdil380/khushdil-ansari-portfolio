// Import all subjects
import C from "./subjects/C";
import CPP from "./subjects/CPP";
import Java from "./subjects/Java";
import Python from "./subjects/Python";
import DBMS from "./subjects/DBMS";
import OS from "./subjects/OS";
import JavaScript from "./subjects/JavaScript";
import techTutorial from "./subjects/techTutorial";
import { loadTopicContent } from "./subjects/contentParser";

// Main blog data structure
export const blogData = {
  C: C,
  "C++": CPP,
  Java: Java,
  Python: Python,
  DBMS: DBMS,
  OS: OS,
  JavaScript: JavaScript,
  "tech Tutorial": techTutorial,
};

// Helper functions to work with the modular data
export const getSubjects = () => {
  return Object.keys(blogData);
};

export const getTopicsForSubject = (subject) => {
  return blogData[subject]?.topics || [];
};

// Async function to get topic content (supports lazy loading)
export const getTopicContent = async (subject, topicId) => {
  const topics = blogData[subject]?.topics || [];
  const topic = topics.find((topic) => topic.id === topicId);

  if (!topic) return null;

  // If topic is lazy, load content dynamically
  if (topic._isLazy) {
    return await loadTopicContent(topic);
  }

  return topic;
};

// Async function to get page content (supports lazy loading)
export const getPageContent = async (subject, topicId, pageNumber) => {
  const topic = await getTopicContent(subject, topicId);
  return topic?.content?.find((page) => page.page === pageNumber);
};
