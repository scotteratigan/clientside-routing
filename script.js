const contentDiv = document.querySelector('#content');

const routes = {
  "/index.html": `<p>This is the home page.</p>`,
  "/about.html": `<p>This demonstrates dynamic content. <a href="index.html">Back to home</a></p>`,
  "/mdn.html": `<a href="https://developer.mozilla.org/en-US/" target="_blank">MDN (normal link)</a>`,
}

function pushState(newUrl) {
  history.pushState('', '', [newUrl]);
  loadContent();
}

function loadContent() {
  const { pathname } = window.location;
  const htmlContent = routes[pathname];
  contentDiv.innerHTML = htmlContent;
}

function handleClick(e) {
  // capture all click events
  const { target } = e;
  const { customlink } = target.dataset;
  // do nothing if custom link property is not present:
  if (!customlink) return;
  // otherwise, prevent default navigation behavior:
  e.preventDefault();
  const newUrl = target.pathname;
  if (newUrl) pushState(newUrl)
}

document.addEventListener('click', handleClick);
window.onpopstate = loadContent;
loadContent();
