function filterComponents() {
    const selected = document.getElementById('component-select').value;
    const sections = document.querySelectorAll('[data-component]');

    sections.forEach(section => {
      const type = section.getAttribute('data-component');
      section.style.display = (selected === 'all' || type === selected) ? 'block' : 'none';
    });
  }

  // Ensure correct filter on page load
  document.addEventListener('DOMContentLoaded', filterComponents);