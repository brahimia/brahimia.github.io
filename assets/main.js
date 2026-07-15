/* Mobile nav toggle */
const navToggle = document.getElementById('navToggle');
const navList = document.querySelector('.navmenu ul');
navToggle.addEventListener('click', () => {
  const isOpen = navList.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});
navList.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  });
});

/* Typed role rotator */
const roles = [
  'Postdoctoral Researcher',
  'Data Scientist',
  'Policy Analyst',
  'UX Researcher',
  'Responsible AI Advocate'
];
const typedEl = document.getElementById('typed');
let roleIndex = 0, charIndex = 0, deleting = false;

function typeLoop(){
  const current = roles[roleIndex];
  if(!deleting){
    charIndex++;
    typedEl.textContent = current.slice(0, charIndex);
    if(charIndex === current.length){
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    charIndex--;
    typedEl.textContent = current.slice(0, charIndex);
    if(charIndex === 0){
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(typeLoop, deleting ? 40 : 70);
}
typeLoop();

/* Publication filters */
const filterBtns = document.querySelectorAll('.filter-btn');
const pubCards = document.querySelectorAll('.pub-card');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    pubCards.forEach(card => {
      const show = filter === 'all' || card.dataset.cat === filter;
      card.hidden = !show;
    });
  });
});

/* Animate skill bars when in view */
const skillFills = document.querySelectorAll('.skill-fill');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const el = entry.target;
      el.style.width = el.style.width; // triggers transition from CSS-set width
      skillObserver.unobserve(el);
    }
  });
}, { threshold: 0.3 });
skillFills.forEach(el => {
  const target = el.style.width;
  el.style.width = '0%';
  el.dataset.target = target;
});
const skillObserver2 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.width = entry.target.dataset.target;
      skillObserver2.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
skillFills.forEach(el => skillObserver2.observe(el));

/* Active nav link on scroll */
const sections = document.querySelectorAll('main section[id]');
const navAnchors = document.querySelectorAll('.navmenu a');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      navAnchors.forEach(a => a.classList.remove('active'));
      const activeLink = document.querySelector(`.navmenu a[href="#${entry.target.id}"]`);
      if(activeLink) activeLink.classList.add('active');
    }
  });
}, { threshold: 0.4 });
sections.forEach(sec => sectionObserver.observe(sec));
