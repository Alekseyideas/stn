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

    var text_block = document.getElementsByClassName('scroll');

    for (var _i = 0; _i < text_block.length; _i++) {
        text_block[_i].style.height = win_height < 800 ? win_height / 2 + 70 + 'px' : win_height / 2 + 'px';
    }var m_top = document.getElementsByClassName('m-top-100');
    for (var _i2 = 0; _i2 < m_top.length; _i2++) {
        m_top[_i2].style.marginTop = win_height < 800 ? '10px' : '100px';
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
scroll('#portpholio', '#block-3');
scroll('#partners,#become_partner,#trainings,#call-back', '#block-4');
scroll('#vendors,#advantages,#presentation', '#block-5');
scroll('#press,#company-news,#vendor-news', '#block-6');

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

            for (var _i3 = 0; _i3 < tab.length; _i3++) {
                tab[_i3].classList.remove('active');
            }this.classList.add('active');

            for (var _i4 = 0; _i4 < content.length; _i4++) {
                content[_i4].style.display = 'none';
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
tabs('wr-tab-3');
tabs('wr-tab-4');

$('.scroll').mCustomScrollbar({
    theme: "rounded"
});
$('.vendors').mCustomScrollbar({
    axis: "x"
});

$('.slider').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    responsiveClass: true,
    navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    responsive: {
        0: {
            items: 1,
            nav: false,
            dots: true

        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: true
        }
    }
});