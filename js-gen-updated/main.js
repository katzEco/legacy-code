// Created w/ 🤍 by Suphakit P. (https://suphait.net)

const dataInput = {
  title: document.querySelector('#title'),
  subTitle: document.querySelector('#subTitle'),
  copyright: document.querySelector('#copy')
}

const dataOutput = document.querySelector('main')
const styleSheet = document.createElement('style')

const style = `@import url(https://cdn.katsuragi.cyou/fonts/TH/LINEseed-Regular);

* {
  font-family: 'LINESeed-Regular', sans-serif;
}

body {
  width: 100%;
  height: 100vh;

  margin: 0;
  padding: 0;

  background: url(https://picsum.photos/1920/1080) no-repeat center;
  background-size: cover;
}

main {
  width: 100%;
  height: 100%;
}

.overlay {
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.6);
  color: whitesmoke;

  backdrop-filter: blur(5px);

  display: flex;
  flex-direction: row;

  align-items: center;
  text-align: center;
  justify-content: center;
}

.footer {
  width: 100%;
  background-color: whitesmoke;
  color: #2e2f2f;
  position: fixed;
  bottom: 0;
  padding: 1.5rem 0;
}

.footer a {
  color: #2e2f2f;
  transition: all .3s;
}

.footer a:hover {
  opacity: .6;
  text-decoration: none;
}

#title, #subTitle, #copy {
  display: none;
}`

styleSheet.innerHTML = style
document.head.appendChild(styleSheet)

// Set all about over layer
const overlay = document.createElement('div')
overlay.classList.add('overlay')

// Text Box Appeared
const textBox = document.createElement('div')
textBox.classList.add('textBox')

// Inside text will come here :)
const heading = document.createElement('h1')
heading.innerHTML = dataInput.title.innerHTML

const subHeading = document.createElement('p')
subHeading.innerHTML = dataInput.subTitle.innerHTML

// Now Footer!
const footer = document.createElement('div')
footer.classList.add('footer')
footer.innerHTML = dataInput.copyright.innerHTML

// This is Called out!
dataOutput.appendChild(overlay)
overlay.appendChild(textBox)
overlay.appendChild(footer)

// Text Box insider call!
textBox.appendChild(heading)
textBox.appendChild(subHeading)

// Set Title
document.title = dataInput.title.innerHTML