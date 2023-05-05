import React from "react";
import "../asset/Style/HomePage/home.css";
const HomePage = () => {
  
  return (
    <React.Fragment>
      <div className="HeroSection FlexCenter">
        <div className="Heading FlexCenter">
          <h1>"Bringing Your Imagination To Life"</h1>
          <div className="Blur one"></div>

          <div className="Blur two"></div>
          <div className="Blur two"></div>
        </div>
        <div className="FlexCenter">
          <a href="mailto:mohdrehanali49@gmail.com">
          <button className="HireMe">Hire Me</button>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
