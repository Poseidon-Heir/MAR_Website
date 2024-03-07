import React from "react";
import './About.css'
const About = () => {
  
    // const words = ["Latest Research Papers", "AI/ML models", "Top Github repositories","Top AL/ML Models on HuggingFace"];
  
  
  
    return (
      <section id="About">
        <div className="info">
          <p id='updatetitle'>Stay updated with our Newsletter ^_^</p>
          <img src="./hss_logo.png" alt="Logo" height={240} width={340} />
       <div className='NewsletterContent'><ul>
        <li>Latest Research Papers</li>
        <li>Top Github repositories</li>
        <li>Top AL/ML Models on HuggingFace</li>
        <li>Algorithms to Crack Interviews</li>
        <li>Weekly Coding Problems</li>
          </ul>
          </div>
      
          <button onClick={() => window.location.href="https://joinnewsletter.marshallaiandresearch.com/LandingPage/"}>Join Our Newsletter🌞</button>
        </div>
      </section>
    );
  };

export default About;