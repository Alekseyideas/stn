console.log('Ready !');

function HeightBlock() {
    const block = document.getElementsByClassName('height-block');
    const win_height = window.innerHeight;

    for(let i = 0; i<block.length; i++)
        block[i].style.height = `${win_height}px`;


    const logo = document.getElementById('main-logo');

    const logo_height = logo.height;

    logo.style.marginTop = `-${logo_height/2}px`;

    const text_block = document.getElementsByClassName('content-tab');

    for (let i = 0; i<text_block.length; i++) text_block[i].style.height = `${win_height/2}px`;







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

$('.content-tab').mCustomScrollbar({
    theme:"rounded"
});
$('.vendors').mCustomScrollbar({
    axis:"x"
});


