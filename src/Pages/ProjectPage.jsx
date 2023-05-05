import React from 'react'
import "../asset/Style/SkillsPage/skills.css"
import ProjectData from "../Data/ProjectData";
import link from "../asset/Images/link.png"
const ProjectPage = () => {
  return (
    <React.Fragment>
        <section className='Skills'>
            <h1>Projects</h1>
        <div className="Cards">
            {
                ProjectData.map((data,index)=>{
                    return(
                        <React.Fragment key={index}>
                            <div className="Card">
                                <div className="link FlexCenter">
                                    <a href={data.link}>
                                    <img src={link} alt="link" />
                                    </a>
                                </div>
                                <img src={data.img} alt={data.title} style={{width:"95%"}}/>
                                <b>{data.title}</b>
                                <p>{data.description}</p>
                            </div>
                        </React.Fragment>
                    );
                })
            }
        </div>
        </section>
    </React.Fragment>
  )
}

export default ProjectPage
