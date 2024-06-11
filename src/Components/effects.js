document.addEventListener("DOMContentLoaded", function() {
    // Function to add bounce effect to a1 (bounces to right)
    function addBounceEffectA1(event) {
      var element = document.getElementById('a1');
      element.classList.remove('bounce-rightA'); // Remove previous animation class if any
      element.classList.add('bounce-rightA');
      setTimeout(function() {
        element.classList.remove('bounce-rightA');
      }, 500); // Adjust timing to match animation duration
    }
    
    // Function to add bounce effect to a2 (bounces to left)
    function addBounceEffectA2(event) {
      var element = document.getElementById('a2');
      element.classList.remove('bounce-leftA'); // Remove previous animation class if any
      element.classList.add('bounce-leftA');
      setTimeout(function() {
        element.classList.remove('bounce-leftA');
      }, 500); // Adjust timing to match animation duration
    }
    
    function addBounceEffectA3(event) {
      var element = document.getElementById('a3');
      element.classList.remove('bounce-left'); // Remove previous animation class if any
      element.classList.add('bounce-left');
      setTimeout(function() {
        element.classList.remove('bounce-left');
      }, 500); // Adjust timing to match animation duration
    }
    
    function addBounceEffectA4(event) {
      var element = document.getElementById('a4');
      element.classList.remove('bounce-left'); // Remove previous animation class if any
      element.classList.add('bounce-left');
      setTimeout(function() {
        element.classList.remove('bounce-left');
      }, 500); // Adjust timing to match animation duration
    }
    
    function addBounceEffectA5(event) {
      var element = document.getElementById('a5');
      element.classList.remove('bounce-right'); // Remove previous animation class if any
      element.classList.add('bounce-right');
      setTimeout(function() {
        element.classList.remove('bounce-right');
      }, 500); // Adjust timing to match animation duration
    }
    
    // Add click event listeners to each item in the SVG
    document.getElementById('a1').addEventListener('click', addBounceEffectA1);
    document.getElementById('a2').addEventListener('click', addBounceEffectA2);
    document.getElementById('a3').addEventListener('click', addBounceEffectA3);
    document.getElementById('a4').addEventListener('click', addBounceEffectA4);
    document.getElementById('a5').addEventListener('click', addBounceEffectA5);
});
