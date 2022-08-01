$(window).scroll(function() {
    const pages = document.querySelectorAll(".page #content p");
    [...pages].forEach(content => {
        const h = innerHeight;
        const h2 = ((h/2) / h);
        const x = (($(window).scrollTop()) % h / h2);
        const o = x < h2 ? x : (h2-(x%h2))**(1/2);
        content.style.opacity = o || 1;
    });
});
