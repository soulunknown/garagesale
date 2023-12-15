import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Signup from "./Signup";
import Home from "./Home"; // Your home component
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
