// script.js

// Smooth Scroll
function scrollToSection(sectionId){
  const section = document.getElementById(sectionId);

  if(section){
    section.scrollIntoView({
      behavior:"smooth"
    });
  }
}

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  emailjs.send("service_opfi74z", "template_qchp3ty", {
    name:name,
    email:email,
    message:message
  })
  .then(() => {
    alert("Message sent successfully!");
    this.reset();
  })
  .catch((error) => {
    console.log(error);
    alert("Failed to send message.");
  });
});

// Fade-in Sections
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const position = section.getBoundingClientRect().top;

    if(position < window.innerHeight - 100){
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });
});

sections.forEach((section,index)=>{
  if(index !== 0){
    section.style.opacity = 0;
    section.style.transform = "translateY(50px)";
  }

  section.style.transition = "all 0.6s ease";
});
function toggleInfo(card){
const info = card.querySelector(".hidden-info");

if(info.style.display === "block"){
info.style.display = "none";
}else{
info.style.display = "block";
}
}