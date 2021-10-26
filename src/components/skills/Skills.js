import React from 'react';
import './skills.css';
import SecNavbar from '../secondryNavbar/SecNavbar';
import list from './skillsList';
import willsmith from "../../assets/willsmith.png"

const Skills = () => {
  return (
    <div>
      <SecNavbar />
      <div className='skillsContainer'>
        <div className='skillsList' style={{ backgroundImage: `url(${willsmith})`}}>
          <div className='topLine'>About 20+ important skills found</div>
          {list.map((skill, indx) => {
            return (
              <div className="zz22" key = {indx}>
                <div className='skill-head'>{skill.domain_name}</div>
                <div className='skill-desc'>{skill.description}</div>
                <div className='indexedSkills'>
                  {skill.skill_name.map((s,k) => {
                    return (
                      <div className="skills_wrapper" key = {k}>
                        <div>{s.name}</div>
                        <div className = "skill_image">
                          {s.img}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
