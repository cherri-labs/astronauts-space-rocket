/* enter fullscreen */
export function openFullscreen(elem = document.documentElement) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* exit fullscreen */
export function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}

/* toggle fullscreen */
export default function toggleFullscreen(elem = document.documentElement) {
  if (!document.fullscreenElement && // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement) { // current working methods
    openFullscreen(elem);
  } else {
    closeFullscreen();
  }
}
