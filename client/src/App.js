import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/Layout/Layout";
import Preloader from "./components/Preloader/Preloader";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <Preloader />
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
