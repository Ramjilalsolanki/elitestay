// Simple contact form interaction
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! We’ll get back to you soon.");
    this.reset();
  });
  