import React from 'react';

import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Works from './components/Works';
import Contact from './components/Contact';

import ToTopBtn from './components/UI/ToTopBtn';
import './assets/style/style.css';

const Layout = () => {
  return (
    <div className="App">
      <Home />
      <About />
      <Skills />
      <Works />
      <Contact />
      <ToTopBtn />
    </div>
  );
}

export default Layout;
