let pageScroll = [];

/* hide elements */
pageScroll.hide = function() {
  document.getElementById("navbar").style.visibility = "hidden";
  document.getElementById("footer").style.bottom = "-100px";
  document.getElementById("footer").style.opacity = "0.8";
  document.getElementById("icons").style.opacity = "0";
  document.getElementById("icons").style.visibility = "hidden";
  document.getElementById("icons").style.bottom = "-10px";

  document.getElementById("welcome").style.top = "50%";
}

/* leave going up */
pageScroll.leaveUp = function() {
  document.getElementById("header").style.top = "200px";
  document.getElementById("header").style.opacity = "0";

  pageScroll.hide();
}

/* leave going down */
pageScroll.leaveDown = function() {
  document.getElementById("header").style.top = "-100px";
  document.getElementById("header").style.opacity = "0.8";

  pageScroll.hide();
}

/* enter going up */
pageScroll.enterUp = function() {
  document.getElementById("header").style.opacity = "0";
  document.getElementById("header").style.top = "10px";
}

/* enter going down */
pageScroll.enterDown = function() {
  document.getElementById("header").style.opacity = "0";
  document.getElementById("header").style.top = "10px";
}

/* show elements */
pageScroll.show = function(i) {
  document.getElementById("header").style.top = "0px";
  document.getElementById("header").style.opacity = "1";

  if (i !== "wallet") {
    document.getElementById("navbar").style.visibility = "visible";
    document.getElementById("footer").style.bottom = "0";
    document.getElementById("footer").style.opacity = "1";
    document.getElementById("icons").style.opacity = "1";
    document.getElementById("icons").style.visibility = "visible";
    document.getElementById("icons").style.bottom = "0";
  }

  document.getElementById("welcome").style.top = "40%";
}

export default pageScroll;
