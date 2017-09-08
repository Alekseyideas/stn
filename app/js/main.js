'use strict';

console.log('Ready !');

function HeightBlock() {
    var block = document.getElementById('block-1');
    var win_height = window.innerHeight;
    var win_width = window.innerWidth;
    block.style.minHeight = win_width < 1000 ? win_height + 'px' : false;

    var logoImage = $('.menu-logo img');
    var firstLink = $('li[data-menuanchor="secondPage"] a');
    var phone = $('.headerPhone');

    var logoImageWidth = logoImage.width();

    var mLeft = (firstLink.offset().left - logoImageWidth - logoImage.offset().left) / 2;
    console.log(phone.width());
    phone.css({
        left: logoImageWidth + mLeft + logoImage.offset().left - phone.width() / 2 + 'px'
    });

    var presetation = document.getElementsByClassName('vendors__presentation')[0];
    var logo = document.getElementById('main-logo');
    var logo_height = logo.height;

    logo.style.marginTop = '-' + logo_height / 2 + 'px';

    var text_block = document.getElementsByClassName('scroll');
    var m_top = document.getElementsByClassName('m-top-100');

    if (win_width > 1000) {
        for (var i = 0; i < text_block.length; i++) {
            text_block[i].style.height = win_height < 800 ? win_height / 2 - 70 + 'px' : win_height / 2 - 50 + 'px';
        }
    }

    presetation.style.marginLeft = '-' + presetation.offsetWidth / 2 + 'px';
    for (var _i = 0; _i < m_top.length; _i++) {
        m_top[_i].style.marginTop = win_height < 800 ? '10px' : '70px';
    }if (win_width > 1000) {
        $('.scroll').mCustomScrollbar({
            theme: "rounded"
        });
        $('.vendors').mCustomScrollbar({
            axis: "x"
        });
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

var company = $('li[data-menuanchor="secondPage"]');
var portgolio = $('li[data-menuanchor="3rdPage"]');
var partner = $('li[data-menuanchor="4thPage"]');
var vendor = $('li[data-menuanchor="5thPage"]');
var press = $('li[data-menuanchor="6thPage"]');
var enter = $('li[data-menuanchor="lastPage"]');

scroll('.menu-logo', '#block-1');
scroll(company, '#block-2');
scroll(portgolio, '#block-3');
scroll(partner, '#block-4');
scroll(vendor, '#block-5');
scroll(press, '#block-6');
scroll(enter, '#block-7');

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
tabs('wr-tab-3');
tabs('wr-tab-4');

$('.brandBook').owlCarousel({
    items: 1,
    dots: true,
    navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    responsive: {
        600: {
            nav: false
        },
        1000: {
            nav: true
        }
    }
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
$(document).ready(function () {

    if (window.innerWidth > 1000) {
        $('#fullpage').fullpage({
            anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage', '6thPage', 'lastPage'],
            menu: '#menu',
            scrollingSpeed: 1000,
            scrollBar: true
        });
        scroll('.to-next-slide', '#block-2');
    }

    $('#btn__show-presentation').click(function () {
        $('.vendors__presentation').removeClass('fadeOutLeft').addClass('fadeInLeft').css('left', '50%');
        $('.popUp__bg').show();
    });
    $('.popUp__close').click(function () {
        $('.popUp__bg').hide();
        $('.vendors__presentation').removeClass('fadeInLeft').addClass('fadeOutLeft');
        setTimeout(function () {
            $('.vendors__presentation').css('left', '-50%');
        }, 1000);
    });
    new WOW().init();

    $('.m-close-menu').click(function () {
        $('#main-menu').css('left', '-100%');
    });
    $('#btn_menu').click(function () {
        $('#main-menu').css('left', '0');
    });
    $('#menu li').click(function () {
        $('.m-close-menu').click();
    });
});