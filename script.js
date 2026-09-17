const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('[data-nav-links]');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? '关闭导航' : '打开导航');
  });

  navLinks.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navLinks.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', '打开导航');
    }
  });
}

const header = document.querySelector('.site-header');

if (header) {
  const updateHeader = () => {
    header.style.boxShadow = window.scrollY > 12 ? '0 10px 30px rgba(23, 32, 42, 0.08)' : 'none';
  };

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
}
