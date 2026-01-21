// =======================================
// DOCUMENT READY - زرار التكبير عند hover
// =======================================
document.addEventListener("DOMContentLoaded", () => {
  console.log("Youssef Sapry Portfolio Loaded");

  const buttons = document.querySelectorAll(".btn");

  buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
      btn.style.transform = "scale(1.05)";
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "scale(1)";
    });
  });
});


// =======================================
// ABOUT SECTION SCROLL ANIMATION
// =======================================
const aboutSection = document.querySelector(".about");

window.addEventListener("scroll", () => {
  const sectionTop = aboutSection.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight - 150;

  if (sectionTop < triggerPoint) {
    aboutSection.style.opacity = "1";
    aboutSection.style.transform = "translateY(0)";
  }
});
