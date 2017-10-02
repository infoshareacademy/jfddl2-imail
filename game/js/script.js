var boy;

$(document).ready(function () {
    // Inicjalizujemy ludzika
    boy = new Boy();
    console.log(boy);
    boy.init();
});

window.addEventListener('keydown', function (event) {
    if (event.code === 'ArrowRight') {
        boy.moveright();
    }
    if (event.code === 'ArrowLeft') {
        boy.moveleft();
    }
});


// packagesInterval();
setInterval(packagesInterval, 3300);

function packagesInterval() {
    var pack = new Package();
    pack.init();
}