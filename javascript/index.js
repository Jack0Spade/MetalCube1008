//  Mobile / Desktop detection

let mobile = window.matchMedia('(max-width: 640px)');


// Image swap on desktop


if(mobile.matches){

}else{
    let coffee = document.querySelector('.coffee');
    let table = document.querySelector('.table');

    coffee.setAttribute('src', 'asset/coffee-desktop.png');
    table.setAttribute('src', 'asset/background-table-desktop.png');
}


// Hamburger Script


let burger = document.querySelector('.burger');

burger.addEventListener('click', function (){
    burger.classList.toggle('activated');
});


// Parallax Scrolling script


window.addEventListener('scroll',function(){

    let table = document.querySelector('.table');
    let text = document.querySelector('.intro');
    let coffee = document.querySelector('.coffee');

    let value = window.scrollY;

    if(mobile.matches){
        table.style.top = -value * 0.3 + 'px';
        text.style.top = value * 0.1 + 'px';
        coffee.style.top = -value * 0.4 + 'px';
    }else{
        table.style.top = -value * 0.5 + 'px';
        text.style.top = value * 0.3 + 'px';
        coffee.style.top = -value * 0.6 + 'px';
    }

});


// Navigation bar shrink script
window.addEventListener('scroll', function(){

    let navbar = document.querySelector('.navigation');

    navbar.classList.toggle('shrink', window.scrollY > 100 && !mobile.matches);

});


