document.addEventListener("DOMContentLoaded", function () {

    const wrapper = document.getElementById("bannerWrapper");
    const slides = document.querySelectorAll(".slider-item");
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.getElementById("prevSlide");
    const nextBtn = document.getElementById("nextSlide");

    // ❗ Nếu trang KHÔNG có slider → dừng luôn
    if (!wrapper || slides.length === 0) return;

    let index = 0;

    function moveSlider(i) {
        index = (i + slides.length) % slides.length;
        wrapper.style.transform = `translateX(-${index * 100}vw)`;

        dots.forEach(dot => dot.classList.remove("active"));
        if (dots[index]) dots[index].classList.add("active");
    }

    nextBtn?.addEventListener("click", () => moveSlider(index + 1));
    prevBtn?.addEventListener("click", () => moveSlider(index - 1));

    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => moveSlider(i));
    });

    setInterval(() => moveSlider(index + 1), 5000);
});

    /* ================= HEADER STICKY ================= */
    let lastScrollTop = 0;
    const header = document.getElementById("site-header");

    window.addEventListener("scroll", function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 120) {
            header.classList.add("hide");
            header.classList.remove("show");
        } else {
            header.classList.remove("hide");
            header.classList.add("show");
        }

        lastScrollTop = scrollTop;
    });


    /* ================= MEGA MENU SON MÔI ================= */
    const megaToggle = document.querySelector('.mega-toggle');
const megaItem = document.querySelector('.has-mega');

if (megaToggle && megaItem) {
    megaToggle.addEventListener('click', function (e) {
        e.preventDefault();
        megaItem.classList.toggle('active');
    });

    document.addEventListener('click', function (e) {
        if (!megaItem.contains(e.target)) {
            megaItem.classList.remove('active');
        }
    });
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});
const links = document.querySelectorAll('.menu-item');
const current = window.location.pathname;

links.forEach(link => {
    if (link.getAttribute('href') === current) {
        link.classList.add('active');
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop();
    const links = document.querySelectorAll(".nav-link");

    links.forEach(link => {
        const linkPage = link.getAttribute("href").split("/").pop();

        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });
});
}
