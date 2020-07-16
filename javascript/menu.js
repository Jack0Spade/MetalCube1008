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

// Menu image change script

function imgSwap(index){

    for(let i= 0;i <= 23;i++){
        button.children[i].classList.remove('activated');
    }
    
    button.children[index].classList.toggle('activated');

    switch(index){
        case 0:
            $('.menu-img').attr("src" ,'../asset/menu/page-1.jpg');
            break
        case 1:
            $('.menu-img').attr("src" ,'../asset/menu/page-1.jpg');
            break
        case 2:
            $('.menu-img').attr("src" ,'../asset/menu/page-2.jpg');
            break
        case 3:
            $('.menu-img').attr("src" ,'../asset/menu/page-2.jpg');
            break
        case 4:
            $('.menu-img').attr("src" ,'../asset/menu/page-3.jpg');
            break
        case 5:
            $('.menu-img').attr("src" ,'../asset/menu/page-4.jpg');
            break
        case 6:
            $('.menu-img').attr("src" ,'../asset/menu/page-5.jpg');
            break
        case 7:
            $('.menu-img').attr("src" ,'../asset/menu/page-6.jpg');
            break
        case 8:
            $('.menu-img').attr("src" ,'../asset/menu/page-6.jpg');
            break
        case 9:
            $('.menu-img').attr("src" ,'../asset/menu/page-7.jpg');
            break
        case 10:
            $('.menu-img').attr("src" ,'../asset/menu/page-7.jpg');
            break
        case 11:
            $('.menu-img').attr("src" ,'../asset/menu/page-8.jpg');
            break
        case 12:
            $('.menu-img').attr("src" ,'../asset/menu/page-8.jpg');
            break
        case 13:
            $('.menu-img').attr("src" ,'../asset/menu/page-9.jpg');
            break
        case 14:
            $('.menu-img').attr("src" ,'../asset/menu/page-10.jpg');
            break
        case 15:
            $('.menu-img').attr("src" ,'../asset/menu/page-11.jpg');
            break
        case 16:
            $('.menu-img').attr("src" ,'../asset/menu/page-11.jpg');
            break
        case 17:
            $('.menu-img').attr("src" ,'../asset/menu/page-12.jpg');
            break
        case 18:
            $('.menu-img').attr("src" ,'../asset/menu/page-12.jpg');
            break
        case 19:
            $('.menu-img').attr("src" ,'../asset/menu/page-13.jpg');
            break
        case 20:
            $('.menu-img').attr("src" ,'../asset/menu/page-14.jpg');
            break
        case 21:
            $('.menu-img').attr("src" ,'../asset/menu/page-14.jpg');
            break
        case 22:
            $('.menu-img').attr("src" ,'../asset/menu/page-15.jpg');
            break
        case 23:
            $('.menu-img').attr("src" ,'../asset/menu/page-16.jpg');
            break
    }
}


let button = document.querySelector('.food-btn-box');
let buttons = document.querySelectorAll('.food-btn');


for (let i = 0, len = button.children.length; i < len; i++){
    (function(index){

        button.children[i].onclick = function(){

            imgSwap(i);
        }
    })(i);
}