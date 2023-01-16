document.addEventListener("DOMContentLoaded", () => {
  const respown = document.querySelector(".elemRespown");
  const cube = document.querySelector(".elemRespown__cube_active");
  const fieldFree = document.querySelector(".fields__field_free");
  const fieldGrid = document.querySelector(".fields__field_grid");

  let mouseMoveListener;
  let deepCopyCube;

  const createCloneCube = () => {
    deepCopyCube = cube.cloneNode(true);
    deepCopyCube.classList.add("elemRespown__cube_abs");
    respown.append(deepCopyCube);
    mouseMoveListener = (e) => {
      deepCopyCube.style.left = e.pageX + 1 + "px";
      deepCopyCube.style.top = e.pageY + 1 + "px";
    };
  };

  const mouseUpHandler = (e) => {
    console.log(e.target);
    if (e.target != fieldFree) {
      deepCopyCube.remove();
    }
    if (e.target === fieldGrid) {
      fieldGrid.append(cube.cloneNode(true));
    }
    document.removeEventListener("mousemove", mouseMoveListener);
    document.body.removeEventListener("mouseup", mouseUpHandler);
  };

  cube.addEventListener("mousedown", (e) => {
    createCloneCube();
    document.addEventListener("mousemove", mouseMoveListener);
    document.body.addEventListener("mouseup", mouseUpHandler);
  });
});
