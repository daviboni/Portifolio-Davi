document.addEventListener("DOMContentLoaded", function () {
    const iconsPg = document.getElementById("icons-pg");
    let hasAppeared = false;

    window.addEventListener("scroll", function () {
        if (window.scrollY >= window.innerHeight && !hasAppeared) {
            iconsPg.style.display = "block";
            hasAppeared = true;
        } else if (window.scrollY < window.innerHeight && hasAppeared) {
            iconsPg.style.display = "none";
            hasAppeared = false;
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
const btnSubir = document.querySelector(".btn-subir");

btnSubir.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
        });
    });
});