function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}
// Navbar shadow on scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";
  } else {
    nav.style.boxShadow = "none";
  }
});

// brojac za sekviju about

document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll('.count');

  const runCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const duration = 3200; // trajanje animacije u ms
    const stepTime = Math.abs(Math.floor(duration / target));

    const timer = setInterval(() => {
      count++;
      counter.innerText = count;

      if (count >= target) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  const options = {
    root: null,
    threshold: 0.4,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counters.forEach(counter => runCounter(counter));
        observer.unobserve(entry.target);
      }
    });
  }, options);

  const about = document.getElementById('about');
  observer.observe(about);
});

//HAMBURGER MENI
document.addEventListener("DOMContentLoaded", () => {

  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (!hamburger || !navLinks) return;

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links li").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });

});