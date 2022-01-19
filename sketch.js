var Runner, Runner_running, Runner;
var path, path_Image;

function preload(){
  //pre-load images
  Runner_running = loadAnimation("Runner-1.png","Runner-2.png");
  path_Image = loadImage("path.png");
}

function setup(){
  createCanvas(800,800);
 path=createSprite(400,400);
 Runner=createSprite(200,200);
 
}

function draw() {
  background(220);
 
}
