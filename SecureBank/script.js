// Navbar toggle
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

// Dark Mode toggle
let darkmode = document.querySelector('#darkmode');

// Enable dark mode by default
document.body.classList.add('active');
darkmode.classList.replace('bx-moon', 'bx-sun');

darkmode.onclick = () => {
    if (darkmode.classList.contains('bx-sun')) {
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
    } else {
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
    }
}

// Scroll Reveal animations
const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home-text, .home-img,
            .about-img, .about-text,
            .box, .s-box,
            .btn, .connect-text,
            .contact-box`, {
    interval: 200
});
