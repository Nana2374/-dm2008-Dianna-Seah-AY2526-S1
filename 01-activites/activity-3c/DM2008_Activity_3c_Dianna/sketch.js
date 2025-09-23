// DM2008 — Activity 3b
// (Painting App, 50 min)

// 1) Palette + size
const palette = ["#CB72DA","#F79CBD", "#f06449","#F0EAB3", "#8BC34A", "#3c78d8", "#eeeeee"];
let colorIndex = 0;
let sizeVal = 20;

let eraserMode = false; // to checkk

// 2) Brush registry (array of functions)
const brushes = [brushCircle, brushSquare, brushStreak, myBrushRainbow];
let currentBrush = 0; // 0–4

function setup() {
  createCanvas(600, 600);
  background(240);
  rectMode(CENTER);
}

function draw() {
  
  // paint only while mouse is held
  if (mouseIsPressed) {
    let col = eraserMode ? color(240) : palette[colorIndex]; // use eraser if active
    
    // call the selected brush function
    brushes[currentBrush](mouseX, mouseY, col, sizeVal);
  }
}

// 3) Brush functions (students can customize/extend)
function brushCircle(x, y, c, s) {
  noStroke();
  fill(c);
  ellipse(x, y, s);
}

function brushSquare(x, y, c, s) {
  push();
  translate(x, y);
  noStroke();
  fill(c);
  rect(0, 0, s, s);
  pop();
}

function brushStreak(x, y, c, s) {
  strokeWeight(max(2, s / 8));
  // draw several points with different colors from palette
  for (let i = 0; i < palette.length; i++) {
    stroke(palette[i]);
    point(x + random(-2, 2), y + random(-2, 2)); // jitter for variation
  }
}


//rainbow circle brush
function myBrushRainbow(x, y, c, s) {
  noStroke();
  // Draw concentric or layered circles from palette
  for (let i = 0; i < palette.length; i++) {
    fill(palette[i]);
    let factor = map(i, 0, palette.length - 1, 1, 0.3); 
    ellipse(x, y, s * factor);
  }
}


// 4) Brush UI: select brush, cycle color, change size, clear, eraser
function keyPressed() {
  switch (key) {
    case "1":
      currentBrush = 0; // circle
      break;
    case "2":
      currentBrush = 1; // square
      break;
    case "3":
      currentBrush = 2; // streak
      break;
    case "4":
      currentBrush = 3; // rainbow streak 
      break;
  }
  
  if (key == "C" || key == "c") {
    colorIndex = (colorIndex + 1) % palette.length; // cycle color
  }
  if (key == "+" || key == "=") {
    sizeVal += 4;
  }
  if (key == "-" || key == "_") {
    sizeVal = max(4, sizeVal - 4);
  }
  if (key == "X" || key == "x") {
    background(240); // clear canvas
  }
  
  //eraserrr have to click brush [1/2] to work
  if (key == "E" || key == "e") {
    eraserMode = !eraserMode; 
    print("Eraser mode:", eraserMode);
  }
  
    if (key === " ") {  // space bar
    saveCanvas("activity1b-image", "jpg");
  }
}


