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
});// --- MOBILE MENU TOGGLE LOGIC ---
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon i');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('#nav-links li a');

    // Toggle menu when clicking the hamburger icon
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Change icon from bars to an 'X'
        if (navLinks.classList.contains('active')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
        } else {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    });

    // Automatically close the menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        });
    });
});
