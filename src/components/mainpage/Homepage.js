import React from 'react';
import mainImg from '../../assets/yashraj.png';
import './homepage.css';
import Typewriter from 'typewriter-effect';

const Homepage = () => {
  return (
    <div className='container'>
      <div className='homepage-container'>
        <div className='image-container'>
          <img src={mainImg} alt='Yashraj' className='homepage-image' />
        </div>
        <div className='textbox-container'>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('Hi..!')
                .changeDelay(60)
                .pauseFor(1500)
                .deleteAll()
                .typeString('My name is Yashraj Singh')
                .pauseFor(1500)
                .deleteAll()
                .typeString('I am a Web Developer')
                .pauseFor(1500)
                .deleteAll()
                .typeString('... and a Machine Learning Geek')
                .pauseFor(1500)
                .deleteAll()
                .typeString('... a blockchain enthusiast too ;)')
                .pauseFor(1500)
                .deleteAll()
                .typeString('We could work together?')
                .pauseFor(2500)
                .deleteAll()
                .typeString('Still waiting?')
                .pauseFor(500)
                .deleteAll()
                .typeString('Click on the contact button :)')
                .pauseFor(2500)
                .deleteAll()
                .typeString('.. or check my resume')
                .pauseFor(2500)
                .deleteAll()
                .typeString('Web Developer, Machine Learning Developer')
                .pauseFor(2500)
                .start();
            }}
          />
        </div>
        <div className='homepage-btn'>
          <div className='hbtn mgin'>
            <a href='https://www.google.com'> Projects/Work Experience</a>{' '}
          </div>
          <div className='hbtn'>
            <a href='https://www.google.com'> I'm Feeling Lucky </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
