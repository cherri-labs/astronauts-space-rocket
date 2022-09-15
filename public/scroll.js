window.onscroll = function() {
  const y = window.pageYOffset;
  const h = window.innerHeight;
  const yp = y*100/h;

  if (y < h) { /* first  page */
    document.getElementById("header").style.top = "-100px";
    document.getElementById("header").style.opacity = "0.8";
    document.getElementById("footer").style.bottom = "-100px";
    document.getElementById("footer").style.opacity = "0.8";
    document.getElementById("icons").style.opacity = "0";
    document.getElementById("icons").style.visibility = "hidden";
    document.getElementById("icons").style.bottom = "-10px";

    document.getElementById("welcome").style.top = 50 - yp/25 + "%";
  } else { /* after first page */
    document.getElementById("header").style.top = "0px";
    document.getElementById("header").style.opacity = "1";
    document.getElementById("footer").style.bottom = "0";
    document.getElementById("footer").style.opacity = "1";
    document.getElementById("icons").style.opacity = "1";
    document.getElementById("icons").style.visibility = "visible";
    document.getElementById("icons").style.bottom = "0";

    document.getElementById("welcome").style.top = "50%";
  }
}
