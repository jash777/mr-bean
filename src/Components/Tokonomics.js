import React, { useEffect } from 'react';
import { ReactComponent as TokonomicsSVG } from './tokonomics.svg';
import './tokonomics.css';
import tokonomicsheading from './tokonomicsheading.svg'
function Tokonomics() {
  useEffect(() => {
    function addBounceEffectA1(event) {
      var element = document.getElementById('a1');
      element.classList.remove('bounce-rightA');
      element.classList.add('bounce-rightA');
      setTimeout(function() {
        element.classList.remove('bounce-rightA');
      }, 500);
    }

    function addBounceEffectA2(event) {
      var element = document.getElementById('a2');
      element.classList.remove('bounce-leftA');
      element.classList.add('bounce-leftA');
      setTimeout(function() {
        element.classList.remove('bounce-leftA');
      }, 500);
    }

    function addBounceEffectA3(event) {
      var element = document.getElementById('a3');
      element.classList.remove('bounce-left');
      element.classList.add('bounce-left');
      setTimeout(function() {
        element.classList.remove('bounce-left');
      }, 500);
    }

    function addBounceEffectA4(event) {
      var element = document.getElementById('a4');
      element.classList.remove('bounce-left');
      element.classList.add('bounce-left');
      setTimeout(function() {
        element.classList.remove('bounce-left');
      }, 500);
    }

    function addBounceEffectA5(event) {
      var element = document.getElementById('a5');
      element.classList.remove('bounce-right');
      element.classList.add('bounce-right');
      setTimeout(function() {
        element.classList.remove('bounce-right');
      }, 500);
    }

    document.getElementById('a1').addEventListener('mouseover', addBounceEffectA1);
    document.getElementById('a1').addEventListener('click', addBounceEffectA1);

    document.getElementById('a2').addEventListener('mouseover', addBounceEffectA2);
    document.getElementById('a3').addEventListener('mouseover', addBounceEffectA3);
    document.getElementById('a4').addEventListener('mouseover', addBounceEffectA4);
    document.getElementById('a5').addEventListener('mouseover', addBounceEffectA5);

    // Cleanup
    return () => {
      document.getElementById('a1').removeEventListener('mouseover', addBounceEffectA1);
      document.getElementById('a1').removeEventListener('click', addBounceEffectA1);

      document.getElementById('a2').removeEventListener('mouseover', addBounceEffectA2);
      document.getElementById('a3').removeEventListener('mouseover', addBounceEffectA3);
      document.getElementById('a4').removeEventListener('mouseover', addBounceEffectA4);
      document.getElementById('a5').removeEventListener('mouseover', addBounceEffectA5);
    };
  }, []); // Empty dependency array to ensure effect runs only once

  return (
    <div className="tokonomics">
      <div>
      <img src={tokonomicsheading} alt="tokonomicsheading" className="tokonomicsheading" />
      </div>
      <div className='tokonomicscss'>
      <TokonomicsSVG />

      </div>
    </div>
  );
}

export default Tokonomics;

