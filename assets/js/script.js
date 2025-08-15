
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








// ===== ScrollReveal 
const sr = ScrollReveal({
  distance: '28px',
  duration: 800,
  easing: 'cubic-bezier(.2,.65,.3,1)',
  interval: 80,
  cleanup: true,
  viewOffset: { top: 80, right: 0, bottom: 0, left: 0 }
});

// Başlık & paragraf girişleri
sr.reveal('#Introduction h2, #Introduction h3, #why h1, #hoWeSolve h1, #sliderCompanySection h1, #sdgGoals h1, #ourTeam h1, #contact h2', {
  origin: 'bottom'
});
sr.reveal('#Introduction p, #why p, #hoWeSolve p, #sdgGoals p, #ourTeam p, #contact .text-[#006c8b]/90', {
  origin: 'bottom'
});

// Görsel + metin blokları
sr.reveal('#Introduction .container .flex-1:first-child', { origin: 'left' });
sr.reveal('#Introduction .container .flex-1:last-child', { origin: 'right' });
sr.reveal('#Introduction .container:nth-of-type(2) .flex-1:first-child', { origin: 'right' });
sr.reveal('#Introduction .container:nth-of-type(2) .flex-1:last-child', { origin: 'left' });

// “Why / Problems / Features” kartları
sr.reveal('#why .container > div, #problems .container > div, #hoWeSolve .container > div, #sdgGoals .grid > div', {
  origin: 'bottom',
  interval: 90,
  beforeReveal: el => el.classList.add('card-float')
});

// Partner & Advisor logoları
sr.reveal('#sliderCompanySection article > div > div', { origin: 'bottom', interval: 80 });

// Team kartları
sr.reveal('#ourTeam .grid > div', { origin: 'bottom', interval: 80 });

// Milestones satırları
sr.reveal('#milestones li', { origin: 'left', interval: 70 });

// Contact sütunları
sr.reveal('#contact .grid > *', { origin: 'bottom', interval: 120 });

// ===== HERO – 
(function () {
  const img = document.querySelector('#hero .hero-bg img');
  if (!img) return;
  let latestY = 0, ticking = false;

  function onScroll() {
    latestY = window.scrollY || window.pageYOffset;
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const translate = Math.min(latestY * 0.15, 120); // 0.15 oranlı parallax, max 120px
        const scale = 1.05 + Math.min(latestY / 4000, 0.07); // scroll ile çok hafif ekstra zoom
        img.style.transform = `translateY(${translate}px) scale(${scale})`;
        ticking = false;
      });
      ticking = true;
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
})();

// ===== Swiper 
(function () {
  if (typeof Swiper === 'undefined') return;
  if (document.querySelector('.customerSwiper')) {
    if (!document.querySelector('.customerSwiper').swiper) {
      new Swiper('.customerSwiper', {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        autoplay: { delay: 3500, disableOnInteraction: false },
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        breakpoints: {
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 }
        }
      });
    }
  }
})();
