function setup() {
	// define artboard size
	createCanvas(500,550);
	// Set here the values that are not changing all over the sketch


}

function draw() {
colorMode(HSB)
stroke(25);
strokeWeight(1);
colorMode(RGB);
background(100);
rectMode(CORNER);


//signal
noFill();
if(mouseX>60){
stroke(80)
ellipse(250,150, mouseX-60);}
stroke(95);
if(mouseX>120) {
ellipse(250,150, mouseX-120);}
stroke(65);
ellipse(250,150, mouseX);
stroke(50)
ellipse(250,150, mouseX+60);





//Neck
colorMode(HSB);
fill(159, 33, 45);
rect(240, 285, 20,15);
fill(159, 33, 35);
rect(235, 300, 30, 25);


//legs
rectMode(CENTER);
rect(230, 465, 18, 120);
rect(270, 465, 18, 120);
rect(270,535, 35, 30, 60, 60, 1,1);
rect(230,535, 35, 30, 60, 60, 1,1);
fill(100);


//Arms
rectMode(CORNER);
fill(132, 26, 80);
arc(192.5, 445, 10, 55, 3*PI/4 , PI/4, PIE)
arc(307.5, 445, 10, 55, 3*PI/4 , PI/4, PIE)
fill(159, 33, 35);
rect(185, 340, 15, 85);
rect(300, 340, 15, 85);
fill(159, 33, 15);
ellipse(200, 340, 30, 30);
ellipse(300, 340, 30, 30);


//body
fill(159, 33, 45);
rect(200, 325, 100, 150, 0, 0, 30, 30);


//toppa
fill(132, 26, 80);
rect(215, 400, 70, 60, 0, 0, 30, 30);
fill(146, 28, 52);
ellipse(230, 415, 10);
ellipse(270, 415, 10);
ellipse(270, 435, 10);
ellipse(230, 435, 10);
fill(159, 33, 15);
ellipse(230, 435, 4);
ellipse(270, 435, 4);
ellipse(270, 415, 4);
ellipse(230, 415, 4);


//Head
colorMode(HSB);
stroke(159, 33, 35);
fill(159, 33, 15);
triangle(240, 220, 260, 220, 250,150);
fill(132, 26, 80);
ellipse(250,150, 10);
fill(146, 28, 52);
rectMode(CENTER);
rect(250, 240, 80, 90, 90, 90, 5,5);


//mouth
stroke(25);
strokeWeight(3);
fill(132, 26, 80);
arc(250, 265, 30, 20, PI, 0, CHORD)
line( 250,255,250,264);
line( 243,256	,243,264);
line( 257,256	,257,264);


//eyes
strokeWeight(1);
fill(159, 33, 35);
rect(250, 230, 60, 25, 10);

fill(0);
rect(237, 230, 15,sqrt(mouseY)/3+6, 10);
rect(263, 230, 15, sqrt(mouseY)/3+6 , 10);





}
