// import { gsap } from "C:/Windows/System32/node_modules/gsap";
// import { CSSRulePlugin } from "C:/Windows/System32/node_modules/gsap/CSSRulePlugin";

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

// console.log(w, h);
// $(document).on("mousemove", (e) => {
//     $(".follower").css({
//         left: e.clientX,
//         top: e.clientY,
//     });
// });

// $(document).on("mousemove", (e) => {
//     $(".mouse-pointer").css({
//         left: e.clientX,
//         top: e.clientY,
//     });
// });

// window.addEventListener("mousedown", mousedown, false);

// window.addEventListener("mouseup", mouseup, false);

var video1 = $("#dtw-video video:first-child");
video1.muted = true;

var video2 = $("#cc-video video:first-child");
video2.muted = true;

let tl = gsap.timeline();
var rule = CSSRulePlugin.getRule(".landing"); //get the rule
// gsap.to(rule, {duration: 3, cssRule: {color: "blue"}});
tl.to(".landing", { opacity: 0, delay: 1, duration: 3 });
tl.to(rule, { cssRule: { zIndex: "-10" } });
tl.from("#me-pic", { x: -100, opacity: 0, duration: 1.5 }, "<-2");
tl.from("#prof-info", { x: -50, opacity: 0, duration: 1.5 }, "<+.5");
// $(".landing").remove(); this works, but does so immediately. need to chain it to gsap

// start playing the videos when they are center screen
ScrollTrigger.create({
    trigger: "#dtw-video",
    start: "center center",
    end: "center 20%",
    // markers: true,
    onToggle: (self) => {
        var video = $("#dtw-video video:first-child");
        if (self.isActive) {
            video.trigger("play");
        } else {
            video.trigger("pause");
        }
    },
});
ScrollTrigger.create({
    trigger: "#cc-video",
    start: "top 60%",
    // markers: true,

    // action: "play pause",
    onToggle: (self) => {
        var video = $("#cc-video video:first-child");
        if (self.isActive) {
            video.trigger("play");
        } else {
            video.trigger("pause");
        }
    },
});
