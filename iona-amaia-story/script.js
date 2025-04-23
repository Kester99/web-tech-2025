// Wait for the entire HTML document to load before running this code
document.addEventListener("DOMContentLoaded", () => {

    // Initialise the magic particle background effect
    particlesJS("magicParticles", {
      particles: {
        number: { value: 80 },           // Total number of particles
        size: { value: 3 },              // Size of each particle
        move: { speed: 1 },              // Speed at which particles move
        color: { value: "#ffd700" },     // Color for particles
        line_linked: { enable: false },  // Don't draw lines between particles
        opacity: { value: 0.8 }          // Transparency level
      }
    });
  
    // Make buttons work using data-link or data-target attributes
    // This lets you keep your HTML clean without using "onclick"
    const navButtons = document.querySelectorAll("button[data-link], button[data-target]");
  
    // Loop through all matching buttons
    navButtons.forEach(button => {
      // Get the target link from either "data-link" or "data-target"
      const target = button.dataset.link || button.dataset.target;
  
      // If a valid link exists, add a click listener
      if (target) {
        button.addEventListener("click", () => {
          // Go to the target page
          window.location.href = target;
        });
      }
    });
  });
  