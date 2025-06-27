document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('form-status');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (name === '' || email === '' || message === '') {
      status.textContent = 'Please fill in all fields.';
      status.style.color = 'red';
      return;
    }

    // Simulate successful form submission
    status.textContent = 'Thank you! Your message has been sent.';
    status.style.color = 'green';
    form.reset();
  });
});
// This script handles the contact form submission
// It validates the input fields and simulates a successful submission