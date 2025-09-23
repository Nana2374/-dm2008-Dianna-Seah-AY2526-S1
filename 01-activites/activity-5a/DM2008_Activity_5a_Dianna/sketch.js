// DM2008 – Activity 5a
// Colliding Circles (30 min)
let balls = [];

function setup() {
  createCanvas(400, 400);
  // Step 1: create Ball objects
  balls.push(new Ball(100, 200));
  balls.push(new Ball(300, 200));
  balls.push(new Ball(200, 200));
}

function draw() {
  background(230);

  // Step 2: update and display each ball
  for (let i = 0; i < balls.length; i++) {
    balls[i].move();
    balls[i].show();
    balls[i].checkCollision(balls);
  }
}

class Ball {
  constructor(x, y) {
    this.r = random(20, 40);
    this.pos = createVector(x, y);
    this.vel = createVector(random(-2, 2), random(-2, 2));
    this.col = color(100, 180, 220); // each ball has its own color
  }

  move() {
    this.pos.add(this.vel);

    // bounce on edges + change color
    if (this.pos.x - this.r < 0 || this.pos.x + this.r > width) {
      this.vel.x *= -1;
      this.changeColor();
    }
    if (this.pos.y - this.r < 0 || this.pos.y + this.r > height) {
      this.vel.y *= -1;
      this.changeColor();
    }
  }

  show() {
    fill(this.col);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }

  changeColor() {
    this.col = color(random(255), random(255), random(255)); // random new color
  }

  checkCollision(others) {
    for (let i = 0; i < others.length; i++) {
      if (others[i] !== this) {
        let other = others[i];
        let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);

        if (d < this.r + other.r) {
          push();
          stroke(200, 60, 60);
          strokeWeight(4);
          noFill();
          ellipse(this.pos.x, this.pos.y, this.r * 2); // highlight
          pop();
        }
      }
    }
  }
}
