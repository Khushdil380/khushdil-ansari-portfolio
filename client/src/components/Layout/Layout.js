import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Navigation/Header";
import HomePage from "../../pages/HomePage";
import AboutPage from "../../pages/AboutPage";
import ProjectsPage from "../../pages/ProjectsPage";
import EducationPage from "../../pages/EducationPage";
import ServicePage from "../../pages/ServicePage";
import ContactPage from "../../pages/ContactPage";
import BlogPage from "../../pages/BlogPage";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default Layout;
