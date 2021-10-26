import React from 'react';
import './projects.css';
import SecNavbar from '../secondryNavbar/SecNavbar';
import projectList from './projectList';

const Projects = () => {
  return (
    <div>
      <SecNavbar />
      <div className='proj_container'>
        <div className='main_projects'>
          <div className='proj_line'>
            Some cool projects found in 0.0001 seconds
          </div>
          <div className='projectList'>
            {projectList.map((project, indx) => {
              return (
                <div className='project' key= {indx}>
                  <div className='title'>{project.project_name}</div>
                  <div className='subTitle'>{project.project_subname}</div>
                  {project.description.map((desc, indx2) => {
                    return (
                      <div className='description' key = {indx2}>
                        <li>{desc}</li>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
