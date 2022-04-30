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

const changeHeaderWhenScroll = ()=> {
    const header = document.querySelector('#header');
    const navHeight = header.offsetHeight;

    if(window.scrollY >= navHeight){
        header.classList.add('scroll')
    }else {
        header.classList.remove('scroll')
    }
}


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
    #contact .text, #contact .links,
    footer .brand, footer .social
    `,
    { interval: 100})


// Back-To-Top


const backToTop = ()=> {
    const backToTopButton = document.querySelector('.back-to-top');

    if(window.scrollY >= 560){
        backToTopButton.classList.add('show')
    }else {
        backToTopButton.classList.remove('show')
    }
}


// When Scroll

window.addEventListener('scroll', ()=>{
    changeHeaderWhenScroll()
    backToTop()
})