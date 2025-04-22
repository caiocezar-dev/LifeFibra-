// script.js para LifeFibra+

// Banner Slider Automático e Manual
let slideIndex = 0;
const slides = document.querySelectorAll(".banner .slide");
const prevBanner = document.querySelector(".banner .prev");
const nextBanner = document.querySelector(".banner .next");

function showSlides() {
  slides.forEach(slide => slide.style.display = "none");
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex - 1].style.display = "block";
}

function changeSlide(n) {
  slideIndex += n - 1;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  if (slideIndex >= slides.length) slideIndex = 0;
  slides.forEach(slide => slide.style.display = "none");
  slides[slideIndex].style.display = "block";
}

if (prevBanner && nextBanner) {
  prevBanner.addEventListener("click", () => changeSlide(-1));
  nextBanner.addEventListener("click", () => changeSlide(1));
}

setInterval(showSlides, 5000);

// Planos Slider Automático e Manual
let planoIndex = 0;
const planos = document.querySelectorAll(".planos-slider .plano-slide");
const prevPlano = document.querySelector(".planos-slider .prev");
const nextPlano = document.querySelector(".planos-slider .next");

function showPlanos() {
  planos.forEach(plano => plano.classList.remove("active"));
  planoIndex++;
  if (planoIndex > planos.length) {planoIndex = 1}
  planos[planoIndex - 1].classList.add("active");
}

function changePlano(n) {
  planoIndex += n - 1;
  if (planoIndex < 0) planoIndex = planos.length - 1;
  if (planoIndex >= planos.length) planoIndex = 0;
  planos.forEach(plano => plano.classList.remove("active"));
  planos[planoIndex].classList.add("active");
}

if (prevPlano && nextPlano) {
  prevPlano.addEventListener("click", () => changePlano(-1));
  nextPlano.addEventListener("click", () => changePlano(1));
}

setInterval(showPlanos, 5000);

// FAQ - Dúvidas Frequentes com Animação
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(question => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      answer.style.padding = "0 15px";
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      answer.style.padding = "15px";
    }
  });
});

// Menu Mobile - Botão Hamburguer
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    navigation.classList.toggle("active");
  });
}

// Inicialização inicial dos sliders
showSlides();
showPlanos();