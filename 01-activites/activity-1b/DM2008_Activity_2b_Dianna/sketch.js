// DM2008
// Activity 1b (Georg Nees)

let x;
let y;
let w;

let o = 5

function setup() {
  createCanvas(800, 800)
  background("#000000");
}

function draw() {
  
  x = random(width);
  y = random(height);
  w = random(10, 80);
  
  // background(240,40);
  background(0,0,0,o);
  

  fill("#991C1C")
  stroke("#991C1C");
  ellipse(x, y, w, 30);
  
  fill("#CD2323")
  stroke("#FF9191");
  ellipse(x, y, 10 ,20);
  
  
  fill("#111010")
  stroke("#F13838");
  ellipse(x, y, 10 ,20);
   
  fill("#000000")
  stroke("#000000");
  strokeWeight(1)
  rect(mouseX, mouseY, 55, 40);
  
  noFill()
  stroke(255,0 ,0 )
  ellipse(mouseX, mouseY, random(40,100));
  
  w = w + 1 ;
  
  
 
  
}

function keyPressed() {
    saveCanvas("activity1b-image", "jpg");
}