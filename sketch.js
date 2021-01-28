var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 

function preload(){
}

function setup() {
  createCanvas(displayWidth,displayHeight);

  //To use angle in Degrees
  angleMode(DEGREES);
}

function draw() {
  background(0);  

textSize(30);
fill("pink");
text(3,290,213);

textSize(30);
fill("pink");
text(6,182,307);

textSize(30);
fill("pink");
text(9,90,213);

textSize(30);
fill("pink");
text(12,180,113);

  //Translation and rotation 
  translate(200,200)
  rotate(-90)

  //Calculating time using predefined func from p5.js
  //hour() tells current hour of the system
  hr = hour();
  //minutes() tells current minutes of the system
  mn = minute();
  //second() tells current seconds of the system
  sc = second();

  //To create ab iterative rotation
  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn,0,60,0,360)
  hrAngle = map(hr % 12,0,12,0,360)

  //drawing seconds hand
  push();
  //rotate the hand based on angle calculated
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(3);
  line(0,0,100,0);
  pop()

  //drawing mins hand
  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(5);
  line(0,0,75,0);
  pop();

  //drawing hr hand
  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  stroke(255,0,255);
  point(0,0);

  //drawing the arcs
  strokeWeight(4);
  noFill();

  //Seconds
  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle);

  strokeWeight(6);
  noFill();
  //Minutes
  stroke(0,255,0);
  arc(0,0,275,275,0,mnAngle);

  strokeWeight(10);
  noFill();
  //Hour
  stroke(0,0,255);
  arc(0,0,245,245,0,hrAngle);


  
}