let size1 = 30; // base heart size (will be controlled by mouseX)
let bgColor; 
let time = 2;
let y = 0; // vertical offset for animation
let heartColor; // store heart color

function setup() {
  createCanvas(400, 400);
  bgColor = color(220);
  heartColor = color("#E96161"); // initial heart color
}

function draw() {
  background(bgColor);

  // interactive heart size controlled by mouseX
  let s = map(mouseX, 0, width, 10, 40);

  fill(heartColor);
  noStroke();

  // loop through rows (j) and columns (i)
  for (let j = 0; j < 10; j++) {
    for (let i = 0; i < 10; i++) {
      // add y offset to make the hearts fall down
      let ypos = (j * 50 + y) % height; // wrap around screen
      let xpos = i * 50;
      drawHeart(xpos, ypos, s);
    }
  }

  // move the hearts down
  y += time;
}

// function to draw a heart
function drawHeart(x, y, s) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - s/2, y - s/2, x - s, y + s/3, x, y + s);
  bezierVertex(x + s, y + s/3, x + s/2, y - s/2, x, y);
  endShape(CLOSE);
}

// --- Mode switching with number keys: 1, 2, 3 ---
function keyPressed() {
  switch (key) {
    case "1":
      time = 1;
      bgColor = color(200, 100, 100); // red
      break;
    case "2":
      time = 2;
      bgColor = color(100, 200, 100); // green
      break;
    case "3":
      time = 3;
      bgColor = color(100, 100, 200); // blue
      break;
    default:
      bgColor = color(220); // grey
      
       if (key === " ") {  // space bar
    saveCanvas("activity1b-image", "jpg");
  }
      
  }
}

// --- Change heart color when mouse is pressed ---
function mousePressed() {
  heartColor = color(random(255), random(255), random(255));
}
