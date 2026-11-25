/* Scale the fixed 1080 x 609 canvas to fit any screen (phones included) */
const DESIGN_W = 1080, DESIGN_H = 609;
const viewport = document.getElementById("viewport");
const stage = document.getElementById("stage");

function fit() {
  const s = window.innerWidth / DESIGN_W;
  stage.style.transform = "scale(" + s + ")";
  viewport.style.height = DESIGN_H * s + "px";
}
window.addEventListener("resize", fit);
fit();