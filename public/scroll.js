window.onscroll = function() {
  const y = window.pageYOffset;
  const h = window.innerHeight;
  const yp = y*100/h;

  if (y < h*3/4) { /* first three quarters of the page */
    document.getElementById("header").style.top = "-100px";
    document.getElementById("header").style.opacity = "0.8";
    document.getElementById("footer").style.bottom = "-100px";
    document.getElementById("footer").style.opacity = "0.8";
    document.getElementById("icons").style.opacity = "0";
    document.getElementById("icons").style.visibility = "hidden";
    document.getElementById("icons").style.bottom = "-10px";

    document.getElementById("welcome").style.top = 50 - yp/25 + "%";
  } else if (y < h) { /* fourth quarter of the page */
    document.getElementById("header").style.top = -100 + yp*3/4 + "px";
    document.getElementById("header").style.opacity = 1 - 0.2/yp*3/4;
    document.getElementById("footer").style.bottom = -100 + yp*3/4 + "px";
    document.getElementById("footer").style.opacity = 1 - 0.2/yp*3/4;
    document.getElementById("icons").style.opacity = 1 - 1/yp*3/4;
    document.getElementById("icons").style.visibility = "visible";
    document.getElementById("icons").style.bottom = -10 + yp*3/4 + "px";

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
