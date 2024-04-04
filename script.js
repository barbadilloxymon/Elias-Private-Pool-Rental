let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

// Function to close the menu
function closeMenu() {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// Toggle menu when menu button is clicked
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

// Close menu when any item in the menu is clicked
let menuItems = document.querySelectorAll('.header .navbar a');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        closeMenu();
    });
});

var swiperHome = new Swiper(".home-slider", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiperRoom = new Swiper(".room-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

// Assuming `.box` elements are within `.content` divs which are part of your accordion setup
let accordions = document.querySelectorAll('.faqs .row .content .box');

accordions.forEach(acco => {
    acco.onclick = () => {
        // This will remove 'active' class from all accordion items before adding it to the clicked one
        accordions.forEach(subAcco => {
            subAcco.classList.remove('active');
        });
        acco.classList.add('active');
    };
});
