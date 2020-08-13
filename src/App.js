import React from 'react';

import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Works from './components/Works';
import Contacts from './components/Contacts';

import './assets/style/style.css';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Skills/>
      <Works/>
      <Contacts/>
    </div>
  );
}

export default App;
