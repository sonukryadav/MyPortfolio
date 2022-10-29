// on scroll change the color of side bar icon
window.onscroll = function () { scroll1() };


function scroll1() {
    let h2 = window.pageYOffset;
    // console.log(h2);

    // home
    if (h2 < 450) {
        let scl = document.querySelector("#home");
        scl.style.color = "rgb(3, 188, 255)";
        scl.style.boxShadow = "1px 1px 10px rgb(194, 194, 194)"
    }
    else {
        let scl = document.querySelector("#home");
        scl.style.color = "white";
        scl.style.boxShadow = "none";
    }

    // about
    if (h2 > 450 && h2 < 1950) {
        let scl = document.querySelector("#about");
        scl.style.color = "rgb(3, 188, 255)";
        scl.style.boxShadow = "1px 1px 10px rgb(194, 194, 194)";
    }
    else {
        let scl = document.querySelector("#about");
        scl.style.color = "white";
        scl.style.boxShadow = "none";
    }

    // resume
    if (h2 > 1950 && h2 < 2450) {
        let scl = document.querySelector("#resume");
        scl.style.color = "rgb(3, 188, 255)";
        scl.style.boxShadow = "1px 1px 10px rgb(194, 194, 194)";
    }
    else {
        let scl = document.querySelector("#resume");
        scl.style.color = "white";
        scl.style.boxShadow = "none";
    }


    // project
    if (h2 > 2450 && h2 < 3300) {
        let scl = document.querySelector("#project");
        scl.style.color = "rgb(3, 188, 255)";
        scl.style.boxShadow = "1px 1px 10px rgb(194, 194, 194)";
    }
    else {
        let scl = document.querySelector("#project");
        scl.style.color = "white";
        scl.style.boxShadow = "none";
    }


    // blog
    if (h2 > 3400 && h2 < 4000) {
        let scl = document.querySelector("#blog");
        scl.style.color = "rgb(3, 188, 255)";
        scl.style.boxShadow = "1px 1px 10px rgb(194, 194, 194)";
    }
    else {
        let scl = document.querySelector("#blog");
        scl.style.color = "white";
        scl.style.boxShadow = "none";
    }


    // contact
    if (h2 > 4000 && h2 < 4850) {
        let scl = document.querySelector("#contact");
        scl.style.color = "rgb(3, 188, 255)";
        scl.style.boxShadow = "1px 1px 10px rgb(194, 194, 194)";
    }
    else {
        let scl = document.querySelector("#contact");
        scl.style.color = "white";
        scl.style.boxShadow = "none";
    }


};