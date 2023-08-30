const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
const swup = new Swup({
  doScrollingRightAway: true,
  animateHistoryBrowsing: true,
});

swup.on("animationInDone", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Add smooth scrolling behavior
  });
});

const scrollToSection = (section) => {
  window.scrollTo({
    top: document.querySelector(section).offsetTop,
    behavior: "smooth",
  });
};
document.querySelectorAll(".linksList a").forEach((link) => {
  console.log(link.getAttribute("href"));
  link.addEventListener("click", function (e) {
    scrollToSection(link.getAttribute("href"));
  });
});
