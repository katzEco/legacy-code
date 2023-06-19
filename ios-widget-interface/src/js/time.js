const timeElement = document.querySelector('#time')

const timeUpdate = setInterval(function () {
  const currentTime = new Date().getTime() - 1686762000000

  let hour = Math.floor((currentTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let min = Math.floor((currentTime % (1000 * 60 * 60)) / (1000 * 60)).toString()
  let sec = Math.floor((currentTime % (1000 * 60)) / 1000)

  const timeCounting = `<h1>
  ${hour}
</h1>
<h1 style="transform: rotate(90deg);">
  ${((sec % 2) != 0) ? ':' : '&nbsp;'}
</h1>
<h1>
  ${(min < 2) ? `0${min}` : min}
</h1>`

  timeElement.innerHTML = timeCounting
}, 1000)