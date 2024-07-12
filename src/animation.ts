export function initializeObserver() {
  console.log("initializeObserver");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    });
    const elements = document.querySelectorAll('[class*="anim"]');

    elements.forEach(element => {
      observer.observe(element);
    });
  }
  