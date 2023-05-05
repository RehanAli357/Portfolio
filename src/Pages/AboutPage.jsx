import React from "react";
import pic from "../asset/Images/pic.png";
import "../asset/Style/AboutPage/about.css";
import CV from "../Data/Rehan Resume.pdf";
const AboutPage = () => {
  return (
    <React.Fragment>
      <section className="FlexCenter AboutPage">
        <div className="AboutCard FlexCenter">
          <img src={pic} alt="developer pic" />
          <div className="Content">
            <h1>About Me :-</h1>
            <div className="Card">
              <p>
                <q>
                  <i>The only way to do great work is to love what you do</i>
                </q>
                <i>~ Steve Jobs</i>
              </p>
              <p>
                This quote truly signifies me.
                <br />I love to follow my passion, and I invest my each day to
                be a MERN Stack Developer.
                <br />I am a professional ReactJs Developer.
              </p>
              <p>To know more About Me</p>
              <a href={CV}><button>Download CV</button></a>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutPage;
