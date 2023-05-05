// tab links

var tablinks = document.getElementsByClassName("tab-link");
var tabcontents = document.getElementsByClassName("tab-content");

function openTab(tabName){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");

}


// menu icon
let menuIcon = document.querySelector('#menu-icon');
let nav = document.querySelector('.navbar');

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    nav.classList.toggle('active');
};

// toggle icon nav
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });



    // sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY>100);
   //  reomve toggle icon and navbar when click nav link
    
     menuIcon.classList.remove('bx-x');
    nav.classList.remove('active');

};


// scrolly reveal
ScrollReveal({
    //  reset: true,
     distance: '80px',
     duration: 2000,
     delay:200
     });

     ScrollReveal().reveal('.home-content, .heading1, .heading2, .heading3, .title, .heading4', { origin: 'top'});
     ScrollReveal().reveal('.home-image, .services-container, .portfolio-box, .skills-content, .contact form ', { origin: 'bottom'});
     ScrollReveal().reveal('.home-content h1, .about-content, .column left ', { origin: 'left'});
     ScrollReveal().reveal('.home-content p, .about-image, .column right ', { origin: 'right'});



     // typed js 

    

     var typed = new Typed('.multiple-text', {
        strings: ['Full stack developer'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay:1000,
        loop: true
      });