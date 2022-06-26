const circle1 = document.querySelector(".circle1");
const dot1 = document.querySelector(".dot1");
const circle2 = document.querySelector(".circle2");
const dot2 = document.querySelector(".dot2");
const circle3 = document.querySelector(".circle3");
const dot3 = document.querySelector(".dot3");
const htmlLvl = document.querySelector(".html-level");
const cssLvl = document.querySelector(".css-level");
const javascriptLvl = document.querySelector(".javascript-level");
const overalLvl = document.querySelector(".overal-skill-level");

dot1.addEventListener("click", () => {
  circle1.style.borderStyle = "solid";
  circle2.style.borderStyle = "none";
  circle3.style.borderStyle = "none";
  htmlLvl.style.display = "flex";
  cssLvl.style.display = "none";
  javascriptLvl.style.display = "none";
});

dot2.addEventListener("click", () => {
  circle2.style.borderStyle = "solid";
  circle1.style.borderStyle = "none";
  circle3.style.borderStyle = "none";
  cssLvl.style.display = "flex";
  htmlLvl.style.display = "none";
  javascriptLvl.style.display = "none";
});

dot3.addEventListener("click", () => {
  circle3.style.borderStyle = "solid";
  circle2.style.borderStyle = "none";
  circle1.style.borderStyle = "none";
  javascriptLvl.style.display = "flex";
  htmlLvl.style.display = "none";
  cssLvl.style.display = "none";
});

overalLvl.addEventListener("click", () => {
  javascriptLvl.style.display = "flex";
  htmlLvl.style.display = "flex";
  cssLvl.style.display = "flex";
  circle3.style.borderStyle = "none";
  circle2.style.borderStyle = "none";
  circle1.style.borderStyle = "none";
});
