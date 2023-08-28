const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
const swup = new Swup({
  doScrollingRightAway: true,
});

swup.on("animationInDone", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Add smooth scrolling behavior
  });
});
// window.addEventListener("popstate", () => {
//   // Manually trigger the animation when using browser navigation
//   swup.plugins.doScrollingRightAway.setOriginalData(null);
//   swup.doScrolling(swup.options.scrollPageDuration).then(() => {
//     swup.triggerPage();
//   });
// });
// const scrollToSection = (section) => {
//   window.scrollTo({
//     top: document.querySelector(section).offsetTop,
//     behavior: "smooth",
//   });
// };
// document.querySelectorAll(".linksList a").forEach((link) => {
//   link.addEventListener("click", function (e) {
//     if (window.location.pathname !== "/home.html") {
//       window.location.href = link.getAttribute("href");
//       // window.onload = () => {
//       //   console.log("loaded");
//       //   scrollToSection(link.getAttribute("href"));
//       // };
//     }
//     scrollToSection(link.getAttribute("href"));
//   });
// });
