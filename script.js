const pushState = () => {
  history.pushState('', '', ['somenewurl.html']);
}

// Show the function in the <pre> tag on the page:
document.querySelector("#code").textContent = pushState.toString();