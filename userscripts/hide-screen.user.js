// ==UserScript==
// @name         katz hide user screen
// @namespace    https://suphakit.net/
// @version      0.1
// @description  i just need to hide what am i watching
// @author       dethz
// @icon         https://i.imgur.com/wOb7Z4y.png
// @include http://*/*
// @include https://*/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  window.addEventListener("keydown", (event) => {
    if (event.code === "KeyD" && event.altKey && event.shiftKey) {
      if (!document.querySelector("#dethz-blocked")) {
        let call = document.querySelector("body");
        const Temp = call.innerHTML;
        call.innerHTML = `<div style="width: 100%; height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; flex-direction: row;"><h1 class="text-5xl font-bold">Blocked</h1></div><div id="dethz-blocked" style="display: none;">${Temp}</div>`;
      } else {
        let backupData = document.querySelector("#dethz-blocked").innerHTML;
        document.querySelector("body").innerHTML = backupData;
      }
    }
  });
})();
