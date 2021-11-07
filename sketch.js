var min, sec, hr; 


function preload() {
 
}

function setup() {
  createCanvas(1000,500);
  
  angleMode(DEGREES)
}

function draw() {
  background("black");
  translate(200,200);
  rotate(-90)

  var mn = minute();
  var sc = second();
  var hr = hour();

  strokeWeight(8);
  stroke("white");
  noFill();
  ellipse(0, 300, 330, 330);
 
  strokeWeight(8);
  stroke("red");
  noFill();
  let secAngle = map(sc, 0, 60, 0, 360);
  arc(0, 300, 300, 300, 0, secAngle);

  strokeWeight(8);
  stroke("lime");
  noFill();
  let minAngle = map(mn, 0, 60, 0, 360);
  arc(0, 300, 270, 270, 0, minAngle);

  strokeWeight(8);
  stroke("cyan");
  noFill();
  let hrAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 300, 240, 240, 0, hrAngle);

  push()
  rotate(+90)
  fill('white')
  textSize(30);
  textFont("Segoe UI")
  noStroke();
  text(hr + ":" + mn + ':' + sc, 250, 0);
  pop()

  drawSprites()
}