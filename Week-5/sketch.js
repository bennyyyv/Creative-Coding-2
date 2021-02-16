//Variables
var ninjaIdle = [];
var ninjaRun = [];
var ninjaRunLeft = [];
var currentObjects;
var animation = [];
var runanimation = [];
var runlefanimation = [];
var currentAnimation;
var idleresult;
var runresult;
var runleftresult;
var counter = 0;
var myInterval;
var index = 0;

//preload
function preload () {
  idleresult = loadStrings('assets/idle.txt')
  runresult = loadStrings('assets/run.txt')
  runleftresult = loadStrings('assets/runleft.txt')
}

//setup
function setup () {
  createCanvas(800, 600);

//idleresult
for (var i = 0; i < idleresult.length; i++)
{
  ninjaIdle.push(new imageclass('assets/' + result[i], 0, 0));
}

//runresult & runleftresult
for (var i = 0; i < runresult.length; i++)
{
  ninjaRun.push(new imageclass('assets/' + runresult[i], 0, 0));
  runanimation[i] = ninjaRun[i].getImage();
  ninjaRunLeft.push(new imageclass('assets/' + runleftresult[i], 0, 0));
  runlefanimation[i] = ninjaRunLeft[i].getImage();
}

//curent objects
currentObjects = ninjaIdle;

//interval
myInterval = setInterval(incrementIndex, 50);
}

//draw
function draw() {
background(120);

//key presses
if (keyIsPressed) {
  clearInterval(myInterval);
  myInterval = null;

  index++;
  if (index > 3) {
    incrementIndex();
    index = 0;
  }
  if (key == "d") {
    currentAnimation = runanimation;
    currentObjects = ninjaRun;

    if (counter >= currentAnimation.length) {
      counter = 0;
    }
  currentObjects[counter].setX(currentObjects[counter].getX() + 2);

  for (var i = 0; i < ninjaRunLeft.length; i++) {
    ninjaRunLeft[i].setX(currentObjects[0].getX());
  }
  ninjaRun = currentObjects;
  }
  else if (key == "a") {
    currentAnimation = runlefanimation;
    currentObjects = ninjaRunLeft;

    if (counter >= currentAnimation.length) {
      counter = 0;
    }
    currentObjects[counter].setX(currentObjects[counter].getX() - 2);

    for (var i = 0; i < ninjaRun.length; i++) {
      ninjaRun[i].setX(currentObjects[0].getX());
    }
    else {
      if (myInterval == null) {
        myInterval = setInterval(incrementIndex, 50);
      }
      currentObjects = ninjaIdle;
      currentAnimation = idleanimation;
    }
    image(currentAnimation[counter], currentObjects[counter].getX(), currentObjects[counter].getY());
  }

  //incrementIndex

function incrementIndex() {
  counter += 1;
  if (counter >= currentObjects.length) {
    counter = 0;
  }
}
}




}
