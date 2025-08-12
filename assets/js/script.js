
// Make sure Swiper is loaded before this script, e.g. via CDN or import
const swiper = new Swiper(".customerSwiper", {
  centeredSlides: true,
  loop: true,
  spaceBetween: 28,
  slidesPerView: 1.15,   // mobile'de yanlar görünsün
  speed: 650,
  grabCursor: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    640: { slidesPerView: 2.15, spaceBetween: 28 },
    1024: { slidesPerView: 3.15, spaceBetween: 32 }
  }
});


// Hamburger Menu
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');
const overlay = document.getElementById('menu-overlay');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');

function openMenu() {
  menu.classList.remove('-translate-x-full');
  menu.classList.add('translate-x-0');
  overlay.classList.remove('pointer-events-none', 'opacity-0');
  overlay.classList.add('opacity-100');
  document.body.classList.add('overflow-hidden');
  btn.setAttribute('aria-expanded', 'true');

  // Hamburger -> X dönüşümü
  bar1.classList.add('rotate-45', 'translate-y-[7px]');
  bar2.classList.add('opacity-0');
  bar3.classList.add('-rotate-45', '-translate-y-[7px]');
}

function closeMenu() {
  menu.classList.remove('translate-x-0');
  menu.classList.add('-translate-x-full');
  overlay.classList.add('opacity-0', 'pointer-events-none');
  overlay.classList.remove('opacity-100');
  document.body.classList.remove('overflow-hidden');
  btn.setAttribute('aria-expanded', 'false');

  // X -> Hamburger dönüşümü
  bar1.classList.remove('rotate-45', 'translate-y-[7px]');
  bar2.classList.remove('opacity-0');
  bar3.classList.remove('-rotate-45', '-translate-y-[7px]');
}

function toggleMenu() {
  const isOpen = btn.getAttribute('aria-expanded') === 'true';
  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
}

btn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', closeMenu);

// Linklere tıklayınca kapat
document.querySelectorAll('#mobile-menu [data-close]').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// ESC ile kapat
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});
// Hamburger Menu





