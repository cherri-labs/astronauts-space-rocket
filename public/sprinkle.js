window.onload = sprinkle;

function sprinkle() {
  const colors = document.querySelectorAll(".colors");
  [...colors].forEach(function (p) {
    const text = p.innerHTML;
    const lines = text.split("|||");
    p.innerHTML = "";

    for (const l of lines) {
      const words = l.split("||");

      for (const w of words) {
        const chars = w.split("");
        for (const c of chars) {
          if (c == " ") {
            p.innerHTML += c;
          } else if (c != "") {
            p.innerHTML += "<span>" + c + "</span>";
          }
        }

        p.innerHTML += "</h1><wbr><h1 class='colors'>";
      }

      if (lines.slice(0,-1).includes(l))
        p.innerHTML += "</h1><br><h1 class='colors'>";
    }
  });
}
