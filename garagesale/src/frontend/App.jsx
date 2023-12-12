import React from "react";
import WelcomeBanner from "./Welcomebanner";
import Navbar from "./Navbar";
import Signup from "./signup";
import './App.css'


function App() {
  return (
    <div className="App">
      <WelcomeBanner />
      < Navbar />
      <Signup />
    </div>
  );
}

export default App;
