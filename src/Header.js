import React, { useState, useEffect } from 'react';
import './header.css'
const Header = () => {
    // Implement logic for changing background color on scroll
    window.addEventListener('scroll', () => {
      const header = document.getElementById('header');
      if (header) {
        const scrolled = window.scrollY;
        const newBackgroundColor = scrolled > 10 ? 'black' : 'rgba(0, 0, 0, 0.1)';
        header.style.backgroundColor = newBackgroundColor;
      }
    });
   
  
    return (
      <header id="header">
        <img src="./mar_logo.png" alt="Logo" height={80} width={120} />
        <div className='headerDirectory'>
          <div><h3><a href='#About'>About</a></h3></div>
          <div> <h3>Team</h3></div>
          <div> <h3>Products</h3></div>
          <div> <h3>Vision</h3></div>

        </div>
        
      </header>
    );
  };

  export default Header;