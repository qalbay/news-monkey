import "./App.scss";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import LoadingBar from "react-top-loading-bar";

export default function App() {
  const [progress, setProgress] = useState(0);
  const apiKey = "2a2fea578eaf4a7199ec74e504368390";
  const pageSize = 6;
  
  const updateProgress = (progress) => {
    setProgress(progress);
  };
  return (
    <BrowserRouter>
      <LoadingBar color="#f11946" progress={progress} />

      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <News
              apiKey={apiKey}
              setProgress={updateProgress}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          }
        />
        <Route
          path="/business"
          element={
            <News
              apiKey={apiKey}
              setProgress={updateProgress}
              key="business"
              pageSize={pageSize}
              country="in"
              category="business"
            />
          }
        />

        <Route
          path="/entertainment"
          element={
            <News
              apiKey={apiKey}
              setProgress={updateProgress}
              key="entertainment"
              pageSize={pageSize}
              country="in"
              category="entertainment"
            />
          }
        />

        <Route
          path="/general"
          element={
            <News
              apiKey={apiKey}
              setProgress={updateProgress}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          }
        />

        <Route
          path="/health"
          element={
            <News
              apiKey={apiKey}
              setProgress={updateProgress}
              key="health"
              pageSize={pageSize}
              country="in"
              category="health"
            />
          }
        />

        <Route
          path="/science"
          element={
            <News
              apiKey={apiKey}
              setProgress={updateProgress}
              key="science"
              pageSize={pageSize}
              country="in"
              category="science"
            />
          }
        />

        <Route
          path="/sports"
          element={
            <News
              apiKey={apiKey}
              setProgress={updateProgress}
              key="sports"
              pageSize={pageSize}
              country="in"
              category="sports"
            />
          }
        />

        <Route
          path="/technology"
          element={
            <News
              apiKey={apiKey}
              setProgress={updateProgress}
              key="technology"
              pageSize={pageSize}
              country="in"
              category="technology"
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
