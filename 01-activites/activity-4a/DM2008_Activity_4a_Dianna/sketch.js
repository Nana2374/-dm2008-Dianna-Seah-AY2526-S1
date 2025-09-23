// DM2008 – Activity 4a
// Bake a Cookie (30 min)
let cookie;

function setup() {
  createCanvas(400, 400);
  noStroke();
  
  // Step 3: make one cookie object
  cookie = new Cookie("choc-chip", 80, width/2, height/2);
}

function draw() {
  background(230);
  
  // Step 4: call the cookie’s show() method
  cookie.show();  
}

// Cookie class
class Cookie {
  constructor(flavor, size, x, y) {
    this.flavor = flavor;
    this.size = size;
    this.x = x;
    this.y = y;
  }

  show() {
    // base color depending on flavor
    if (this.flavor == "choc-chip") fill(196, 146, 96);
    else if (this.flavor == "plain") fill(220, 180, 120);
    else if (this.flavor == "strawberry") fill(255, 150, 180);
    else if (this.flavor == "double-choc") fill(100, 50, 30);
    else fill(200); // fallback

    ellipse(this.x, this.y, this.size);

    // decorations based on flavor
    const s = this.size * 0.1;
    if (this.flavor == "choc-chip") {
      fill(60);
      ellipse(this.x - this.size*0.22, this.y - this.size*0.15, s);
      ellipse(this.x + this.size*0.18, this.y - this.size*0.10, s);
      ellipse(this.x - this.size*0.05, this.y + this.size*0.12, s);
      ellipse(this.x + this.size*0.20, this.y + this.size*0.18, s);
    } else if (this.flavor == "double-choc") {
      fill(30);
      ellipse(this.x - this.size*0.1, this.y, s);
      ellipse(this.x + this.size*0.20, this.y - this.size*0.10, s);
      ellipse(this.x, this.y + this.size*0.20, s);
    } else if (this.flavor == "strawberry") {
      fill(255, 200, 220);
      ellipse(this.x - this.size*0.22, this.y - this.size*0.15, s);
      ellipse(this.x + this.size*0.18, this.y - this.size*0.10, s);
      ellipse(this.x - this.size*0.10, this.y + this.size*0.12, s);
      ellipse(this.x + this.size*0.20, this.y + this.size*0.18, s);
      ellipse(this.x + this.size*0.30, this.y + this.size*0.05, s);
    }
  }

  // move cookie
  move(dx, dy) {
    this.x += dx;
    this.y += dy;
    this.x = constrain(this.x, this.size/2, width - this.size/2);
    this.y = constrain(this.y, this.size/2, height - this.size/2);
  }

  // randomize flavor
  randomFlavor() {
    const flavors = ["choc-chip", "plain", "strawberry", "double-choc"];
    this.flavor = random(flavors);
  }
}

// Step 5: add movement (keyboard arrows)
function keyPressed() {
  let step = 10;
  if (keyCode === LEFT_ARROW) cookie.move(-step, 0);
  if (keyCode === RIGHT_ARROW) cookie.move(step, 0);
  if (keyCode === UP_ARROW) cookie.move(0, -step);
  if (keyCode === DOWN_ARROW) cookie.move(0, step);
}

// Step 6: add flavor randomizer (mouse click)
function mousePressed() {
  cookie.randomFlavor();
}
