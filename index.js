//**********************  CORRECTION  **********************//
const mouses = document.querySelectorAll(".mouse");

window.addEventListener("mousemove", (e) => {
  mouses.forEach((mouse) => {
    mouse.style.top = e.y + "px";
    mouse.style.left = e.x + "px";
  });
});

// window.addEventListener("mousemove", (e) => {
//   cursor.style.top = e.y + "px";
//   cursor.style.left = e.x + "px";

//   mouse1.style.top = e.y + "px";
//   mouse1.style.left = e.x + "px";

//   mouse2.style.top = e.y + "px";
//   mouse2.style.left = e.x + "px";
// })

//************************************************************//

// const mousemove = document.querySelector(".mousemove");
// const mousemove2 = document.querySelector(".mousemove2");
// const gros = document.querySelector(".gros");

// window.addEventListener("mousemove", (e) => {
//   mousemove.style.left = e.pageX + "px";
//   mousemove.style.top = e.pageY + "px";

//   mousemove2.style.left = e.pageX + "px";
//   mousemove2.style.top = e.pageY + "px";

//   gros.style.left = e.pageX + "px";
//   gros.style.top = e.pageY + "px";
// });
