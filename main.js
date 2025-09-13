// Ad link (always same)
const adLink = "https://virtualflashy.com/mta44zsw?key=c3759a44256c5bfc7ab104a93478c66e";

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