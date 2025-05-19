function toggleMenu() {
  const nav = document.getElementById('nav-links');
  nav.classList.toggle('active');
}

//To send to specific email
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = encodeURIComponent(document.getElementById('name').value.trim());
    const email = encodeURIComponent(document.getElementById('email').value.trim());
    const message = encodeURIComponent(document.getElementById('message').value.trim());

    if (!name || !email || !message) {
      document.getElementById('errorMsg').textContent = "All fields are required.";
      return;
    }

    const subject = `Message from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    window.location.href = `mailto:godwinluxuriousproperties@gmail.com?subject=${subject}&body=${body}`;
  });

//to elevate elements by 5px at entry
  document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('h1,h2,h3,h4,.gallery,.showcase,.contact-container,p',);

    const revealOnScroll = () => {
      const triggerBottom = window.innerHeight * 0.9;

      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < triggerBottom) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);
  });

//to expand images to fillscreen
const galleryImages = document.querySelectorAll('.gallery img, .showcase img');
  const fullscreen = document.getElementById('fullscreen');
  const fullscreenImg = document.getElementById('fullscreenImg');
  const closeBtn = document.getElementById('closeBtn');

  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      fullscreen.classList.add('active');
      fullscreenImg.src = img.src;
    });
  });

  closeBtn.addEventListener('click', () => {
    fullscreen.classList.remove('active');
    fullscreenImg.src = '';
  });

  fullscreen.addEventListener('click', (e) => {
    if (e.target !== fullscreenImg && e.target !== closeBtn) {
      fullscreen.classList.remove('active');
      fullscreenImg.src = '';
    }
  });
