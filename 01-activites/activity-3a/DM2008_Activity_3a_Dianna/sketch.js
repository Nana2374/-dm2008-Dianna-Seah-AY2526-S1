// Create a new array with some colors
let palette = ["#D68EE2", "#00BCD4", "#ECCD6D"];

let sizes = [20, 100];

let circleSizes = [];
// for each circle’s size

function setup() {
  createCanvas(400, 400);
  noStroke();

  // initialize with random sizes
  for (let i = 0; i < palette.length; i++) {
    circleSizes[i] = random(sizes[0], sizes[1]);
  }
}

function draw() {
  background(230);

  // Even spacing based on how many items are in the array
  const spacing = width / (palette.length + 1);

  // Draw one circle for each palette color
  for (let i = 0; i < palette.length; i++) {
    fill(palette[i]);
    const x = (i + 1) * spacing;
    ellipse(x, height / 2, circleSizes[i]); 
    // use stored size
  }
}



// Add a new circle with random color + random size
function mousePressed() {
  palette.push(color(random(255), random(255), random(255)));
  circleSizes.push(random(sizes[0], sizes[1]));
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    // Remove the last circle (if any)
    if (palette.length > 0) {
      palette.splice(palette.length - 1, 1);
      circleSizes.splice(circleSizes.length - 1, 1);
    }
  }
  
  if (key === " ") {  // space bar
    saveCanvas("activity1b-image", "jpg");
  }
}
