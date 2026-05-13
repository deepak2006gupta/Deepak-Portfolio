const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
const revealElements = document.querySelectorAll('.reveal');
const toTopButton = document.getElementById('toTop');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealElements.forEach((element) => observer.observe(element));

const toggleToTopButton = () => {
  toTopButton.classList.toggle('visible', window.scrollY > 320);
};

toggleToTopButton();
window.addEventListener('scroll', toggleToTopButton, { passive: true });

toTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea[name="message"]').value;
  
  const subject = `Portfolio Contact: Message from ${name}`;
  const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
  
  const mailtoLink = `mailto:2400030550cse1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  window.location.href = mailtoLink;
  formNote.textContent = 'Opening your email client...';
});
