window.sideOpen = sideOpen;
window.sideClose = sideClose;

// window.onresize = function () { location.reload()};

let signal1 = 0;

function sideOpen() {

    let side = document.querySelector(".sidebar");
    let sideClose = document.querySelector("#closeMenu");
    side.style.backgroundColor = "rgba(0, 0, 0, 0.98)";
    side.style.border = "1px solid white";
    // side.style.width = "310px";

    signal1 = 1;

    let set1 = setInterval(sw1, 10);
    let w = 0;

    function sw1() {
        if (w == 300) {
            clearInterval(set1);
        }
        else {
            side.style.width = w + "px";
            w+=10;
        }

    }
    side.style.zIndex = "4";
    sideClose.style.display = "block";

}

function sideClose() {
    let side = document.querySelector(".sidebar");
    side.style.border = "0px";

    let set2 = setInterval(sw2, 1);
    let w2 = 310;

    function sw2() {
        if (w2 == 0) {
            clearInterval(set2);
            side.style.width = w2 + "px";
        }
        else {
            side.style.width = w2 + "px";
            w2 -= 10;
        }
    }
}


// window.onclick = function () {clickAnywhere()};

function clickAnywhere() {
    if (window.innerWidth <= 1000 && signal1 == 1) {
            sideClose();
        // console.log(signal1);
    }
}

// $('#menu').click(function (event) {
//     event.stopPropagation();
// });




// on scroll change the color of side bar icon
window.onscroll = function () { scroll1() };


function scroll1() {
    let h2 = window.pageYOffset;
    // console.log(h2);
    console.log("ioi")

    let topbS = document.querySelector(".topB").offsetTop - 60;
    // console.log(topbS);

    let aboutS = document.querySelector(".about1").offsetTop - 60;
    // console.log(aboutS);

    let resumeS = document.querySelector(".resume1").offsetTop - 60;
    // console.log(resumeS);

    let projectS = document.querySelector(".project1").offsetTop - 60;
    // console.log(projectS);

    let blogS = document.querySelector(".blog1").offsetTop - 60;
    // console.log(blogS);

    let contactS = document.querySelector(".contact1").offsetTop - 60;
    // console.log(contactS);

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
