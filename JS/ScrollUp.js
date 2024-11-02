// Scroll UP
window.addEventListener("scroll", function() {
    let scrollUp = document.getElementById("scrollUp");

    const colorChangeElement = document.querySelector('.colorChangeElement');
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

                    } else if (section.id === 'about-me') {
                        colorChangeElement.style.background = 'blue';

                    } else if (section.id === 'my-project') {
                        colorChangeElement.style.background = 'orange';

                    } else if (section.id === 'my-creation') {
                        colorChangeElement.style.background = 'purple';

                    } else if (section.id === 'contact') {
                        colorChangeElement.style.background = 'green';
                    }
                }
        });
    }
    detectVisibleSection();

});