document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.primary-nav');
  if (toggle && nav) toggle.addEventListener('click', () => { nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', nav.classList.contains('open')); });
  const form = document.querySelector('#booking-form');
  if (form) form.addEventListener('submit', event => { event.preventDefault(); const message = form.querySelector('.form-message'); const name = form.elements.name.value.trim(); const email = form.elements.email.value.trim(); const date = form.elements.date.value; message.textContent = name && email && date ? `Thanks, ${name}. We’ll confirm your request shortly.` : 'Please add your name, email, and preferred date.'; });
});
