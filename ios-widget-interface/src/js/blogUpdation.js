const blogElement = document.querySelector("#blogUpdation");

const link = "https://blog.suphakit.net/atom.xml";

async function parser() {
  const data = await axios.get(link)
  let store

  const parser = new DOMParser()
  const xml = parser.parseFromString(data.data, 'text/xml')

  const feedReturnal = `<div class="feedContainer">
  <h1 style="text-decoration: underline;">
    Blog Updation
  </h1> 
  <ul id="feed">
    
  </ul>
</div>`;

  blogElement.innerHTML = feedReturnal;

  for (let i=1; i<4; i++) {
    let entry = xml.querySelectorAll('entry')[i]
    
    const data = {
      title: entry.children[0].innerHTML,
      link: entry.children[1].getAttribute('href'),
      date: entry.children[3].innerHTML
    }

    if (i == 1) {
      store = printPost(data);
    } else {
      store = store + printPost(data);
    }
  }

  const feedElement = document.querySelector('#feed')
  feedElement.innerHTML = store
}

function dayReversal(day) {
  const dayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return dayList[day];
}

function monthReversal(month) {
  const monthList = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return monthList[month];
}

function printPost(ent) {
  let date = new Date(ent.date);

  const template = `<li>
  <a href="${ent.link}" target="_blank" class="title">
    ${ent.title}
  </a>
  <p>
    ${dayReversal(date.getDay())}. ${monthReversal(
    date.getMonth()
  )} ${date.getDate()}, ${date.getFullYear()}
  </p>
</li>
`;

  return template;
}

parser()