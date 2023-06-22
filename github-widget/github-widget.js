const head = document.head;
const body = document.body;

function github(link) {
  const styleElement = document.createElement("link");
  styleElement.setAttribute('rel', 'stylesheet')
  styleElement.setAttribute('href', 'https://cdn.jsdelivr.net/gh/katzEco/legacy-code/github-widget/src/css/widget.css')
  head.appendChild(styleElement);

  const widget = document.createElement("a");
  widget.classList.add("github");
  body.appendChild(widget);

  const widgetGH = document.querySelector(".github");

  widgetGH.setAttribute("href", `https://github.com/${link}`);
  widgetGH.setAttribute("target", `_blank`);
  widgetGH.innerHTML = `<img src="https://raw.githubusercontent.com/katzEco/legacy-code/main/github-widget/src/image/github.svg" alt="logo"> <p>${link}</p>`;
}
