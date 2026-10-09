/* =========================
   ハンバーガーメニュー
========================= */

const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
});
/* =========================
   スクロールでふわっと表示
========================= */

const fadeElements = document.querySelectorAll(".fade-in");

const fadeInOnScroll = () => {

    fadeElements.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add("show");
        }

    });

};

window.addEventListener("scroll", fadeInOnScroll);

fadeInOnScroll();
/* =========================
   お問い合わせフォーム
========================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        alert("お問い合わせありがとうございます。\n入力内容を確認しました。");

        contactForm.reset();
    });
}

/* トップページの背景スライドショー */
const slides = document.querySelectorAll(".hero-slide");

if (slides.length > 0) {
    const images = [
        "image/top-bg.png",
        "image/slide2.png",
        "image/slide3.png"
    ];

    let currentSlide = 0;

    slides.forEach((slide, index) => {
        slide.style.backgroundImage = `url("${images[index]}")`;
    });

    setInterval(() => {
        slides[currentSlide].classList.remove("active");

        currentSlide = (currentSlide + 1) % slides.length;

        slides[currentSlide].classList.add("active");
    }, 5000);
}