// Classes
let aboutUs = document.querySelector('.about-us .wrapper-inner');
let works = document.querySelectorAll('.works__block-item');
let headerAdaptiveMenu = document.querySelector('.header__adaptive-menu');
let headerMenu = document.querySelector('.header__menu');
let toTop = document.querySelector('.to-top');
// Animation

window.addEventListener('scroll', () => {
    let scrollTop = document.documentElement.scrollTop;
    if (aboutUs.getBoundingClientRect().top < window.innerHeight) { 
        console.log(aboutUs);
        aboutUs.style.left = '0';
    } else {
        aboutUs.style.left = '200%';
    };
    
    if (scrollTop >= 100) {
        toTop.classList.add('active');
    } else {
        toTop.classList.remove('active');
    };
});

// Works Transition

// function worksTransition () {
//     let num = 1;
//     for (let item of works) {
//         if (num % 2 != 0) {
//             item.classList.add('faster');
//             num += 1;
//         } else {
//             item.classList.add('slower');
//             num += 1;
//         };
//     };
// };


// worksTransition();

// Works Animation

// function worksAnimation () {
//     for (let block of works) {
//         console.log(block.getBoundingClientRect());
//         if (block.getBoundingClientRect().top < window.innerHeight / 6 * 5) {
//             block.classList.add('active');
//         } else {
//             block.classList.remove('active');
//         };
//     };
// };

// window.addEventListener('scroll', worksAnimation);

// Burger

headerAdaptiveMenu.addEventListener('click', () => {
    headerAdaptiveMenu.classList.toggle('active');
    headerMenu.classList.toggle('active');
    if (headerAdaptiveMenu.classList.contains('active')) {
        headerAdaptiveMenu.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        headerAdaptiveMenu.innerHTML = '<i class="fa-solid fa-bars-staggered"></i>';
    };
});