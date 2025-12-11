document.addEventListener ('sectionsLoaded', () => {
  gsap.registerPlugin (ScrollTrigger);

  // Intro animation timeline.
  //
  const tl = gsap.timeline ();

  tl.from ('.logo', {
    y: -20,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  })

  .from ('.status-indicator', {
    y: -20,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.6')

  .from ('.mono-label', {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.4')

  .from ('.line span', {
    yPercent: 100,
    duration: 1,
    stagger: 0.1,
    ease: 'power4.out'
  }, '-=0.6')

  .from ('.hero-desc', {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.4')

  .from ('.waitlist-form', {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.6');

  // Handle waitlist form submission.
  //
  const form = document.getElementById ('waitlist-form');
  if (form)
  {
    form.addEventListener ('submit', (e) => {
      e.preventDefault ();

      const input = form.querySelector ('input[type="email"]');
      const email = input.value;

      const button = form.querySelector ('.btn-primary');
      const originalText = button.querySelector ('span').textContent;

      button.querySelector ('span').textContent = 'JOINED!';
      button.style.background = 'var(--accent)';

      setTimeout (() => {
        button.querySelector ('span').textContent = originalText;
        button.style.background = '';
        input.value = '';
      }, 2000);
    });
  }
});
