function pushState(newUrl) {
  history.pushState('', '', [newUrl]);
  render();
}

function handleClick(e) {
  const { target } = e;
  const { customlink } = target.dataset;
  if (!customlink) return;
  e.preventDefault();
  const newUrl = target.pathname;
  if (newUrl) pushState(newUrl)
}

// A specific function to render each component:
function renderHome() {
  return `<p>This is the home page.</p>` + renderNavbar();
}

function renderAbout() {
  return `<p>This demonstrates dynamic content. <a href="index.html">Back to home</a></p>` + renderNavbar();
}

function renderMDN() {
  return `<p>Check out the MDN docs: <a href="https://developer.mozilla.org/en-US/" target="_blank">MDN (normal link)</a></p>` + renderNavbar();
}

function render404() {
  return `<p>Error, page not found.</p>` + renderNavbar();
}

function renderNavbar() {
  const navbarLinks = [
    { href: 'index.html', text: 'Home' },
    { href: 'about.html', text: 'About' },
    { href: 'mdn.html', text: 'MDN' },
    { href: 'badurl1.html', text: 'Bad Url 1' },
    { href: 'badurl2.html', text: 'Bad Url 2' },
  ];
  return navbarLinks.map(renderLink).join(' | ');
}

function renderLink(link) {
  const { href, text } = link;
  return `<a href="${href}" data-customlink="true">${text}</a>`;
}

// Generic render function uses the router to determine which content to load:
function render() {
  const { pathname } = window.location;
  const htmlContent = router(pathname)
  contentDiv.innerHTML = htmlContent;
}

// The router is really just a series of conditional checks:
function router(route) {
  switch (route) {
    case '/index.html':
      return renderHome();
    case '/about.html':
      return renderAbout();
    case '/mdn.html':
      return renderMDN();
    default:
      return render404();
  }
}

const contentDiv = document.querySelector('#content');
document.addEventListener('click', handleClick);
window.onpopstate = render;
render();
