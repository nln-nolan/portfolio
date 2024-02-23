// Custom Cursor
window.addEventListener("scroll", function() {
    const colorChangeElementCursor = document.querySelector('.customCursor');
    const sections = document.querySelectorAll('.section');

    function CustomCursor() {
        sections.forEach(section => {
          const bounding = section.getBoundingClientRect();
          if (bounding.top <= 0 && bounding.bottom >= 0) {
            if (section.id === 'home') {
                colorChangeElementCursor.style.cursor = 'var(--custom-cursor-default-green)';
            } else if (section.id === 'about-me') {
                colorChangeElementCursor.style.cursor = 'var(--custom-cursor-default-red)';
            } else if (section.id === 'my-project') {
                colorChangeElementCursor.style.cursor = 'var(--custom-cursor-default-blue)';
            } else if (section.id === 'my-creation') {
                colorChangeElementCursor.style.cursor = 'var(--custom-cursor-default-orange)';
            } else if (section.id === 'contact') {
                colorChangeElementCursor.style.cursor = 'var(--custom-cursor-default-purple)';
            } else if (getComputedStyle(document.body).cursor === 'pointer') {
                colorChangeElementCursor.style.cursor = 'var(--custom-cursor-pointer)';
            } else if (getComputedStyle(document.body).cursor === 'text') {
                colorChangeElementCursor.style.cursor = 'var(--custom-cursor-text)';
            }
          }
        });
    }
    CustomCursor();
});

