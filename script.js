// script.js
// This file handles interactivity for your portfolio

// =============================
// 🔹 Smooth Scroll to Projects
// =============================
function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
}

// =============================
// 🔹 Contact Form Handling
// =============================
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevents page reload

  // Get form values (only when form is submitted)
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Send email using EmailJS
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    name: name,
    email: email,
    message: message
  })
  .then(() => {
    alert("✅ Message sent successfully!");
    document.getElementById("contactForm").reset(); // clear form
  })
  .catch((error) => {
    console.error("Email error:", error);
    alert("❌ Failed to send message. Please try again.");
  });
});

// =============================
// 🔹 Scroll Animation (Fade In)
// =============================

// Select all sections
const sections = document.querySelectorAll("section");

// Run animation on scroll
window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const position = section.getBoundingClientRect().top;

    // If section is visible on screen
    if (position < window.innerHeight - 100) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });
});

// Set initial hidden state
sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(50px)";
  section.style.transition = "all 0.6s ease";
});