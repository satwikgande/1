function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function toggleMenu() {
  const nav = document.querySelector(".nav");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

function validateForm() {
  alert("Message submitted successfully!");
  return false;
}

/* Reveal animation */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
