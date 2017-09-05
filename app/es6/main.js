console.log('Ready !');

function HeightBlock() {
    const block = document.getElementsByClassName('height-block');
    const win_height = window.innerHeight;

    for(let i = 0; i<block.length; i++)
        block[i].style.height = `${win_height}px`;


    const logo = document.getElementById('main-logo');

    const logo_height = logo.height;

    logo.style.marginTop = `-${logo_height/2}px`;

    const text_block = document.getElementsByClassName('scroll');

    for (let i = 0; i<text_block.length; i++) text_block[i].style.height =  win_height < 800 ? `${win_height/2 + 70}px` : `${win_height/2}px`;

    const m_top = document.getElementsByClassName('m-top-100');
    for (let i = 0; i<m_top.length; i++) m_top[i].style.marginTop = win_height < 800 ? '10px' : '100px';





}

HeightBlock();


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

$('.scroll').mCustomScrollbar({
    theme:"rounded"
});
$('.vendors').mCustomScrollbar({
    axis:"x"
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

