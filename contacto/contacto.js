var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('! Hablemos !')
    .pauseFor(980)
    .deleteAll()
    .typeString('¿Alguna idea en mente?')
    .pauseFor(980)
    .deleteAll()
    .start();