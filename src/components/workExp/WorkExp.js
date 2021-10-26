import React from 'react';
import './workexp.css';
import SecNavbar from '../secondryNavbar/SecNavbar';
import workList from './workexpList';

const WorkExp = () => {
  return (
    <div>
      <SecNavbar />
      <div className="expWrapper">
        <div className='exp_container'>
          <div className='expHeader'>
            Still looking for my first job. Here are some of my Volunteer
            Activities ⭐
          </div>
          <div className='worklist-container'>
            {workList.map((exp, indx) => {
              return (
                <div className='work' key={indx}>
                  <div className='workName'>{exp.heading}</div>
                  <div className='role'>{exp.position}</div>
                  <div className='descContainer'>
                    {exp.desc.map((des, k) => {
                      return (
                        <div className='descLine' key={k}>
                          <li>{des}</li>
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
    </div>
  );
};

export default WorkExp;
