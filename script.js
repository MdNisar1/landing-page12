// Mobile menu toggle
const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");
if (toggle && links) {
  toggle.addEventListener("click", () => {
    links.classList.toggle("open");
  });
}

// Simple page-level interactions
document.addEventListener("DOMContentLoaded", () => {
  // CTA click demo
  document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", () => {
      console.log(`Clicked: ${btn.textContent.trim()}`);
    });
  });

  // Newsletter form (on blog page) demo
  const form = document.querySelector("#newsletter-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = form.querySelector("input[type='email']").value.trim();
      if (!email) {
        alert("Please enter your email.");
        return;
      }
      alert(`Thanks for subscribing, ${email}!`);
      form.reset();
    });
  }

  // Contact form demo validation
  const contact = document.querySelector("#contact-form");
  if (contact) {
    contact.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = contact.querySelector("[name='name']").value.trim();
      const email = contact.querySelector("[name='email']").value.trim();
      const msg = contact.querySelector("[name='message']").value.trim();
      if (!name || !email || !msg) {
        alert("Fill all fields.");
        return;
      }
      alert("Message sent! We'll get back to you soon.");
      contact.reset();
    });
  }
});