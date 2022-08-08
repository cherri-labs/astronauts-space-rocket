window.onload = sprinkle;

function replace(text, s, ss) {
    const words = text.split(s);
    var value = "";

    for (const w of words) {
        const chars = w.split("");
        for (const c of chars) {
            if (c == " ") {
                value += c;
            } else if (c != "") {
                value += "<span>" + c + "</span>";
            }
        }

        value += "</h1>" + ss + "<h1 class='colors'>";
    }

    return value;
}

function sprinkle() {
    const colors = document.querySelectorAll(".colors");
    [...colors].forEach(function (p) {
        var text = p.innerHTML;
        text = replace(text, "|||", "<br>");
        text = replace(text, "||", "<wbr>");
        p.innerHTML = text;
    });
}
