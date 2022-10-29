// on scroll change the color of side bar icon
window.onscroll = function () { scroll1() };


function scroll1() {
    let h2 = window.pageYOffset;
    // console.log(h2);

    let topbS = document.querySelector(".topB").offsetTop - 60;
    console.log(topbS);

    let aboutS = document.querySelector(".about1").offsetTop - 60;
    console.log(aboutS);

    let resumeS = document.querySelector(".resume1").offsetTop - 60;
    console.log(resumeS);

    let projectS = document.querySelector(".project1").offsetTop - 60;
    console.log(projectS);

    let blogS = document.querySelector(".blog1").offsetTop - 60;
    console.log(blogS);

    let contactS = document.querySelector(".contact1").offsetTop - 60;
    console.log(contactS);

    let th1 = aboutS - topbS;
    let th2 = resumeS - aboutS;
    let th3 = projectS - resumeS;
    let th4 = blogS - projectS;
    let th5 = contactS - blogS;
    

    

    // home
    if (h2 < aboutS) {
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
    if (h2 > aboutS && h2 < resumeS) {
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
    if (h2 > resumeS && h2 < projectS) {
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
    if (h2 > projectS && h2 < blogS) {
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
    if (h2 > blogS && h2 < contactS) {
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
    if (h2 > contactS && h2 < (contactS+650)) {
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