const spotifyElement = document.querySelector("#spotify");
const statusElement = document.querySelector('#discord');
const customElement = document.querySelector('#discordStatus')

const userID = '298415109359796234';

async function lanyardPull() {
  const axiosSetup = await axios.get(
    `https://api.lanyard.rest/v1/users/${userID}`
  );
  const resp = axiosSetup.data.data;

  const spotifyBox =
    resp.listening_to_spotify == false
      ? null
      : {
          trackLink: `https://open.spotify.com/track/${resp.spotify.track_id}`,
          song: resp.spotify.song,
          artist: resp.spotify.artist,
          album: resp.spotify.album,
          albumArt: resp.spotify.album_art_url,
        };
  
  const customStatus = (resp.activities[0].name != 'Custom Status') ? 'Got no custom status now :(' : resp.activities[0].state

  const API = {
    listen: resp.listening_to_spotify,
    spotify: spotifyBox,
    status: resp.discord_status,
    avatarImage: `https://cdn.discordapp.com/avatars/${resp.discord_user.id}/${resp.discord_user.avatar}.webp?size=4096`,
    customStatus: customStatus
  };

  return API;
}

async function spotifyFetch() {
  const nullData = {
    trackLink:
      "https://open.spotify.com/playlist/6bI3PM9r7Le8zxI8VPoAoI?si=1b0e5787617b4f83",
    album: "",
    albumArt:
      "https://i.scdn.co/image/ab67706c0000bebb95556cc85c970affbf12461a",
    artist: `slpy guy's lo-fi playlist`,
    song: "Lo-Fi Recreation",
  };

  // const API = await lanyardPull();
  // const spotifyAPI = API.spotify

  // Mocking
  const API = {
    listen: false,
  };

  if (API.listen != true) {
    spotifyElement.setAttribute(
      "style",
      `background-color: #33ba53; background-image: url(${nullData.albumArt}) !important; grid-column: span 4 / span 4; padding: 0 !important;`
    );
    spotifyElement.setAttribute("href", nullData.trackLink);
    spotifyElement.setAttribute("target", "_blank");
    spotifyElement.innerHTML = `<div class="overlay" style="border-radius: 1rem;">
      <div class="textContainer">
        <h2 style="margin: .5rem 0;">
          ${nullData.song}
        </h2>
        <p>
          ${nullData.artist}
        </p>
      </div>
      </div>`;
  } else {
    spotifyElement.setAttribute(
      "style",
      `background-color: #33ba53; background-image: url(${spotifyAPI.albumArt}) !important; grid-column: span 4 / span 4; padding: 0 !important;`
    );
    spotifyElement.setAttribute("href", spotifyAPI.trackLink);
    spotifyElement.setAttribute("target", "_blank");
    spotifyElement.innerHTML = `<div class="overlay" style="border-radius: 1rem;">
      <div class="textContainer">
        <h2 style="margin: .5rem 0;">
          ${spotifyAPI.song}
        </h2>
        <p>
          ${spotifyAPI.artist}
        </p>
      </div>
      </div>`;
  }
}

async function discordStatus() {
  const discordAPI = await lanyardPull();

  // const discordAPI = {
  //   status: 'dnd',
  //   avatarImage: ''
  // }

  let statusReturn

  switch (discordAPI.status) {
    case 'online':
      statusReturn = 'Online'
      break;

    case 'idle':
      statusReturn = 'Idle'
      break;

    case 'dnd':
      statusReturn = 'Do Not Disturb'
      break;
  
    default:
      statusReturn = 'Offline'
      break;
  }

  statusElement.setAttribute('style', `background: url(${discordAPI.avatarImage}); grid-column: span 5 / span 5; padding: 0;`)
  statusElement.innerHTML = `<div class="overlay ${discordAPI.status}" style="border-radius: 1rem;">
  <div class="discordContainer" >
    <div class="imgContainer">
      <img src="src/img/discord.svg" alt="discord">
    </div>
    <div class="textContainer">
      <p style="text-decoration: underline;">
        Discord Status
      </p>
      ${(discordAPI.status == 'dnd') ? `<h2>${statusReturn}</h2>` : `<h1>${statusReturn}</h1>`}
    </div>
  </div>
</div>`
}

async function customStatus() {
  const discordAPI = await lanyardPull();

  customElement.innerHTML = `<div class="overlay" style="border-radius: 1rem;">
  <div class="discordContainer">
    <div class="textContainer" style="width: 100%;">
      <p style="text-decoration: underline; margin-bottom: 1rem;">
        Discord custom status
      </p> 
      <p>
        ${discordAPI.customStatus}
      </p>
    </div>
  </div>
</div>`
}

spotifyFetch();
discordStatus();
customStatus();

const spotifyData = setInterval(async function () {
  await spotifyFetch();
}, 5000);
