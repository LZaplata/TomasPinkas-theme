import lightGallery from "lightgallery";
import lgThumbnail from "lightgallery/plugins/thumbnail"
import lgZoom from "lightgallery/plugins/zoom"

window.lightGallery = lightGallery;
window.lgThumbnail = lgThumbnail;
window.lgZoom = lgThumbnail;

window.$ = window.jQuery = require("jquery");

// lightGallery(document.getElementById("klienti"), {
//     selector: ".image",
//     plugins: [lgZoom, lgThumbnail],
//     speed: 500,
// });

// var swiper = new Swiper(".reviews-swiper", {
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//         el: ".swiper-pagination",
//     },
// });

// var swiperInstagram = new Swiper(".instagram-swiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     centeredSlides: true,
//     loop: true,
//     breakpoints: {
//         576: {
//             slidesPerView: 3,
//         },
//         768: {
//             slidesPerView: 4,
//         },
//         1200: {
//             slidesPerView: 5,
//         },
//         1400: {
//             slidesPerView: 6,
//         },
//         2000: {
//             slidesPerView: 9,
//         },
//     },
// });

$(document).ready(function () {
    $("#offcanvas .nav li a").click(function (event) {
        $("#offcanvas").removeClass("show");
        $(".offcanvas-backdrop").remove();
        $("body").removeAttr("style");
    });
});
