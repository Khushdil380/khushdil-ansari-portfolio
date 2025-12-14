// Import all subjects
import C from "./subjects/C";
import CPP from "./subjects/CPP";
import Java from "./subjects/Java";
import Python from "./subjects/Python";
import DBMS from "./subjects/DBMS";
import OS from "./subjects/OS";
import JavaScript from "./subjects/JavaScript";

// Main blog data structure
export const blogData = {
  C: C,
  "C++": CPP,
  Java: Java,
  Python: Python,
  DBMS: DBMS,
  OS: OS,
  JavaScript: JavaScript,
};

// Helper functions to work with the modular data
export const getSubjects = () => {
  return Object.keys(blogData);
};

export const getTopicsForSubject = (subject) => {
  return blogData[subject]?.topics || [];
};

export const getTopicContent = (subject, topicId) => {
  const topics = blogData[subject]?.topics || [];
  return topics.find((topic) => topic.id === topicId);
};

export const getPageContent = (subject, topicId, pageNumber) => {
  const topic = getTopicContent(subject, topicId);
  return topic?.content?.find((page) => page.page === pageNumber);
};
