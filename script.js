function addToCart(pickle) {
  alert(`${pickle} has been added to your order!`);
}

const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const order = document.getElementById('order').value;

  alert(`Thank you, ${name}! Your order for ${order} has been received. We'll contact you at ${email}.`);
  form.reset();
});
