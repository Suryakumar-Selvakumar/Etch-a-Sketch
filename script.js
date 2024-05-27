const container = document.querySelector(".container");
const btnClearGrid = document.querySelector("#clear-grid");
const btnChangeColor = document.querySelector("#change-color");

let maxWidth = 500;
const colorNames = [
  "aliceblue",
  "antiquewhite",
  "aqua",
  "aquamarine",
  "azure",
  "beige",
  "bisque",
  "black",
  "blanchedalmond",
  "blue",
  "blueviolet",
  "brown",
  "burlywood",
  "cadetblue",
  "chartreuse",
  "chocolate",
  "coral",
  "cornflowerblue",
  "cornsilk",
  "crimson",
  "cyan",
  "darkblue",
  "darkcyan",
  "darkgoldenrod",
  "darkgrey",
  "darkgreen",
  "darkkhaki",
  "darkmagenta",
  "darkolivegreen",
  "darkorange",
  "darkorchid",
  "darkred",
  "darksalmon",
  "darkseagreen",
  "darkslateblue",
  "darkslategrey",
  "darkturquoise",
  "darkviolet",
  "deeppink",
  "deepskyblue",
  "dimgray",
  "dodgerblue",
  "firebrick",
  "floralwhite",
  "forestgreen",
  "fuchsia",
  "gainsboro",
  "ghostwhite",
  "gold",
  "goldenrod",
  "grey",
  "green",
  "greenyellow",
  "honeydew",
  "hotpink",
  "indianred",
  "indigo",
  "ivory",
  "khaki",
  "lavender",
  "lavenderblush",
  "lawngreen",
  "lemonchiffon",
  "lightblue",
  "lightcoral",
  "lightcyan",
  "lightgoldenrodyellow",
  "lightgrey",
  "lightgreen",
  "lightpink",
  "lightsalmon",
  "lightseagreen",
  "lightskyblue",
  "lightslategrey",
  "lightsteelblue",
  "lightyellow",
  "lime",
  "limegreen",
  "linen",
  "magenta",
  "maroon",
  "mediumaquamarine",
  "mediumblue",
  "mediumorchid",
  "mediumpurple",
  "mediumseagreen",
  "mediumslateblue",
  "mediumspringgreen",
  "mediumturquoise",
  "mediumvioletred",
  "midnightblue",
  "mintcream",
  "mistyrose",
  "moccasin",
  "navajowhite",
  "navy",
  "oldlace",
  "olive",
  "olivedrab",
  "orange",
  "orangered",
  "orchid",
  "palegoldenrod",
  "palegreen",
  "paleturquoise",
  "palevioletred",
  "papayawhip",
  "peachpuff",
  "peru",
  "pink",
  "plum",
  "powderblue",
  "purple",
  "red",
  "rosybrown",
  "royalblue",
  "saddlebrown",
  "salmon",
  "sandybrown",
  "seagreen",
  "seashell",
  "sienna",
  "silver",
  "skyblue",
  "slateblue",
  "slategrey",
  "snow",
  "springgreen",
  "steelblue",
  "tan",
  "teal",
  "thistle",
  "tomato",
  "turquoise",
  "violet",
  "wheat",
  "white",
  "whitesmoke",
  "yellow",
  "yellowgreen",
];

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
    element.addEventListener("mouseover", (e) => {
      let x = randomColor();
      let y = randomColor();
      let z = randomColor();
      e.currentTarget.style.backgroundColor = `rgb(${x},${y},${z})`;
    });
  });
}

function changeColor() {
  const divElements = container.childNodes;
  let divColor = selectColor();
  divElements.forEach((element) => {
    element.addEventListener("mouseover", (e) => {
      e.currentTarget.style.backgroundColor = `${divColor}`;
    });
  });
}

function clearGrid() {
  const divElements = container.childNodes;
  divElements.forEach((e) => (e.style.backgroundColor = "rgb(190, 191, 193)"));
}

btnClearGrid.addEventListener("click", clearGrid);
btnChangeColor.addEventListener("click", changeColor);

createGrid(20);

const btnNewGrid = document.querySelector("#new-grid");
btnNewGrid.addEventListener("click", () => {
  let gridValue;
  do {
    gridValue = prompt("Enter desired grid size:", "");
    if (gridValue === null) {
      break;
    } else {
      gridValue = parseInt(gridValue, 10);
    }
  } while (gridValue > 100 || gridValue < 1 || isNaN(gridValue));
  if (typeof gridValue === "number") {
    createGrid(gridValue);
  }
});

function randomColor() {
  let rgbVal = Math.floor(Math.random() * 256);
  return rgbVal;
}

function selectColor() {
  let color;
  do {
    color = prompt("Enter desired Color:", "");
    if (color === null) {
      break;
    }
    console.log(color);
  } while (!colorNames.includes(color));
  if (color) {
    return color;
  }
}
