// Donate
function togglePopup() {
    let = popup = document.querySelector("#popup-donate-overlay");
    popup.classList.toggle("open");
}

// window.addEventListener("scroll", function() {
//     const colorChangeElementDonate = document.querySelector('.donate i');
//     const sections = document.querySelectorAll('.section');

//     function detectVisibleSection() {
//         sections.forEach(section => {
//             const bounding = section.getBoundingClientRect();
//                 if (bounding.top <= 0 && bounding.bottom >= 0) {
//                     if (section.id === 'home') {
//                         colorChangeElementDonate.style.background = 'red';

//                     } else if (section.id === 'about-me') {
//                         colorChangeElementDonate.style.background = 'blue';

//                     } else if (section.id === 'my-project') {
//                         colorChangeElementDonate.style.background = 'orange';

//                     } else if (section.id === 'my-creation') {
//                         colorChangeElementDonate.style.background = 'purple';

//                     } else if (section.id === 'contact') {
//                         colorChangeElementDonate.style.background = 'green';
//                     }
//                 }
//         });
//     }
//     detectVisibleSection();
// });