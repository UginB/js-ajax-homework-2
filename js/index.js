document.addEventListener("DOMContentLoaded", () => {
  const respown = document.querySelector(".elemRespown");
  const cube = document.querySelector(".elemRespown__cube_active");
  const fieldFree = document.querySelector(".fields__field_free");
  const fieldGrid = document.querySelector(".fields__field_grid");

  let mouseMoveHandler;
  let deepCopyCube;

  const createCloneCube = () => {
    deepCopyCube = cube.cloneNode(true);
    deepCopyCube.classList.add("elemRespown__cube_abs");
    respown.append(deepCopyCube);
    mouseMoveHandler = (e) => {
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
    document.removeEventListener("pointermove", mouseMoveHandler);
    document.body.removeEventListener("pointerup", mouseUpHandler);
  };

  cube.addEventListener("pointerdown", () => {
    createCloneCube();
    document.addEventListener("pointermove", mouseMoveHandler);
    document.body.addEventListener("pointerup", mouseUpHandler);
  });
});
