// Add this to initialize the circular progress bars
document.addEventListener('DOMContentLoaded', function() {
    const circles = document.querySelectorAll('.circle-progress');
    circles.forEach(circle => {
        const percent = circle.querySelector('.number').textContent;
        circle.style.setProperty('--target-percent', percent);
    });
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // stop normal redirect

  const form = this;
  const btn = document.getElementById("submitBtn");
  const success = document.getElementById("successMsg");
  const error   = document.getElementById("errorMsg");

  btn.disabled = true;
  btn.textContent = "Sending...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: new FormData(form)
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      success.style.display = "block";
      error.style.display = "none";
      form.reset();
      btn.textContent = "Sent!";
    } else {
      error.style.display = "block";
      success.style.display = "none";
      btn.textContent = "Try Again";
      btn.disabled = false;
    }
  })
  .catch(() => {
    error.style.display = "block";
    success.style.display = "none";
    btn.textContent = "Try Again";
    btn.disabled = false;
  });
});
