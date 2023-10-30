// Get the h1 element to animate
const animatedName = document.getElementById("animated-name");

// Define a percentage factor to control the movement speed
const percentageFactor = 0.5; // Adjust this value as needed

// Add a scroll event listener
window.addEventListener("scroll", () => {
  // Get the current scroll position
  const scrollY = window.scrollY;
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;

  // Calculate the new position for the h1 element as a percentage of scrollY
  const newPosition = (scrollY / documentHeight) * window.innerWidth * percentageFactor;

  // Ensure the position doesn't exceed the viewport width
  const clampedPosition = Math.min(window.innerWidth - animatedName.offsetWidth, newPosition);

  // Apply the new position as a CSS style using translateX
  animatedName.style.transform = `translateX(${clampedPosition}px)`;
});






const originalText = animatedName.getAttribute('data-content');

// Handle hover animation
animatedName.addEventListener('mouseenter', () => {
    const glitchedText = generateGlitchedText(originalText);
    animatedName.textContent = glitchedText;
});

animatedName.addEventListener('mouseleave', () => {
    animatedName.textContent = originalText;
});

// Handle link clicking
animatedName.addEventListener('click', (event) => {
    if (event.ctrlKey || event.metaKey) {
        // Allow opening the link in a new tab/window when holding Ctrl (Windows) or Command (Mac)
        return;
    }
    // Navigate to the main page (index.html) when clicked
    window.location.href = 'index.html';
});

function generateGlitchedText(text) {
    if (text.length !== 3) {
        return text; // Only works for 3-character text like "PAQ"
    }
    
    const randomCharacter = getRandomCharacter();
    const glitchedText = text[0] + randomCharacter + text[2];
    
    return glitchedText;
}

function getRandomCharacter() {
    const characters = '!$4&a?^*v)#@';
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}


document.addEventListener('mousemove', (e) => {
    const customCursor = document.querySelector('.custom-cursor');
    customCursor.style.left = e.clientX + 'px';
    customCursor.style.top = e.clientY + 'px';
  });