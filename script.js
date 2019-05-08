console.log('Working');

var close = document.getElementById('close');
var object = document.getElementById('game');
var game = document.getElementsByClassName('game')[0];

close.addEventListener('click', function () {
    game.style.display = 'none';
});

function load(element) {
    object.setAttribute('data', 'games/'+element.dataset.file);
    game.style.display = 'block';
}
