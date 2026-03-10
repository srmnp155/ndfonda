// Simple form handler for demonstration
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    formMessage.textContent = 'Thank you for your message! (Demo only, no backend)';
    form.reset();
    formMessage.style.color = '#0077ff';
    setTimeout(() => {
      formMessage.textContent = '';
    }, 4000);
  });
}
