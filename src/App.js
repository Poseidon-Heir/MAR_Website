import React, { useState, useEffect } from 'react';
import './App.css'; 
import Header from './Header.js'
import Section1 from './Sectionone.js';
import About from './About.js';
import Footer from './Footer.js';


function App() {
  return (
    <div className="App">
      <Header />
      <Section1 />
      <About />
      <Footer />
    </div>
  );
}

export default App;
