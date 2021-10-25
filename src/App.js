import React from 'react';
import Navbar from './components/navbar/Navbar';
import Homepage from './components/mainpage/Homepage';
import { BrowserRouter, Route } from 'react-router-dom';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import WorkExp from './components/workExp/WorkExp';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route path='/' exact component={Homepage} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/skills' exact component={Skills} />
        <Route path='/exp' exact component={WorkExp} />
        <Route path='/projects' exact component={Projects} />
      </BrowserRouter>
    </div>
  );
};

export default App;
