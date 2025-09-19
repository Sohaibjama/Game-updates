// Ad link (always same)
const adLink ="https://virtualflashy.com/py50wtx4?key=9629d5c2057e2d27f9c8dd31f5f90e22";

// Mapping buttons → target pages
const buttonRedirects = {
  btn1: "index2.html",
  btn2: "index3.html",
  btn3: "index.html",
  btn4: "index3.html",
  btn5: "index2.html",
};

// Attach listeners dynamically
Object.keys(buttonRedirects).forEach(btnId => {
  const btn = document.getElementById(btnId);
  if (btn) {
    btn.addEventListener("click", function(e) {
      e.preventDefault();

      // Open ad in new tab
      window.open(adLink, "_blank");

      // Redirect current tab after 2s
      setTimeout(function() {
        window.location.href = buttonRedirects[btnId];
      }, 1000);
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("article, p, h2, h3, h4");
  
  // hide them first
  elements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
  });
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.1 });
  
  elements.forEach(el => observer.observe(el));
});