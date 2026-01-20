document.addEventListener('DOMContentLoaded', function () {

    /* ================= SLIDER ================= */
    const wrapper = document.getElementById('bannerWrapper');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    const dots = document.querySelectorAll('.dot');

    let currentIndex = 0;
    const totalSlides = 3;

    function moveSlider(index) {
        if (index >= totalSlides) index = 0;
        if (index < 0) index = totalSlides - 1;

        currentIndex = index;
        wrapper.style.transform = `translateX(-${currentIndex * (100 / totalSlides)}%)`;

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => moveSlider(currentIndex + 1));
        prevBtn.addEventListener('click', () => moveSlider(currentIndex - 1));
    }

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => moveSlider(i));
    });

    setInterval(() => moveSlider(currentIndex + 1), 5000);


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
}
});

