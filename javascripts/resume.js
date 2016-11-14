
//= require ./p5/p5
//= require ./p5/p5.dom

"strict";
function setup() {
  var fancyCanvas = createCanvas(1000, 1000);
  fancyCanvas.parent("content");
  smooth(8);
  noStroke();
  colorMode(HSB, 360, 100, 100, 100);
  background(0, 0, 100, 0);
  textFont("Arial Narrow");
  textAlign(CENTER);
  frameRate(12);
  textSize(40);
  text("Onemancrew - What I Can Do", width / 2,100);
}


function drawArc( h, s, b,  a,  r,
             start, end, message, messageOffset) {
  fill(h, s, b, a);
  noStroke();
  arc(width/2, height/2, r, r, start * PI, end * PI);
  translate(width / 2, height / 2);
  textSize(20);
  var lineNum = 0;
  var lineHeight = 48;
  var messageArr = message.split("\n");
  for (var idx in messageArr) {
    var line = messageArr[idx];
    var rText = r + messageOffset - lineNum * lineHeight;
    var arclength = (((end - start) * PI * rText) / 4) - textWidth(line) / 2;
    for (var i = 0; i < line.length; i++)
    {
      var currentChar = line.charAt(i);
      var w = textWidth(currentChar);
      arclength += w/2;
      var theta = start * PI + arclength / rText * 2;
      push();
      translate(rText/2*cos(theta), rText/2*sin(theta));
      rotate(theta+0.5*PI);
      fill(0,0,95);
      text(currentChar,0,0);
      pop();
      arclength += w/2;
    }
    lineNum ++;
  }
  translate(-width / 2, -height / 2);
}

function drawArcStroke(h, s, b, a, d,r, start, end, message, messageOffset){
stroke(h, s, b, a, d);
noFill();
strokeCap(SQUARE);
strokeWeight(d);
arc(width/2, height/2, r, r, start * PI, end * PI);
noStroke();
textSize(32);
textFont("Haettenschweiler");
translate(width / 2, height / 2);
var lineNum = 0;
var lineHeight = 48;
var messageArr = message.split("\n");
for (var idx in messageArr) {
  var line = messageArr[idx];
  var rText = r + messageOffset - lineNum * lineHeight;
  var arclength = (((end - start) * PI * rText) / 4) - textWidth(line) / 2;
  for (var i = 0; i < line.length; i++)
  {
    var currentChar = line.charAt(i);
    var w = textWidth(currentChar);
    arclength += w/2;
    var theta = start * PI + arclength / rText * 2;
    push();
    translate(rText/2*cos(theta), rText/2*sin(theta));
    rotate(theta+0.5*PI);
    fill(0,0,30,100);
    text(currentChar,0,0);
    pop();
    arclength += w/2;
  }
  lineNum ++;

}
  translate(-width / 2, -height / 2);
}

function draw() {

  /*
  ellipse(width / 2, height / 2,750,750);

  fill(200,60,100,50);
  ellipse( 0.9 * width, 1.29 * height, 1200, 1200);

  drawArc(70, 60, 95, 100,590, -0.5, -0.25, "Video Editing", 25);
  drawArc(105, 50, 95, 100,620, -0.25, 0, "Photography", 25);
  drawArc(80, 65, 75, 92, 650, -0.3, -0.21, "Documentry", 25);
  drawArc(170, 60, 90,100, 550, 0, 0.25, "Visual Design", 25);
  drawArc(190, 50, 100, 100, 380, 0.25, 0.5, "Front-end\nDevelopment", 55);
  drawArc(185, 65, 80, 95, 500, 0.19, 0.27, "UX", -55);

  drawArc(220, 30, 100,100, 430, 0.5, 0.75, "Data\nVasualization", 55);

  drawArc(280, 25, 100, 90, 500, 0.75, 1, "Graphic\nDesign", 55);
  drawArc(265, 25, 80, 90, 600, 0.7, 0.83, "Infographic", 25);


  drawArc(330, 45, 100, 100,450, 1, 1.25, "3D\nDesign", 55);
  drawArc(330, 35, 80, 95, 600, 1.02, 1.08, "3D Printing", 25);
  drawArc(30, 75, 100, 100,550, 1.25, 1.5, "Maker", 25);
  drawArc(350, 65, 95, 90, 650, 1.2, 1.27, "Handcraft", 25);
  drawArc(55, 55, 70, 100,500, 1.4, 1.48, "Managment", -25);
  drawArc(50, 85, 90, 100, 420, 1.32, 1.42, "Mechcnism", -55);
  drawArc(25, 85, 90, 100, 300, 1.27, 1.35, "Electrionic", -55);

  stroke(105, 70, 70, 80);
  strokeWeight(60);
  drawArc(0, 0, 0, 0, 400, -0.4, 0.1, " ", 0);


  stroke(205, 70, 80, 80);
  strokeWeight(50);
  drawArc(0, 0, 0, 0, 250, 0.15, 0.9, " ", 0);

  noStroke();
  drawArc(0, 0, 0, 0, 400, -0.4, 0.1, "video production", -10);
  drawArc(0, 0, 0, 0, 250, 0.15, 0.9, "Interactive Design", -10);

  fill(190,10,30,80);
  noStroke();
  ellipse(width / 2, height / 2, 150, 150);

  fill(0, 0, 90);
  text("Product\nManagment", width / 2, (height / 2 -20));

*/
drawArc(70, 80, 80, 100, 560, -0.5, 0, "", -205);
drawArc(185, 100, 80, 100, 640, 0, 0.5, "", -205);
drawArc(235, 55, 90, 100, 720, 0.5, 1, "", -205);
drawArc(340, 70, 90, 100, 640, 1, 1.5, "", -205);

drawArc(60, 80, 100, 90, 470, -0.45, -0.28, "HTML/CSS", 25);
drawArc(80, 80, 100, 90, 350, -0.3, -0.15, "JS", 25);
drawArc(100, 80, 100, 80, 400, -0.2, -0.08, "Processing/P5", 25);

drawArc(140, 80, 95, 85, 480, -0.05, 0.08, "Web Design", 25);

drawArc(175, 80, 95, 80, 500, 0.12, 0.27, "Graphic", 25);
drawArc(160, 80, 100, 90, 530, 0.07, 0.15, "UX", 25);
drawArc(205, 50, 100, 90, 420, 0.32, 0.49, "Data\nVisualization", 25);

drawArc(195, 80, 100, 80, 590, 0.25, 0.34, "infographic", 25);
drawArc(215, 50, 100, 90, 630, 0.55, 0.7, "Photography", 25);
drawArc(230, 50, 100, 80, 610, 0.65, 0.75, "Video", 25);
drawArc(270, 40, 100, 80, 610, 0.82, 0.95, "Video", 25);

drawArc(330, 50, 100, 90, 550, 1.02, 1.12, "3D Printing", 25);
drawArc(340, 50, 95, 90, 450, 1.1, 1.2, "Electrionic", 25);
drawArc(350, 60, 95, 90, 400, 1.19, 1.3, "Mechcnism", 25);
drawArc(355, 40, 95, 90, 550, 1.4, 1.48, "Handcraft", 25);

drawArcStroke(330, 50, 95, 90, 55, 700, -1.05, -0.15, "Maker", -20);
drawArcStroke(50, 95, 95, 90, 45, 670, -0.49, 0.24, "Web Devoloper", -20);
drawArcStroke(180, 80, 95, 90, 60, 750, 0.48, 0.99, "photographer", -20);
drawArcStroke(80, 80, 95, 90, 50, 720, 0.13, 0.49, "Designer", -20);

/*
textSize(40);

*/

fill(0,0,100,85);
/*

*/

}
