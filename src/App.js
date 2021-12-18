import React from "react";
import { Routes, Route } from "react-router-dom";
import "assets/scss/style.scss";

// Import Pages
import LandingPage from "pages/LandingPage";
import Example from "pages/Example";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/example" element={<Example />} />
      </Routes>
    </div>
  );
}

export default App;
