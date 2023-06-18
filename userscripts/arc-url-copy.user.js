// ==UserScript==
// @name         Arc Link Copy
// @namespace    https://suphakit.net
// @version      1.0.0
// @description  make ur life easier like u used arc browser
// @author       dethz
// @icon         https://i.imgur.com/wOb7Z4y.png
// @include http://*/*
// @include https://*/*
// @grant    GM_setClipboard
// ==/UserScript==

(function() {
  'use strict';

  window.addEventListener('keydown', (event) => {
      if (event.code === 'KeyC' && event.metaKey && event.shiftKey) {
          GM_setClipboard (window.location.href)
          // alert('copied url to ur clipboard :)')
          alert('URL Copied!')
      }
  });
})();