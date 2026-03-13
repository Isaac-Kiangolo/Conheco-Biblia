// ===== QR Code =====
const qr = new QRious({
  element: document.getElementById('qrcode'),
  value: 'https://github.com/Isaac-Kiangolo/Conheco-Biblia/releases/download/v1.0.0.0/ConhecoBiblia.apk',
  size: 120,
   
  foreground: '#4364f7'
});

const elementos = document.querySelectorAll(".animar");

window.addEventListener("scroll", () => {

elementos.forEach(el => {

const pos = el.getBoundingClientRect().top;
const tela = window.innerHeight;

if(pos < tela - 100){
el.classList.add("show");
}

});

});

const links = document.querySelectorAll(".nav-link");

links.forEach(link => {

link.addEventListener("click", function(){

links.forEach(l => l.classList.remove("active"));

this.classList.add("active");

});

});

// ===== Dark Mode =====
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;
if(localStorage.getItem('theme') === 'dark'){
  body.classList.add('dark-mode');
  toggleBtn.textContent = '☀️';
}
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  toggleBtn.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
  localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// ===== Menu ativo ao scroll =====
const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if(pageYOffset >= sectionTop) current = section.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if(link.getAttribute('href') === '#' + current) link.classList.add('active');
  });
});

// ===== Versículo do Dia =====
let versiculos = document.querySelectorAll('.versiculo-card');
let versiculoIndex = 0;
setInterval(() => {
  versiculos[versiculoIndex].classList.remove('active');
  versiculoIndex = (versiculoIndex + 1) % versiculos.length;
  versiculos[versiculoIndex].classList.add('active');
}, 5000);

// ===== Carrossel Telas do App =====
const screensWrapper = document.querySelector('.screens-wrapper');
const screens = document.querySelectorAll('.screen-card');
const prevBtn = document.querySelector('.screens-carousel .prev');
const nextBtn = document.querySelector('.screens-carousel .next');
let screenIndex = 0;

function updateScreenCarousel() {
  screensWrapper.style.transform = `translateX(-${screenIndex * 100}%)`;
}

prevBtn.addEventListener('click', () => {
  screenIndex = (screenIndex - 1 + screens.length) % screens.length;
  updateScreenCarousel();
});

nextBtn.addEventListener('click', () => {
  screenIndex = (screenIndex + 1) % screens.length;
  updateScreenCarousel();
});

// Auto slide a cada 6 segundos
setInterval(() => {
  screenIndex = (screenIndex + 1) % screens.length;
  updateScreenCarousel();
}, 6000);