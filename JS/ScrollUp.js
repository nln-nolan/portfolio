// Scroll UP
window.addEventListener("scroll", function() {
    let scrollUp = document.getElementById("scroll-up");

    const colorChangeElement = document.querySelector('.color-change-element');
    const sections = document.querySelectorAll('.section');

    if (window.scrollY > 90) {
        scrollUp.style.display = "block";
    } else {
        scrollUp.style.display = "none";
    }

    function detectVisibleSection() {
        sections.forEach(section => {
          const bounding = section.getBoundingClientRect();
          if (bounding.top <= 0 && bounding.bottom >= 0) {
            if (section.id === 'home') {
                colorChangeElement.style.background = 'red';
                colorChangeElement.addEventListener('mouseover', () => {
                    colorChangeElement.style.boxShadow = "0 0 5px 0 red inset, 0 0 10px 4px red";
                });
                colorChangeElement.addEventListener('mouseout', () => {
                    colorChangeElement.style.boxShadow = 'none';
                });

            } else if (section.id === 'about-me') {
                colorChangeElement.style.background = 'blue';
                colorChangeElement.addEventListener('mouseover', () => {
                    colorChangeElement.style.boxShadow = "0 0 5px 0 blue inset, 0 0 10px 4px blue";
                });
                colorChangeElement.addEventListener('mouseout', () => {
                    colorChangeElement.style.boxShadow = 'none';
                });

            } else if (section.id === 'my-project') {
                colorChangeElement.style.background = 'purple';
                colorChangeElement.addEventListener('mouseover', () => {
                    colorChangeElement.style.boxShadow = "0 0 5px 0 purple inset, 0 0 10px 4px purple";
                });
                colorChangeElement.addEventListener('mouseout', () => {
                    colorChangeElement.style.boxShadow = 'none';
                });

            } else if (section.id === 'contact') {
                colorChangeElement.style.background = 'green';
                colorChangeElement.addEventListener('mouseover', () => {
                    colorChangeElement.style.boxShadow = "0 0 5px 0 green inset, 0 0 10px 4px green";
                });
                colorChangeElement.addEventListener('mouseout', () => {
                    colorChangeElement.style.boxShadow = 'none';
                });
            }
          }
        });
    }
    detectVisibleSection();

});