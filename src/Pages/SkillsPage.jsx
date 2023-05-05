import React from "react";
import "../asset/Style/SkillsPage/skills.css";
import SkillsData from "../Data/SkillsData";
const SkillsPage = () => {
  return (
    <React.Fragment>
      <div className="Skills ">
        <h1>Skills</h1>
        <div className="Cards">
          {SkillsData.map((data, index) => {
            return (
              <React.Fragment key={index}>
                <div className="Card">
                  <img src={data.image} alt={data.name} />
                  <b>{data.name}</b>
                  <p>{data.details}</p>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default SkillsPage;
