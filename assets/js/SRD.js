// Form
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.reset();
  });
});
// Form


    // Butonu seç
    const scrollToTopButton = document.getElementById('scrollToTop');

    // Scroll olayı dinleyicisi
    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollToTopButton.style.display = 'block'; // Görüntüle
        } else {
            scrollToTopButton.style.display = 'none'; // Gizle
        }
    });

    // Butona tıklandığında yukarı kaydır
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({top: 0, behavior: 'smooth'}); // Yavaşça yukarı kaydır
    });

