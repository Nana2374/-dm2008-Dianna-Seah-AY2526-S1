function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(170, 160, 181, 10);

  // Draw multiple faces with different anchors + sizes
  //Cat Face
  catFace(200, 200, 150); // static
  catFace(mouseX, mouseY, 60); // movable
}

// Define a composite graphic using relative values (cat face)
function catFace(x, y, size) {
  // ears
  stroke(0);
  strokeWeight(1);
  fill("#FFFFFF");
  //L ear
  triangle(
    x - size / 2.3,
    y - size / 4.5,
    x - size / 40,
    y - size / 3,
    x - size / 3,
    y - size / 1.5
  );

  //R ear
  triangle(
    x + size / 2.3,
    y - size / 4.5,
    x + size / 40,
    y - size / 3,
    x + size / 3,
    y - size / 1.5
  );

  noStroke();
  fill("#FAD8E8");
  //INNER EARRR
    //L ear
  triangle(
    x - size / 2.6,
    y - size / 4.5,
    x - size / 10,
    y - size / 3,
    x - size / 3.3,
    y - size / 1.8
  );

  //R ear
  triangle(
    x + size / 2.6,
    y - size / 4.5,
    x + size / 10,
    y - size / 3,
    x + size / 3.3,
    y - size / 1.8
  );
  
  
  stroke(0);
  strokeWeight(1);
  // head
  fill("#FFFFFF");
  ellipse(x, y, size, size / 1.1);
  
  noStroke();
  fill("#FAD8E8");
  //Cheeks
  ellipse(x - size / 3.2, y - size / -6, size / 4); //L
  ellipse(x + size / 3.2, y - size / -6, size / 4); //R
  
  
  // eyes
  fill(0);
  ellipse(x - size / 4, y - size / -50, size / 7); //L
  ellipse(x + size / 4, y - size / -50, size / 7); //R

  noStroke();
  // nose
  fill(200, 100, 100);
  triangle(
    x - size / 12,
    y + size / 12,
    x + size / 12,
    y + size / 12,
    x,
    y + size / 6
  );

  // mouth
  noFill();
  stroke(0);
  strokeWeight(2);
  line(x, y + size / 6, x, y + size / 5);
  arc(x - size / 16, y + size / 5, size / 8, size / 9, 0, PI);
  arc(x + size / 16, y + size / 5, size / 8, size / 9, 0, PI);

  stroke(0);
  strokeWeight(2);
  // whiskers Left
  //top
  line(x - size / 2.5, y + size / 8, x - size / 1.8, y + size / 8);
  //bottom one
  line(x - size / 3, y + size / 5, x - size / 1.8, y + size / 4);

  // whiskers Right
  //top
  line(x + size / 2.5, y + size / 8, x + size / 1.8, y + size / 8);
  //bottom one
  line(x + size / 3, y + size / 5, x + size / 1.8, y + size / 4);
}

function keyPressed() {
  if (key === " ") {  // space bar
    saveCanvas("activity1b-image", "jpg");
  }
}
