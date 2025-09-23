// DDM2008
// Activity 1a

// Run the sketch, then click on the preview to enable keyboard
// Use the 'Option' ('Alt' on Windows) key to view or hide the grid
// Use the 'Shift' key to change overlays between black & white
// Write the code for your creature in the space provided

function setup() {

}

function draw() {
  createCanvas(400, 400);
  background("#BFE5EA");
  
  
  //brown
  fill("#956538")
  stroke("#956538")
  //head 
  ellipse(200, 160 ,150,130);
  //ears brown
  ellipse(140,105,70);
  ellipse(260,105,70);
  //body
  rect(149, 180, 103, 135, 50); 
  //legs
  rect(153, 230, 40, 130 , 20); 
  rect(210, 230, 40, 130 , 20); 
  //hands
  noFill();
  strokeWeight(30);
  arc(207, 275, 150, 170, PI, PI + QUARTER_PI);
  arc(249 , 181, 80, 90, 0, HALF_PI);

  
  //white
  fill("#E2D7CC")
  stroke("#E2D7CC")
  strokeWeight(1);
  //mouth
  ellipse(200, 185, 60, 45);
  //stomach
  rect(170, 225, 60, 75, 30);
  
  //yellow
  fill("#F5C770")
  stroke("#F5C770")
  strokeWeight(1);
  //ears inner
  ellipse(140, 105 ,30);
  ellipse(260, 105 ,30);
  //paw 
   ellipse(290 , 180 , 15, 12);
  
  //darkbrown
  fill("#312408")
  stroke("#312408")
  strokeWeight(1);
  //eyes
  ellipse(165, 165, 17);
  ellipse(235, 165, 17);
  //nose
  triangle(190, 170, 200, 180, 210, 170);
  //mouth
  noFill();
  strokeWeight(4);
  arc(212, 179, 20, 20, HALF_PI, PI);
  arc(190, 179, 20, 20, 0, HALF_PI);
  
   //red
  fill("#C33D3D");
  stroke("#AD2C2C");
  strokeWeight(1);
  //ribbon
  quad(200 , 215, 245, 200, 240, 235, 200, 220);
  quad(200 , 215, 155, 200, 164, 235, 200, 220);
  rect(194, 210, 15, 15, 5); 
  
  
  fill("#C33D3D");
  stroke("#C33D3D");
  //heart 1
  circle(75, 190, 25);
  circle(90, 180, 25);
  triangle(75, 203, 100, 205, 103, 180);
  //heart 2
  circle(310, 242, 18);
  circle(321, 250, 18);
  triangle(302, 238, 300, 265, 326, 258);
   
  noFill();
  stroke("#AD2C2C");
  strokeWeight(3);
  arc(193, 214, 38, 7, HALF_PI, PI);
  arc(210, 214, 35, 7, 0, HALF_PI);
  
  
  helperGrid(); // do not edit or remove this line
}
