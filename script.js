const container = document.querySelector(".container");
const btnClearGrid = document.querySelector("#clear-grid");
let maxWidth = 500;

function createGrid(num) {
  container.innerHTML = "";
  let gridSize = num * num + num;
  let mod = num + 1;
  for (let i = 0; i < gridSize; i++) {
    const div = document.createElement("div");
    if (i % mod === 0) {
      div.style.width = "100%";
      div.styleheight = "0";
      div.style.border = "0";
    } else {
      div.style.width = maxWidth / num + "px";
      div.style.height = maxWidth / num + "px";
      div.style.border = "solid 1px black";
    }
    container.appendChild(div);
  }
  divElements = container.childNodes;

  divElements.forEach((element) => {
    element.addEventListener(
      "mouseover",
      (e) => (e.currentTarget.style.backgroundColor = "black")
    );
  });

  btnClearGrid.addEventListener("click", () => {
    divElements.forEach((e) => (e.style.backgroundColor = "white"));
  });
}

createGrid(16);

const btnNewGrid = document.querySelector("#new-grid");
btnNewGrid.addEventListener("click", () => {
  do {
    gridValue = parseInt(prompt("Enter desired grid size:", ""), 10);
  } while (isNaN(gridValue) || gridValue > 100 || gridValue < 1);
  createGrid(gridValue);
});
