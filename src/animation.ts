export function initializeObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log('intersecting', entry.target)
        entry.target.classList.add('animate')
        observer.unobserve(entry.target)
      }
    })
  })

  const elements = document.querySelectorAll('[class*="anim"]')
  elements.forEach((element) => {
    observer.observe(element)
    element.addEventListener(
      'animationend',
      () => {
        element.classList.remove('animate')
        element.classList.add('visible')
      },
      { once: true }
    )
  })
}
