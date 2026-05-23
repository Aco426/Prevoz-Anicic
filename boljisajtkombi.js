function scrollToSection(id) {
  const target = document.getElementById(id);
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}


window.addEventListener("scroll", () => {
  const header = document.querySelector('.page-header');
  if (!header) return;
  if (window.scrollY > 30) {
    header.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.25)';
  } else {
    header.style.boxShadow = 'none';
  }
});


function initCounters() {
  const counters = document.querySelectorAll('.count');
  if (!counters.length) return;


  const runCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const duration = 2500;
    const stepTime = Math.max(Math.floor(duration / target), 20);


    const timer = setInterval(() => {
      count++;
      counter.innerText = count;
      if (count >= target) {
        clearInterval(timer);
      }
    }, stepTime);
  };


  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counters.forEach(counter => runCounter(counter));
        observer.disconnect();
      }
    });
  }, { threshold: 0.4 });


  observer.observe(counters[0]);
}


function initHamburger() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (!hamburger || !navLinks) return;


  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });


  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
}


window.addEventListener('DOMContentLoaded', () => {
  initCounters();
  initHamburger();
});

