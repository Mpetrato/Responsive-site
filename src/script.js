// Menu Mobile
const toggle = document.querySelectorAll('nav .toggle')
const navContainer = document.querySelector('nav.container');
const links = document.querySelectorAll('nav ul li a');

toggle.forEach((div)=>{
    div.addEventListener('click', function() {
        navContainer.classList.toggle('show')
    })
})

links.forEach((link)=>{
    link.addEventListener('click', ()=>{
        navContainer.classList.remove('show');
    })
})


// Scroll Nav Box-Shadow

const header = document.querySelector('#header');
const navHeight = header.offsetHeight;


window.addEventListener('scroll', ()=>{
    if(window.scrollY >= navHeight){
        header.classList.add('scroll')
    }else {
        header.classList.remove('scroll')
    }
})

