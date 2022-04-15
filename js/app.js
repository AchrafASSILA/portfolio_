// menu toggle
let list = document.getElementById("list");
let link = document.querySelectorAll("#list a");
let bars = document.querySelector("i.fa-bars");
let times = document.querySelector("i.fa-times");
bars.addEventListener("click", () => {
  list.classList.add("show");
});
times.addEventListener("click", () => {
  list.classList.remove("show");
});
for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("click", () => {
    list.classList.remove("show");
  });
}
// sticky navbar
let nav_bar = document.getElementById("navigation");
window.addEventListener("scroll", () => {
  nav_bar.classList.toggle("sticky", scrollY > 1);
});
//scroll reveal animation
// const sr = ScrollReveal({
//   distance: "60px",
//   duration: 2800,
//   // reset: true,
// });

// sr.reveal(`.home .content , .services .box , .portfolio .box , .contact-us`, {
//   origin: "top",
//   interval: 100,
// });
// sr.reveal(`.about .img-box ,.skills .content`, {
//   origin: "left",
//   interval: 100,
// });
// sr.reveal(`.about .content ,.skills .flex-box`, {
//   origin: "right",
//   interval: 100,
// });
