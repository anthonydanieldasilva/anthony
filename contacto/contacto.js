var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('! Hablemos !')
    .pauseFor(900)
    .deleteAll()
    .typeString('¿Alguna idea en mente?')
    .pauseFor(900)
    .deleteAll()
    .start();