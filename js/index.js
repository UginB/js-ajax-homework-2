document.addEventListener("DOMContentLoaded", () => {
  const cube = document.querySelector(".elemRespown__cube");
  const fields = document.querySelector(".fields");

  const mouseMoveListener = (e) => {
    cube.style.left = e.pageX - 50 + "px";
    cube.style.top = e.pageY - 50 + "px";
  };

  cube.addEventListener("mousedown", (e) => {
    cube.style.position = "absolute";
    document.addEventListener("mousemove", mouseMoveListener);
  });
  cube.addEventListener("mouseup", (e) => {
    document.removeEventListener("mousemove", mouseMoveListener);
  });
});
//   console.log("mouse location:", e.clientX, e.clientY);
