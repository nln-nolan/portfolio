// Configuration de ScrollReveal pour les animations d'apparition
const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.text-hello',{delay:200, origin:'top'});
sr.reveal('.hero-text',{delay:200, origin:'rigth'});
sr.reveal('.iconsForMobile',{delay:200, origin:'bottom'});
sr.reveal('.iconsForPC',{delay:200, origin:'left'});
sr.reveal('.scroll-up',{delay:200, origin:'right'});