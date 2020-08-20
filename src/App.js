import React from 'react';

import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Works from './components/Works';
import Contact from './components/Contact';

import './assets/style/style.css';
import ToTopBtn from './components/UI/ToTopBtn';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Skills/>
      <Works/>
      <Contact/>
      <ToTopBtn/>
    </div>
  );
}

export default App;
