document.addEventListener("DOMContentLoaded", () => {
  const respown = document.querySelector(".elemRespown");
  const cube = document.querySelector(".elemRespown__cube_active");
  const fields = document.querySelector(".fields");

  let mouseMoveListener;
  let deepCopyCube;

  const createCloneCube = () => {
    deepCopyCube = cube.cloneNode(true);
    deepCopyCube.classList.remove("elemRespown__cube_active");
    deepCopyCube.style.position = "absolute";
    respown.append(deepCopyCube);
    mouseMoveListener = (e) => {
      deepCopyCube.style.left = e.pageX + "px";
      deepCopyCube.style.top = e.pageY + "px";
    };
  };

  cube.addEventListener("mousedown", (e) => {
    createCloneCube();
    document.addEventListener("mousemove", mouseMoveListener);
  });
  deepCopyCube.addEventListener("mouseup", (e) => {
    document.removeEventListener("mousemove", mouseMoveListener);
  });
});
//   console.log("mouse location:", e.clientX, e.clientY);
