// HomePage.js
import React from 'react';
import './Homepage.css';
import CustomCursor from './CustomCursor'; // Import CustomCursor component
import mrBeanSVG from './mrbean.svg';
import socialmediaicon from './socialmedia.svg';

function HomePage() {
  return (
    <div className="home-page">
      <CustomCursor /> {/* Include CustomCursor component */}
      <img src={mrBeanSVG} alt="Mr. Bean" className="mr-bean-svg" />
      <div className='social-media-icon-pack'>
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
          <img src={socialmediaicon} alt="socialmedia" className="socialmedia" />
        </a>
      </div>
    </div>
  );
}

export default HomePage;
