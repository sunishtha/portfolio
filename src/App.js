import React from 'react'
import './App.css'
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';


function App() {
  return (
    <div className="App">
      <Header />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
