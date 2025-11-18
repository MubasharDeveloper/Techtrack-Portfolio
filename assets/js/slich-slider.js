// Initialize Swiper
var swiper = new Swiper(".projectSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  breakpoints: {
    // When window width is >= 576px (small)
    576: {
      slidesPerView: 2,
    },
    // When window width is >= 768px (medium)
    768: {
      slidesPerView: 3,
    },
    // When window width is >= 1200px (large)
    1200: {
      slidesPerView: 4,
    },
  },
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  item.addEventListener("click", () => {
    // Close others
    faqItems.forEach(i => i !== item && i.classList.remove("active"));

    // Toggle current
    item.classList.toggle("active");
  });
});



$('.custom-navbar-toggle-btn').on('click', ()=>{
  $('.toggle-sidebar').toggleClass('active')
})