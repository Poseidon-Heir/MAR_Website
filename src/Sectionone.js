import React, { useState, useEffect } from 'react';
import './Sectionone.css';
import ThreeHuskiesImage from './Threehuskies.jpg';



const Section1 = () => {
    const [text, setText] = useState('');
    const phrases = ["Natural Language Processing Model🎫🌝  ", "AI/ML Research Newsletter🌞"];
    // const phrases = [""];
  
    useEffect(() => {
      let currentIndex = 0;
      let currentText = '';
      let isDeleting = false;
      let typingSpeed = 100;
  
      const type = () => {
        const currentPhrase = phrases[currentIndex];
  
        if (isDeleting) {
          currentText = currentPhrase.substring(0, currentText.length - 1);
        } else {
          currentText = currentPhrase.substring(0, currentText.length + 1);
        }
  
        setText(currentText);
  
        let delta = isDeleting ? 50 : 100;
  
        if (!isDeleting && currentText === currentPhrase) {
          isDeleting = true;
          delta = 1000;
        } else if (isDeleting && currentText === '') {
          isDeleting = false;
          currentIndex = (currentIndex + 1) % phrases.length;
          delta = 500;
        }
  
        setTimeout(type, delta);
      };
  
      setTimeout(type, typingSpeed);
    }, []);
    return (
      <section id="section1">
        <div className="background-image" style={{ backgroundImage: `url(${ThreeHuskiesImage})` }}></div>
        <div className="content">
         <div><h2>{text}</h2></div>     
       
        </div>
      </section>
    );
  };

  export default Section1;