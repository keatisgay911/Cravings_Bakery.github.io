function addToCart(itemName) {
  const cartList = document.getElementById("cart-items");

  // Create new list item
  const li = document.createElement("li");
  li.textContent = itemName;

  // Add animation
  li.style.opacity = 0;
  li.style.transform = "translateX(-20px)";
  setTimeout(() => {
    li.style.transition = "all 0.3s ease";
    li.style.opacity = 1;
    li.style.transform = "translateX(0)";
  }, 10);

  cartList.appendChild(li);
}
// Responsive nav toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Optional: Close menu when link is clicked
document.querySelectorAll('.nav-links li a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});
// script.js
const cards = document.querySelectorAll('.cupcake-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.1
});

cards.forEach(card => observer.observe(card));