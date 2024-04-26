document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // This prevents the form from submitting the traditional way, which would cause a page reload.
    alert('Thank you for contacting us, ' + document.getElementById('name').value + '!'); // This shows an alert box thanking the user by name.
  });