//  Mobile / Desktop detection

let mobile = window.matchMedia('(max-width: 640px)');

// Hamburger Script

let burger = document.querySelector('.burger');

burger.addEventListener('click', function (){
    burger.classList.toggle('activated');
});

// Navigation bar shrink script
window.addEventListener('scroll', function(){

    let navbar = document.querySelector('.navigation');

    navbar.classList.toggle('shrink', window.scrollY > 100 && !mobile.matches);

});