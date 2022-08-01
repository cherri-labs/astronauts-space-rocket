/* navbar */
export default function dropdown(href) {
    let navbar = document.getElementById("navbar");

    /* mobile dropdown */
    if (!navbar.className) {
        navbar.className = "dropdown";
    } else {
        navbar.className = "";
    }

    /* href scroll */
    if (href)
        window.location.assign(href);
}
