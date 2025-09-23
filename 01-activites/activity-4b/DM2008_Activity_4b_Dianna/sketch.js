// DM2008 — Activity 4b
// Objects in Motion (60 min)

let agents = [];
const NUM_START = 12;

function setup() {
  createCanvas(600, 400);
  noStroke();
  colorMode(HSB, 360, 100, 100, 255);

  // ============================
  // Step 1: Populate the array
  // - Use a loop to create multiple instances
  // - Give each instance some randomized starting values
  // ============================
  for (let i = 0; i < NUM_START; i++) {
    let x = random(width);
    let y = random(height);
    let animalSize = random(30, 60);
    let speedX = random(-2, 2);
    let speedY = random(-2, 2);
    let type = random(["bear", "cat"]);
    agents.push(new AnimalAgent(x, y, animalSize, speedX, speedY, type));
  }
}

function draw() {
  background(230);

  for (let i = 0; i < agents.length; i++) {
    agents[i].update();
    agents[i].changeColor();
    agents[i].show();
  }

  // remove too small agents
  for (let i = agents.length - 1; i >= 0; i--) {
    if (agents[i].animalSize <= 10) {
      agents.splice(i, 1);
    }
  }
}

function mousePressed() {
  let animalSize = random(30, 60);
  let speedX = random(-2, 2);
  let speedY = random(-2, 2);
  let type = random(["bear", "cat"]);
  agents.push(
    new AnimalAgent(mouseX, mouseY, animalSize, speedX, speedY, type)
  );
}

function keyPressed() {
  if (key === "C") agents = []; // clear all
}

// ============================
// AnimalAgent class
// ============================
class AnimalAgent {
  constructor(x, y, animalSize, speedX, speedY, type) {
    this.x = x;
    this.y = y;
    this.animalSize = animalSize; // renamed from size
    this.dx = speedX;
    this.dy = speedY;
    this.type = type; // "bear" or "cat"
    this.hue = random(360);
    this.alpha = 200;
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x < 0 || this.x > width) {
      this.dx *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.dy *= -1;
    }

    // pulsing  size
    this.animalSize += sin(frameCount * 0.05) * 0.2;
    this.animalSize -= 0.01; // slow shrink
  }

  changeColor() {
    this.hue = (this.hue + 1) % 360;
  }

  show() {
    push();
    translate(this.x, this.y);
    scale(this.animalSize / 50); // normalize size to 50 for drawing

    fill(this.hue, 70, 90, this.alpha);

    if (this.type === "bear") {
      // bear head and features
      // head
      ellipse(0, 0, 50, 50);
      // left ear
      ellipse(-20, -25, 20, 20);
      // right ear
      ellipse(20, -25, 20, 20);
      // eyes
      fill(0);
      ellipse(-12, 0, 8, 8);
      ellipse(12, 0, 8, 8);
      // nose
      fill(80, 50, 30);
      ellipse(0, 5, 8, 6);
      // mouth
      noFill();
      stroke(80, 50, 30);
      strokeWeight(1.5);
      arc(4, 8.5, 7, 4, 0, PI);
      arc(-4, 8.5, 7, 4, 0, PI);
      noStroke();
    } else if (this.type === "cat") {
      // cat head and features
      // head
      ellipse(0, 0, 50, 50);
      // left ear
      triangle(-23, -10, -15, -35, -5, -22);
      // right ear
      triangle(23, -10, 15, -35, 5, -22);
      // eyes
      fill(0);
      ellipse(-12, 0, 8, 8);
      ellipse(12, 0, 8, 8);
      // nose
      fill(255, 0, 0);
      triangle(-4, 3, 0, 6, 4, 3);
      // mouth
      noFill();
      stroke(0);
      strokeWeight(1.5);
      line(0, 7, -5, 10);
      line(0, 7, 5, 10);
      noStroke();
    }

    pop();
  }
}
