let xValues = [];
let yValues = [];

let resetButton;
let runSimButton;

let field;
let c;

function preload() {
  resetButton = createButton("Reset");
  runSimButton = createButton("Run Simulation");

  setButtonStyles();

  field = loadImage('full.svg');
}


function setup() {
  c = createCanvas(900, 900);
  background(field);
  // c.mousePressed(addPoint);
}

function draw() {
  background(field);
  c.mousePressed(addPoint);

  strokeWeight(7);
  for(let i=0; i<xValues.length; i++) {
    fill(0,0,0);
    ellipse(xValues[i], yValues[i], 10);
    line(xValues[i], yValues[i], xValues[i+1], yValues[i+1]);
  }

  resetButton.mouseClicked(clearCanvas);
}

function addPoint() {
  xValues.push(Math.floor(mouseX));
  yValues.push(Math.floor(mouseY));
  document.getElementById('arrayX').innerHTML = xValues[xValues.length-1];
  document.getElementById('arrayY').innerHTML = yValues[yValues.length-1];
}

function clearCanvas() {
  xValues = [];
  yValues = [];
  clear();
  background(field);
}

function setButtonStyles() {
//   resetButton.style('float: left;')
//   runSimButton.style('float: right;')
  resetButton.style('background-color', color(135, 219, 255));
  runSimButton.style('background-color', color(135, 219, 255));
  resetButton.style('font-size: 20px;');
  runSimButton.style('font-size: 20px;');
  resetButton.style('font-family: "Times New Roman", Times, serif;');
  runSimButton.style('font-family: "Times New Roman", Times, serif;');
}

