// Hamburger Script

let burger = document.querySelector('.burger');

burger.addEventListener('click', function (){
    burger.classList.toggle('activated');
});

// Parallax Scrolling script

let table = document.querySelector('.table');
let text = document.querySelector('.intro');
let coffee = document.querySelector('.coffee');

window.addEventListener('scroll',function(){
    let value = window.scrollY;

    table.style.top = -value * 0.3 + 'px';
    text.style.top = value * 0.1 + 'px';
    coffee.style.top = -value * 0.4 + 'px';
});

