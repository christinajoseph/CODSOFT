 // Theme Toggle Functionality
 const toggleButton = document.querySelector('.theme-toggle');
 const body = document.body;
 toggleButton.addEventListener('click', () => {
   body.classList.toggle('dark-theme');
   body.classList.toggle('light-theme');
 });