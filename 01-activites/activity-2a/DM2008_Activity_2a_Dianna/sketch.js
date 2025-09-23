// DDM2008 — Activity 2a
// (Mode Switch, 20 min)

let x = 0; // ellipse x-position
let y = 0; // ellipse y-position
let size1 = 150; // ellipse size (you can change this in your if/else)
let size2 = 100; // ellipse size (you can change this in your if/else)
let size3 = 50;

let bgColor; // background color set by switch(key)
let time = 2;

function setup() {
  createCanvas(400, 400);
  bgColor = color(220);
}

function draw() {
  background(bgColor);

  fill("#FFFFFF");
  stroke("#E61E1E");
  strokeWeight(3);
  ellipse(x, 200, size1);

  ellipse(x, 200, size2);

  ellipse(x, 200, size3);

  x += time;
  // Wrap around when it exits the right edge
  if (x > width + size1 / 2) {
    x = 0;
  }
}

// --- Mode switching with number keys: 1, 2, 3 ---
function keyPressed() {
  switch (key) {
    case "1":
      time = 2;
      size1 = 150;
      size2 = 120;
      size3 = 20;
      bgColor = color(200, 100, 100); // red
      break;
    case "2":
      time = 1;
      size1 = 150;
      size2 = 100;
      size3 = 50;
      bgColor = color(100, 200, 100); // green
      break;
    case "3":
      time = 0.5;
      size1 = 200;
      size2 = 100;
      size3 = 10;
      bgColor = color(100, 100, 200); // blue
      break;
    default:
      size1 = 150; 
      size2 = 100;
      size3 = 50;
      bgColor = color(220); // grey 
      
      if (key === " ") {  // space bar
    saveCanvas("activity1b-image", "jpg");
  }
}
}
 