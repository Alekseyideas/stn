console.log('Ready !');

function HeightBlock() {
    const block = document.getElementsByClassName('height-block');
    const win_height = window.innerHeight;

    for(let i = 0; i<block.length; i++)
        block[i].style.height = `${win_height}px`;


    const logo = document.getElementById('main-logo');

    const logo_height = logo.height;

    logo.style.marginTop = `-${logo_height/2}px`;









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

