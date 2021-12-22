import React from "react";
import { Routes, Route } from "react-router-dom";
import "assets/scss/style.scss";

// Import Pages
import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";
import Checkout from "pages/Checkout";
import Example from "pages/Example";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/properties/:id" element={<DetailsPage />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route path="/example" element={<Example />} />
      </Routes>
    </div>
  );
}

export default App;
