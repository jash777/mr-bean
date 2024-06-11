import React, { useEffect, useState } from 'react';
import './Homepage.css';
import mrBeanSVG from './mrbean.svg';
import socialmediaicon from './socialmedia.svg';
import responsiveSocialmediaicon from './icons-mobile.svg'; // Add the responsive SVG

import ErrorBoundary from './ErrorBoundary';

function HomePage() {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Log any unhandledrejection errors
    window.addEventListener('unhandledrejection', (event) => {
      console.error('Unhandled rejection (promise):', event.promise, 'reason:', event.reason);
      setHasError(true);
    });

    // Log any unexpected errors
    window.addEventListener('error', (event) => {
      console.error('Error event:', event);
      setHasError(true);
    });

    return () => {
      window.removeEventListener('unhandledrejection', () => {});
      window.removeEventListener('error', () => {});
    };
  }, []);

  if (hasError) {
    return <h1>Something went wrong in HomePage component.</h1>;
  }

  return (
    <ErrorBoundary>
      <div className="home-page">
        <div className='mrsvg'>
        <img src={mrBeanSVG} alt="Mr. Bean" className="mr-bean-svg" />

        </div>
        <div className="social-media-icon-pack">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={socialmediaicon} alt="socialmedia" className="socialmedia" />
          </a>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default HomePage;
