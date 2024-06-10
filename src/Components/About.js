import React from 'react';
import './about.css';
import about from './about.svg'
import aboutheading from './aboutheading.svg';

function HomePage() {
  return (
    <div className="about">
      <div>
      <img src={aboutheading} alt="aboutheading" className="aboutheading" />
      </div>
        <img src={about} alt="about" className="about-svg" />
    </div>
  );
}

export default HomePage;

