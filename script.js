// script.js
// This file handles all interactivity

// Scroll to projects section when button is clicked
function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
}

// Handle contact form submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  })
  .then(() => {
    alert("Message sent successfully!");
  })
  .catch((error) => {
    console.log(error);
    alert("Failed to send message.");
  });
});

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // For now, just log it (later we connect backend)
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  alert("Message sent successfully!");

  // Reset form
  this.reset();
});
// Fade-in animation when scrolling

const sections = document.querySelectorAll("section");

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

// Initial hidden state
sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(50px)";
  section.style.transition = "all 0.6s ease";
});