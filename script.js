 // Ad link
const adLink = "https://virtualflashy.com/mta44zsw?key=c3759a44256c5bfc7ab104a93478c66e";

// Your content page (after ad)
const blogLink = "index 2.html"; // or "index.html" if you want to go back to homepage

document.getElementById("gtaButton").addEventListener("click", function(e) {
  e.preventDefault();

  // Open the ad in a NEW tab
  window.open(adLink, "_blank");

  // After 2 seconds, redirect THIS tab to your content page
  setTimeout(function() {
    window.location.href = blogLink;
  }, 2000);
})