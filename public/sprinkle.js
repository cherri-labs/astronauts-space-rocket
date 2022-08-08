window.onload = sprinkle;



"|||": "<br>"
"||": "<wbr>"

function sprinkle() {
    const colors = document.querySelectorAll(".colors");
    [...colors].forEach(function (p) {
        const text = p.innerHTML;
        const words = text.split("|||");
        p.innerHTML = "";

        for (const w of words) {
            const chars = w.split("");
            for (const c of chars) {
                if (c == " ") {
                    p.innerHTML += c;
                } else if (c != "") {
                    p.innerHTML += "<span>" + c + "</span>";
                }
            }

            p.innerHTML += "</h1><br><h1 class='colors'>";
        }

        p.innerHTML = p.innerHTML.replace("||", "<wbr>");
    });
}
