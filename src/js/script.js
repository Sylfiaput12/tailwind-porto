//Hamburger
// if(window.pageXOffset> fixedNav){
//     Headers.classList.add('navbar-fixed');
// }else {
//     Headers.classList.remove('navbar-fixed');
// }
//     };


const hamburger = document.querySelector('#hamburger');
const navMenu =document.querySelector('#nav-menu')

hamburger.addEventListener('click', function(){

    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})


