'use strict';

console.log('Ready !');

function HeightBlock() {
    var block = document.getElementsByClassName('height-block');
    var win_height = window.innerHeight;

    for (var i = 0; i < block.length; i++) {
        block[i].style.height = win_height + 'px';
    }var logo = document.getElementById('main-logo');

    var logo_height = logo.height;

    logo.style.marginTop = '-' + logo_height / 2 + 'px';
}

HeightBlock();

window.addEventListener('resize', function () {
    HeightBlock();
});

(function () {
    var menu = document.querySelectorAll('nav ul li');

    for (var i = 0; i < menu.length; i++) {
        menu[i].querySelectorAll('ul li').length > 1 ? menu[i].className = 'has-sub-menu' : false;
    }
})();

$('.to-next-slide').click(function () {
    $.scrollTo('#block-2', 500);
});