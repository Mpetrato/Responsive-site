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

const changeHeaderWhenScroll = ()=> {
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
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
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


const backToTopButton = document.querySelector('.back-to-top');
const backToTop = ()=> {
    if(window.scrollY >= 560){
        backToTopButton.classList.add('show')
    }else {
        backToTopButton.classList.remove('show')
    }
}



// Menu ativo conforme a seção visível na página
const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection() {
    
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for( let section of sections ) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if(checkpointStart && checkpointEnd){
            document
                .querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.add('active')
        } else {
            document
                .querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.remove('active')
        } 

    }

}

// When Scroll

window.addEventListener('scroll', ()=>{
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
})
