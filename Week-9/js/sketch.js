//variables
let cake;
let icecream;
let ball;
let colors1;
let colors2;
let colors3;
let balltexture;
let shapeArray = [];
var boxTranslationX = -100;
var boxTranslationY = -100;
var cylinderTranslationX = 210;
var cylinderTranslationY = -25;
//preload
function preload() {
  cake = loadImage('objects/cake.jpg');
  icecream = loadImage('objects/icecream.jpg');
  colors1 = loadImage('objects/colors1.jpg');
  colors2 = loadImage('objects/colors2.jpg');
  colors3 = loadImage('objects/colors3.jpg');
  ball = loadModel('objects/model.obj', true);
  balltexture = loadImage('objects/ball.png');
}
//setup
function setup() {
  createCanvas(800, 600, WEBGL);
  shapeArray.push(new shapeclass("box", 50, 50, 50, boxTranslationX, boxTranslationY, 0.02, 0.03, 0, cake));
  shapeArray.push(new shapeclass("cylinder", 80, 90, 0, cylinderTranslationX, cylinderTranslationY, 0.01, 0.1, 0, colors1));
  shapeArray.push(new shapeclass("box", 75, 75, 75, -210, -150, 0.01, 0.01, 0, colors3));
  shapeArray.push(new shapeclass("cylinder", 25, 40, 0, 100, 150, 0.01, 0.05, 0, colors2));
  shapeArray.push(new shapeclass("cylinder", 30, 90, 0, -190, 180, 0.01, 0.02, 0, icecream));
}
//draw
function draw() {
  background(200);
  normalMaterial();
  image(cake);
  for (var i = 0; i < shapeArray.length; i++) {
    shapeArray[i].draw(frameCount);
  }
//custom model
  push();
  scale(0.7);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(balltexture)
  model(ball);
  pop();
//movement
if (mouseIsPressed) {
    boxTranslationX = 0;
    boxTranslationY = 0;
    boxTranslationX = floor(random(600));
    boxTranslationY = floor(random(400));
    cylinderTranslationX = 0;
    cylinderTranslationY = 0;
    cylinderTranslationX = floor(random(600));
    cylinderTranslationY = floor(random(400));
  }
  }
