console.log('Ready !');


function HeightBlock() {
    console.log(window.innerHeight + 'x' +window.innerWidth);
    const block = document.getElementsByClassName('height-block');
    const win_height = window.innerHeight;
    const win_width = window.innerWidth;

    for(let i = 0; i<block.length; i++)
        block[i].style.minHeight = win_width > 767 ? `${win_height}px` : 'auto';


    const logo = document.getElementById('main-logo');

    const logo_height = logo.height;

    logo.style.marginTop = `-${logo_height/2}px`;

    const text_block = document.getElementsByClassName('scroll');
    const m_top = document.getElementsByClassName('m-top-100');

    if(win_width > 767){
        for (let i = 0; i<text_block.length; i++) text_block[i].style.height =  win_height < 800 ? `${win_height/2 + 70}px` : `${win_height/2}px`;

    }



    for (let i = 0; i<m_top.length; i++) m_top[i].style.marginTop = win_height < 800 ? '10px' : '100px';





    if(win_width > 767){
        $('.scroll').mCustomScrollbar({
            theme:"rounded"
        });
        $('.vendors').mCustomScrollbar({
            axis:"x"
        });
    }

}

HeightBlock();
const block_2 = document.getElementById('block-2');
const block_3 = document.getElementById('block-3');
const block_4 = document.getElementById('block-4');
const block_5 = document.getElementById('block-5');
const block_6 = document.getElementById('block-6');
const block_7 = document.getElementById('block-7');
const links = document.getElementsByClassName('menu_link');

let blocks = [
    'block-2',
    'block-3',
    'block-4',
    'block-5',
    'block-6',
    'block-7',
];
const main_link = document.getElementsByClassName('main_link');
const main_block = document.getElementsByClassName('height-block');
main_block


function detectScroll(number) {


    if (window.pageYOffset > block_2.offsetTop && window.pageYOffset < block_3.offsetTop){
        for (let i = 0; i < links.length; i++)
            links[i].style.color = '#0ea4f4'
        document.getElementById('company').style.color = '#ff7c21';
    }
}

window.onscroll = function () {
    for (let x = 1; x < 8; x++){
       // main_link[x].style.color = '#ff7c21';
       // console.log(main_link[x]);
        if (window.pageYOffset > main_block[x].offsetTop && window.pageYOffset < main_block[x+1].offsetTop){
            for (let i = 0; i < links.length; i++)
                links[i].style.color = '#0ea4f4'
            main_link[x-1].style.color = '#ff7c21';
        }

    }
/*
    if (window.pageYOffset > block_2.offsetTop && window.pageYOffset < block_3.offsetTop){
        for (let i = 0; i < links.length; i++)
            links[i].style.color = '#0ea4f4'
        document.getElementById('company').style.color = '#ff7c21';
    }
    if (window.pageYOffset > block_3.offsetTop-1 && window.pageYOffset < block_4.offsetTop-1){
        for (let i = 0; i < links.length; i++)
            links[i].style.color = '#0ea4f4'
        document.getElementById('portpholio').style.color = '#ff7c21';
    }
*/


};

window.addEventListener('resize', function () {
    HeightBlock();
});



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

scroll('.to-next-slide','#block-2');
scroll('#company,#about-us,#vacancy,#contacts','#block-2');
scroll('.menu-logo','#block-1');
scroll('#portpholio','#block-3');
scroll('#partners,#become_partner,#trainings,#call-back','#block-4');
scroll('#vendors,#advantages,#presentation','#block-5');
scroll('#press,#company-news,#vendor-news','#block-6');







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

