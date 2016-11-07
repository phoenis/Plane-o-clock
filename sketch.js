var globe;
var tree;
var sun;
var moon;
var globo;
var spaceship;
var myFont;
function preload() {
  globe = loadImage("libraries/globo.png");
  tree = loadImage("libraries/tree.png");
  sun = loadImage("libraries/sun.png");
  moon = loadImage("libraries/moon.png");
  globo = loadImage("libraries/globo bianco.png");
  spaceship = loadImage("libraries/spaceship.png");
  myFont = loadFont('libraries/Lato-Regular.ttf');
}

function earth(size,value) {
	push();
	rotate(90);
	var size;
	var h = hour();
	if(h >= 7+value && h <= 17+value) {
	image(globe,-size/2,-size/2,size,size)
	} else {
		image(globo,-size/2,-size/2,size,size)
	}
	pop();
}

function myHour(size,distance,value) {
	push();
	var h = hour();
	translate(distance*cos(h*30),distance*sin(h*30));
	
	rotate(90);
	rotate(h*30);
	var size;
	if(h >= 7+value && h <= 17+value) {
		background(140,203,255);
		image(sun,-size/2,-size/2,size,size);
	} else {
		background(80,116,162);
		image(moon,-size/2,-size/2,size,size);
	}
	pop();
	pop();

}

function myMinute(distance) {
	push();
	var size = 20;
	
	var m=minute();
	
	translate(distance*cos(m*6),distance*sin(m*6));

	push();
	rotate(90);
	rotate(m*6);

	image(tree,-size/2,0,size,size);
	
	pop();
	pop();
	push();
		for(var t=0; t<=minute()-1; t+=1) {
						push();	
						translate(distance*cos(t*6),distance*sin(t*6));	
						rotate(90);
						rotate(t*6);
						
						image(tree,-size/2,0,size,size);
						pop();
			}
	pop();
	pop();
}

function mySecond(size,distance,value) {
	push();
	strokeWeight(0.1);
	stroke(100);
	fill(255);
	
	var s = second();
	translate(distance*cos(s*6),distance*sin(s*6));

	push();
	scale(size);
	rotate(120);
	rotate(second()*6);
	
	var h = hour();
	if(h >= 7+value && h <= 17+value) {
		beginShape();
			vertex(0,0);
			vertex(13,0);
			vertex(7,9);
			vertex(4.5,6);
			vertex(3,7);
			vertex(3,4.5);
			vertex(11,1);
			vertex(2.3,3);
		endShape(CLOSE);
	} else {
		rotate(60);
		image(spaceship,0,-(size*10)/2,size*4.5,size*8);
	}
	
	pop();
	pop();
}

function myText(size,distance) {
	rotate(90);
	textFont(myFont);
	textSize(size);
	textAlign(CENTER);
	fill(89,165,227);
	
	text("Click to change the light!", 0, distance);
}

function setup() {
  createCanvas(600,600);
  angleMode(DEGREES);
}

var value = 0;
function draw() {
	translate(width/2, height/2);
	rotate(-90);
  
  myHour(50,220,value);
  earth(340,value);
  myMinute(189);
  mySecond(2,220,value);
  
  myText(20,250);
}
function mouseClicked() {
  if (value == 0) {
    value = 12;
  } else {
    value = 0;
  }
}
