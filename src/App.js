import React from "react";
import "assets/scss/style.scss";
import { BrowserRouter as Router } from "react-router-dom";

import IconText from "parts/IconText";

function App() {
  return (
    <div className="App">
      <Router>
        <IconText />
      </Router>
    </div>
  );
}

export default App;
