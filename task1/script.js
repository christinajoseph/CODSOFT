// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

// Skill Chart Placeholder
const skillChart = document.getElementById('skill-chart');
skillChart.innerHTML = `<p>Interactive skill chart coming soon!</p>`;
