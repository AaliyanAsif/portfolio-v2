import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectCaseStudy from "./components/ProjectCaseStudy.jsx";
import Layout from "./components/Layout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<App />} />
          <Route path="/case-study/:project" element={<ProjectCaseStudy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
