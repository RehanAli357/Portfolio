import React, { useEffect, useState } from "react";
import "../asset/Style/NavigationBar/nav.css";
import NavigationBtn from "../asset/Images/navigation.png";
import NavigationCloseBtn from "../asset/Images/close.png";
import CV from "../Data/Rehan Resume.pdf";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import SkillsPage from "./SkillsPage";
import ProjectPage from "./ProjectPage";
import ContactMePage from "./ContactMePage";
const Root = () => {
  const [isOpen, setopen] = useState(false);
  const [height, setheight] = useState("0em");
  const [padding, setpadding] = useState("0em");
  const [display, setdisplay] = useState("none");

  const openMenu = () => {
    setopen((pdata) => {
      return !pdata;
    });
  };

  useEffect(() => {
    if (isOpen) {
      setheight((pdata) => {
        return (pdata = "fit-content");
      });
      setpadding((pdata) => {
        return (pdata = "5em 0");
      });
      setdisplay((pdata) => {
        return (pdata = "block");
      });
    } else {
      setheight((pdata) => {
        return (pdata = "0em");
      });
      setpadding((pdata) => {
        return (pdata = "0em");
      });
      setdisplay((pdata) => {
        return (pdata = "none");
      });
    }
  }, [isOpen]);
  const mobMenuData = {
    height: height,
    padding: padding,
    display: display,
  };

  return (
    <React.Fragment>
      <nav className="FlexBetween">
        <div className="Logo">
          <p>RehanAli</p>
        </div>
        <div className="Menu FlexCenter">
          <ul className="FlexCenter">
            <a href="#home">
              <li className="CMBPR ListItem">Home</li>
            </a>
            <a href="#about">
              <li className="CMBPR ListItem">About</li>
            </a>
            <a href="#skill">
              <li className="CMBPR ListItem">Skills</li>
            </a>
            <a href="#project">
              <li className="CMBPR ListItem">Projects</li>
            </a>
            <a href="#contact">
              <li className="CMBPR ListItem">ContactMe</li>
            </a>
          </ul>
          <div className="Resume">
            <a href={CV} className="CMBPR FlexCenter">
              Download CV
            </a>
          </div>
        </div>

        <div className="MobMenu FlexCenter">
          <div className="Resume">
            <a href={CV} className="CMBPR FlexCenter">
              Download CV
            </a>
          </div>

          {!isOpen ? (
            <React.Fragment>
              <img
                src={NavigationBtn}
                alt="Mobile Nav OpenBtn"
                onClick={openMenu}
              />
            </React.Fragment>
          ) : (
            <img
              src={NavigationCloseBtn}
              alt="Mobile Nav CloseBtn"
              onClick={openMenu}
            />
          )}
          <div className="mobMenuData" style={mobMenuData}>
            <ul className="FlexCenter">
              <a
                onClick={() => {
                  setdisplay("none");
                  setopen(!isOpen);
                }}
                href="#home"
              >
                <li className="CMBPR ListItem">Home</li>
              </a>
              <a
                onClick={() => {
                  setdisplay("none");
                  setopen(!isOpen);
                }}
                href="#about"
              >
                <li className="CMBPR ListItem">About</li>
              </a>
              <a
                onClick={() => {
                  setdisplay("none");
                  setopen(!isOpen);
                }}
                href="#skill"
              >
                <li className="CMBPR ListItem">Skills</li>
              </a>
              <a
                onClick={() => {
                  setdisplay("none");
                  setopen(!isOpen);
                }}
                href="#project"
              >
                <li className="CMBPR ListItem">Projects</li>
              </a>
              <a
                onClick={() => {
                  setdisplay("none");
                  setopen(!isOpen);
                }}
                href="#contact"
              >
                <li className="CMBPR ListItem">ContactMe</li>
              </a>
            </ul>
          </div>
        </div>
      </nav>
      <section id="home">
        <HomePage />
      </section>
      <section id="about">
        <AboutPage />
      </section>
      <section id="skill">
        <SkillsPage />
      </section>
      <section id="project">
        <ProjectPage />
      </section>
      <section id="contact">
        <ContactMePage />
      </section>
    </React.Fragment>
  );
};

export default Root;
