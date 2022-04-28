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



// Testimonials carousel 

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
});


//  ScrollReveal 

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .text, #home .image,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links
    `, { interval: 100})