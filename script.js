const contentDiv = document.querySelector('#content');

const pushState = () => {
  history.pushState('', '', ['somenewurl.html']);
  loadContent();
}

const loadContent = () => {
  const { pathname } = window.location;
  contentDiv.textContent = `The pathname is ${pathname}`;
}
