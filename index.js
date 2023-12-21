const mousemove = document.querySelector(".mousemove");
const mousemove2 = document.querySelector(".mousemove2");
const gros = document.querySelector(".gros");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";

  mousemove2.style.left = e.pageX + "px";
  mousemove2.style.top = e.pageY + "px";

  gros.style.left = e.pageX + "px";
  gros.style.top = e.pageY + "px";
});

// window.addEventListener("mousemove2", (e) => {
//   mousemove2.style.left = e.pageX + "px";
//   mousemove2.style.top = e.pageY + "px";
// });

// window.addEventListener("gros", (e) => {
//   gros.style.left = e.pageX + "px";
//   gros.style.top = e.pageY + "px";
// });
