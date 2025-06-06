// Scroll-based rotation animation
let rotated = false;
window.addEventListener('scroll', () => {
  const speaker = document.getElementById('speaker');
  const speakerPos = speaker.getBoundingClientRect();

  if (!rotated && speakerPos.top >= 0 && speakerPos.bottom <= window.innerHeight) {
    speaker.classList.add('rotate');
    rotated = true;
  }
});

// Dark mode toggle
const toggleDark = document.getElementById('toggleDark');
toggleDark.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you! We have received your message.');
  contactForm.reset();
});