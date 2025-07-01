document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  // Normally here we could send data to server
  console.log("Form submitted:", {
    name: this.name.value,
    email: this.email.value,
    message: this.message.value,
  });
  // Clear form inputs after submit
  this.reset();
});
