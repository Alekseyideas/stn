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

    var text_block = document.getElementsByClassName('content-tab');

    for (var _i = 0; _i < text_block.length; _i++) {
        text_block[_i].style.height = win_height / 2 + 'px';
    }
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

function scroll(from, to) {
    $(from).click(function () {
        $.scrollTo(to, 500);
    });
}

scroll('.to-next-slide', '#block-2');
scroll('#company,#about-us,#vacancy,#contacts', '#block-2');
scroll('.menu-logo', '#block-1');

(function () {
    var link = document.querySelectorAll('a');

    for (var i = 0; i < link.length; i++) {
        if (link[i].getAttribute('href') === '#') {
            link[i].onclick = function (e) {
                e.preventDefault();
            };
        }
    }
})();

function tabs(x) {
    var wrapper = document.getElementById(x);
    var tab = wrapper.childNodes[1].children;
    var content = wrapper.childNodes[3].children;
    var link = document.getElementsByClassName('menu_link');

    var _loop = function _loop(i) {

        var data_tab = tab[i].dataset['tab'];
        var content_tab = document.getElementById('tab-' + data_tab);

        // click event tab
        tab[i].addEventListener('click', function () {

            for (var _i2 = 0; _i2 < tab.length; _i2++) {
                tab[_i2].classList.remove('active');
            }this.classList.add('active');

            for (var _i3 = 0; _i3 < content.length; _i3++) {
                content[_i3].style.display = 'none';
            }content_tab.style.display = 'block';
        });

        // click event top menu

        var _loop2 = function _loop2(_x) {
            link[_x].addEventListener('click', function () {

                var id = link[_x].getAttribute('id');

                var cur_tab = document.querySelectorAll('[data-tab=' + id + ']');

                var content = document.getElementById('tab-' + id);

                content ? cur_tab[0].click() : false;
            });
        };

        for (var _x = 0; _x < link.length; _x++) {
            _loop2(_x);
        }tab[i].classList.contains('active') ? content_tab.style.display = 'block' : false;
    };

    for (var i = 0; i < tab.length; i++) {
        _loop(i);
    }
}

tabs('wr-tab-1');
tabs('wr-tab-2');

$('.content-tab').mCustomScrollbar({
    theme: "rounded"
});
$('.vendors').mCustomScrollbar({
    axis: "x"
});