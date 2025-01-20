// // Example: Triggering refresh after content is dynamically loaded
// window.addEventListener("load", () => {
//     // Dynamically load content or perform layout changes
//     ScrollTrigger.refresh();
// });

// // Example: Triggering refresh after resizing
// window.addEventListener("resize", () => {
//     ScrollTrigger.refresh();
// });




var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "0% 95%",
        end: "70% 50%",
        scrub: true,


    }
});

tl.to(".fanta", {
    top: "120%",
    left: "4%",
    width: "35vw"
}, "s")
.to(".lemon-cut", {
    top: "110%",
    left: "9%",
    width: "15vw"
}, "s")
.to(".orange", {
    top: "160%",
    left: "20%",
    width: "15%"
}, "s")
.to(".leaf", {
    top: "110%",
    rotate: "130deg",
    left: "70%"
}, 's');

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".three",
        start: "0% 70%",
        end: "50% 70%",
        // markers: 'true',
        scrub: true,



    }
});

tl2.from(".pepsi", {
        // rotate: "-70deg",
        left: "-100%",
        // top: "90%"
    }, 'ca')
    .from(".coco", {
        // rotate: "90deg",
        // top: "110%",
        right: "-100%"
    }, 'ca')
    .to(".fanta", {
        left: "33.4%",
        top: "200%",
        width: "32vw"
    }, "ca")
    .to(".lemon-cut", {
        width: "18%",
        left: "40%",
        top: "185%",

    }, 'ca')
    .to(".orange", {
        top: "160%",
        left: "20%",
        width: "15%"
    }, "ca")
    .from(".lemon-cut-pepsi", {
        rotate: "-70deg",
        left: "-100%",
        // top: "90%"
    }, 'ca')
    .from(".lemon-cut-cola", {
        rotate: "90deg",
        // top: "110%",
        right: "-100%"
    }, 'ca');





// var tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".two",
//         start: "0% 95%",
//         end: "70% 50%",
//         scrub: true,

//         // markers: true,
//     }
// });

// tl.to(".fanta", {
//     top: "120%",
//     left: "4%",
//     width: "35vw"
// }, "s")
// .to(".lemon-cut", {
//     top: "110%",
//     left: "9%",
//     width: "15vw"
// }, "s")
// .to(".orange", {
//     top: "160%",
//     left: "20%",
//     width: "15%"
// }, "s")
// .to(".leaf", {
//     top: "110%",
//     rotate: "130deg",
//     left: "70%"
// }, 's');

//     var tl2 = gsap.timeline({
//         scrollTrigger: {
//             trigger: ".three",
//             start: "0% 50%",
//             end: "50% 70%",
//             scrub: true,
//         }
//     });

//     tl2.from(".pepsi", {
//         rotate: "-70deg",
//         left: "-100%",
//         top: "90%"
//     }, 'ca')
//     .from(".coco", {
//         rotate: "90deg",
//         top: "110%",
//         right: "-50%"
//     }, 'ca')
//     .to(".fanta", {
//         left: "33.5%",
//         top: "204%",
//         width: "32vw"
//     }, "ca")
//     .to(".lemon-cut", {
//         width: "18%",
//         left: "39%",
//         top: "191%",
//         width: "20vw"
//     }, 'ca')
//     .to(".orange", {
//         top: "160%",
//         left: "20%",
//         width: "15%"
//     }, "ca")
//     .from(".lemon-cut-pepsi", {
//         rotate: "-70deg",
//         left: "-100%",
//         top: "90%"
//     }, 'ca')
//     .from(".lemon-cut-cola", {
//         rotate: "90deg",
//         top: "110%",
//         right: "-50%"
//     }, 'ca');
// };