console.log('Ready !');
$(window).on('load', function(){
    $('.container-preloader').fadeOut(1000);
    //$('#main-logo').addClass('zoomIn');
});


function HeightBlock() {
    const block = document.getElementById('block-1');
    const win_height = window.innerHeight;
    const win_width = window.innerWidth;
    block.style.minHeight = win_width < 1000 ? `${win_height}px` : false;


    const logoImage = $('.menu-logo img');
    const firstLink = $('li[data-menuanchor="secondPage"] a');
    const phone = $('.headerPhone');

    let logoImageWidth = logoImage.width();

    let mLeft = (firstLink.offset().left - logoImageWidth - logoImage.offset().left) / 2 ;
    phone.css({
        left: (logoImageWidth +  mLeft + logoImage.offset().left) - phone.width()/2  + 'px'
    });


    const presetation = document.getElementsByClassName('vendors__presentation')[0];
    //const logo = document.getElementById('main-logo');
    //const logo_height = logo.height;

    //logo.style.marginTop = `-${logo_height/2}px`;

    const text_block = document.getElementsByClassName('scroll');
    const m_top = document.getElementsByClassName('m-top-100');

    const block1 = document.getElementById('wr-tab-1');

    if(win_width > 1000){
        for (let i = 0; i<text_block.length; i++) text_block[i].style.height =  win_height < 800 ? `${win_height/1.3}px` : `${win_height/1.3 - 50}px`;

    }

    presetation.style.marginLeft = '-' + presetation.offsetWidth/2 + 'px'
    //for (let i = 0; i<m_top.length; i++) m_top[i].style.marginTop = win_height < 800 ? '10px' : '70px';





    if(win_width > 1000){
        $('.scroll').mCustomScrollbar({
            theme:"rounded"
        });
        $('.vendors').mCustomScrollbar({
            axis:"x"
        });
    }



    const sections = document.getElementsByClassName('height-block');

    for( let section of sections){

        section.style.minHeight = window.innerHeight + 'px'
    }



}

HeightBlock();

window.addEventListener('resize', function () {
    HeightBlock();
});



let headerFunc = ()=>{

    window.onscroll = ()=>{
        let section = document.getElementById('block-2');
        let header = document.getElementsByTagName('header')[0];
        header.style.position = window.pageYOffset >= section.offsetTop ? 'fixed' : 'absolute';


    }

};
headerFunc();



(function () {
    const menu = document.querySelectorAll('nav ul li');

    for(let i = 0; i<menu.length; i++ ){
        menu[i].querySelectorAll('ul li').length>1 ? menu[i].className = 'has-sub-menu' : false;
    }

})();


function scroll(from,to) {
    $(from).click(function () {
        $.scrollTo(to,500);
    });
}


let company = $('li[data-menuanchor="secondPage"]');
let portgolio = $('li[data-menuanchor="3rdPage"]');
let partner = $('li[data-menuanchor="4thPage"]');
let vendor = $('li[data-menuanchor="5thPage"]');
let press = $('li[data-menuanchor="6thPage"]');
let enter = $('li[data-menuanchor="lastPage"]');

scroll('.menu-logo','#block-1');
scroll(company,'#block-2');
scroll(portgolio,'#block-3');
scroll(partner,'#block-4');
scroll(vendor,'#block-5');
scroll(press,'#block-6');
scroll(enter,'#block-7');
scroll($('.to-next-slide'),'#block-2');






(function () {
    const link = document.querySelectorAll('a');

    for (let i=0; i<link.length; i++){
        if(link[i].getAttribute('href') === '#'){
            link[i].onclick = function (e) {
                e.preventDefault();
            };

        }
    }
})();


function tabs(x) {
    const wrapper = document.getElementById(x);
    const tab = wrapper.childNodes[1].children;
    const content = wrapper.childNodes[3].children;
    const link = document.getElementsByClassName('menu_link');




    for(let i = 0; i<tab.length; i++){


        const data_tab = tab[i].dataset['tab'];
        const content_tab = document.getElementById(`tab-${data_tab}`);


        // click event tab
        tab[i].addEventListener('click', function () {

            for (let i = 0; i < tab.length; i++) tab[i].classList.remove('active');

            this.classList.add('active');


            for (let i = 0; i < content.length; i++) content[i].style.display = 'none';

            content_tab.style.display = 'block';


        });

        // click event top menu
        for (let x=0; x<link.length; x++)
            link[x].addEventListener('click', function () {

                const id = link[x].getAttribute('id');

                const cur_tab = document.querySelectorAll(`[data-tab=${id}]`);


                const content = document.getElementById(`tab-${id}`);

                content ? cur_tab[0].click() : false;
            })

        tab[i].classList.contains('active') ? content_tab.style.display = 'block' : false;

    }

}

tabs('wr-tab-1');
tabs('wr-tab-2');
tabs('wr-tab-3');
tabs('wr-tab-4');



$('.brandBook').owlCarousel({
    items:1,
    dots: true,
    navText:['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    responsive:{
        600:{
            nav:false
        },
        1000:{
            nav:true
        }
    }
});




$('.slider').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    responsiveClass:true,
    navText:['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    responsive:{
       0:{
           items:1,
           nav: false,
           dots: true

       },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true
        }
    }
});

$('.slider2').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    responsiveClass:true,
    navText:['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    responsive:{
        0:{
            items:1,
            nav: false,
            dots: true

        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:4,
            nav:true
        }
    }
});

$(document).ready(function() {




/*
    if(window.innerWidth > 1000){
        $('#fullpage').fullpage({
            anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage','6thPage','lastPage'],
            menu: '#menu',
            scrollingSpeed: 1000,
            scrollBar:true
        });
        scroll('.to-next-slide','#block-2');
    }
*/

    $('#btn__show-presentation').click(function () {
       $('.vendors__presentation').removeClass('fadeOutLeft').addClass('fadeInLeft').css('left','50%');
       $('.popUp__bg').show();
    });
    $('.popUp__close').click(function () {
        $('.popUp__bg').hide();
        $('.vendors__presentation').removeClass('fadeInLeft').addClass('fadeOutLeft');
        setTimeout(function () {
            $('.vendors__presentation').css('left','-50%');
        },1000)
    });
    new WOW().init();

    $('.m-close-menu').click(function () {
        $('#main-menu').css('left','-100%')
    });
    $('#btn_menu').click(function () {
        $('#main-menu').css('left','0')
    });
    $('#menu li').click(function () {
        $('.m-close-menu').click();
    });




$('.port__link').click(function () {
    $('.inter-text ').hide();
    $('.port__content ').show();

});

});

