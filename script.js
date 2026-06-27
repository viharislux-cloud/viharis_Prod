	document.addEventListener("DOMContentLoaded", function () {

    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    console.log("hamburger =", hamburger);
    console.log("menu =", menu);

    hamburger?.addEventListener("click", () => {
        console.log("CLICK OK");
        menu.classList.toggle("active");
    });

});