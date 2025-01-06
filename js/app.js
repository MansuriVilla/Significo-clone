

// disable devtools start
// function RightClickDisable() {



//     document.addEventListener('contextmenu', event => {
//         event.preventDefault();
//     });
//     document.onkeydown = (e) => {
//         if (e.key === 'F12') {
//             e.preventDefault();
//         }
//         if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'i') {
//             e.preventDefault();
//         }
//         if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'c') {
//             e.preventDefault();
//         }
//         if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'j') {
//             e.preventDefault();
//         }
//         if (e.ctrlKey && e.key.toLowerCase() === 'u') {
//             e.preventDefault();
//         }
//     };
// }
// RightClickDisable();

// disable devtools end


function smoothScroll() {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => { });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
}
smoothScroll();


gsap.registerPlugin(ScrollTrigger);

function disableScrolling() {
    document.body.style.overflow = 'hidden';
}

function enableScrolling() {
    document.body.style.overflow = '';
}

disableScrolling();

setTimeout(enableScrolling, 900);


function animationTimeline() {


    gsap.to('.pre-loader', {
        duration: 1.9,
        "--clip": '0%',
        delay: .9,
    })


    gsap.to('.left', {
        x: "300px",
        duration: 1,
        ease: "expoScale(1,2, power2.in)",
        scrollTrigger: {
            start: "15% 30%",
            end: "40% top",
            markers: false,
            scrub: true,

        }
    })

    gsap.to('.right', {
        x: "-300px",
        duration: 1,
        ease: "expoScale(1,2, power2.in)",
        scrollTrigger: {
            start: "15% 30%",
            end: "40% top",
            markers: false,
            scrub: true,

        }
    })

    gsap.to('.main-text', {
        scale: 1,
        duration: 1,
        ease: "expoScale(1,2, power2.in)",
        visibility: "visible",
        scrollTrigger: {
            start: "10% 43%",
            end: "20% top",
            // markers: true,
            scrub: true,

        }
    })
    gsap.to('.hero-main-img', {
        "--clip": '0%',
        duration: 0.3,
        scrollTrigger: {
            start: "10% 50%",
            end: "20% 50%",
            // markers: true,
            scrub: true,
        }
    })
    document.querySelectorAll('.right-box').forEach(function (box) {
        gsap.to(box, {
            maxWidth: "500px",
            backgroundColor: "#000",
            color: "#AEDEE0",
            duration: 1,
            scrollTrigger: {
                trigger: box,
                start: "10% 50%",
                end: "100% 50%",
                markers: false,
                scrub: true,
            }
        });
    });

    let sections = gsap.utils.toArray(".panel");
    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: "#talk",
            scrub: 1,
            
            start: "10% 50%",
            
            end: () => "+=" + document.querySelector("#talk").offsetWidth
        }
    });

    let sectionsOne = gsap.utils.toArray("section"),
        colors = ["#000000", "#AEDEE0", "#EF9D71", "#FFFFFF"],
        favicons = ["./FAV-ICONS/000000.png", "./FAV-ICONS/AEDEE0.png", "./FAV-ICONS/EF9D71.png", "./FAV-ICONS/FFFFFF.png"];

    sectionsOne.forEach((sectionOne, i) => {
        ScrollTrigger.create({
            trigger: sectionOne,
            start: "top 50",
            end: "+=100%",
            onToggle: self => {
                if (self.isActive) {
                    gsap.to("section", { backgroundColor: colors[i], overwrite: true });
                    updateFavicon(i);
                }
            }
        });
    });

    function updateFavicon(index) {
        // Find the link element for the favicon
        let link = document.querySelector("link[rel*='icon']");
        // Set the new href for the favicon
        link.href = favicons[index];
    }


}
animationTimeline();