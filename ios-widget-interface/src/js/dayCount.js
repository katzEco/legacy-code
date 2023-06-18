const bDayElement = document.querySelector('#bDayLeft')
const relaDayElement = document.querySelector('#relaDayLeft')

function bDay() {
  const date = 'June 15, ' + (new Date().getFullYear()) + ' 02:17'
  const datePlus = 'June 15, ' + (new Date().getFullYear() + 1) + ' 02:17'
  const calDate = ((new Date(date).getTime() - new Date().getTime()) >= 0) ? date : datePlus
  const timeStamp = new Date(calDate).getTime()

  let x = setInterval(function () {
    const currentTime = new Date().getTime()
    const diff = timeStamp - currentTime
    const day = Math.floor(diff / (1000 * 60 * 60 * 24))

    let returnItem

    if (day > 0) {
      returnItem = `<h2>
  ${day}
</h2>
<p>
  ${(day > 1) ? 'Days Left' : 'Day Left!'}
</p>`
    } else if (day == 0) {
      returnItem = `<h2>Today!!</h2>`
    } else {
      returnItem = '<h2>undefined</h2>'
    }

    bDayElement.innerHTML = returnItem
  }, 1000)
}

function relaDay() {
  // const date = 'June 15, ' + (new Date().getFullYear()) + ' 02:17'
  // const datePlus = 'June 15, ' + (new Date().getFullYear() + 1) + ' 02:17'
  const date = 0
  const datePlus = 0
  const calDate = ((new Date(date).getTime() - new Date().getTime()) >= 0) ? date : datePlus
  const timeStamp = new Date(calDate).getTime()

  let x = setInterval(function () {
    const currentTime = new Date().getTime()
    const diff = timeStamp - currentTime
    const day = Math.floor(diff / (1000 * 60 * 60 * 24))

    let returnItem

    if (day > 0) {
      returnItem = `<h2>
  ${day}
</h2>
<p>
  ${(day > 1) ? 'Days Left' : 'Day Left!'}
</p>`
    } else if (day == 0) {
      returnItem = `<h2>Today!!</h2>`
    } else {
      returnItem = '<h2>Not now :)</h2>'
    }

    relaDayElement.innerHTML = returnItem
  }, 1000)
}

bDay()
relaDay()