$(document).ready(function(){
    h1 = document.querySelectorAll("h1");
    [...h1].forEach(function (h) {
        fitText(h, 0.9);
    });
});
