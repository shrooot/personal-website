import React from 'react';
import Navbar from './components/navbar/Navbar';
import Homepage from './components/mainpage/Homepage';
import { BrowserRouter, Route } from 'react-router-dom';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Route path="/" exact component={Homepage} />
      <Route path="/contact" exact component={Contact} />
      </BrowserRouter>
    </div>
  );
};

export default App;
