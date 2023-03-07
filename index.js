// Check if the user has a preferred mode stored in local storage
const preferredMode = localStorage.getItem('preferred-mode');
if (preferredMode) {
  body.classList.add(preferredMode);
}

// Add a click event listener to the button
toggleButton.addEventListener('click', function() {
  // Toggle the dark mode class on the body element
  body.classList.toggle('dark-mode');

  // Store the user's preferred mode in local storage
  const currentMode = body.classList.contains('dark-mode') ? 'dark-mode' : '';
  localStorage.setItem('preferred-mode', currentMode);
});

