var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('¿ Alguna idea ?')
    .pauseFor(900)
    .deleteAll()
    .typeString('! Hablemos !')
    .pauseFor(900)
    .deleteAll()
    .start();