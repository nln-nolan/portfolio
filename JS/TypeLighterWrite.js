// WEB Site Documentation ↓
// https://safi.me.uk/typewriterjs/

// Home
var app = document.getElementById('typeLighterDiv');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('nln.nolan')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Développeur')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Designer')
    .pauseFor(2000)
    .start();