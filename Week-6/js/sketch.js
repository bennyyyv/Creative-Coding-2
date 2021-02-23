//Variables
var ninjaObjects;
var result, runresult;
var bush;
//preload
function preload() {
  result = loadStrings('assets/idle.txt');
  runresult = loadStrings('assets/run.txt');
}

function setup() {
    createCanvas(800,600);
    ninjaObjects = createSprite(300, 250, 50, 100);
    ninjaObjects.addAnimation('idle', result[0], result[result.length-1]);
    ninjaObjects.addAnimation('run', runresult[0], runresult[runresult.length-1]);

    bush = createSprite(700, 300, 10, 10);
    //compact way to add an image
    bush.addImage(loadImage('assets/bush.png'));
}

// display all the frames using the draw function as a loop
function draw()
{
    background(120);

    if(keyDown('w'))
    {
      ninjaObjects.changeAnimation('run');
      ninjaObjects.velocity.y += .5;
      if(ninjaObjects.collide(bush))
      {
        ninjaObjects.changeAnimation('idle');
      }
    }
    else
    {
      ninjaObjects.changeAnimation('idle');
      ninjaObjects.velocity.x = 0;
    }

    if(keyDown('a'))
    {
      ninjaObjects.changeAnimation('run');
      ninjaObjects.velocity.x -= .5;
      if(ninjaObjects.collide(bush))
      {
        ninjaObjects.changeAnimation('idle');
      }
    }
    else
    {
      ninjaObjects.changeAnimation('idle');
      ninjaObjects.velocity.x = 0;
    }

    if(keyDown('s'))
    {
      ninjaObjects.changeAnimation('run');
      ninjaObjects.velocity.y -= .5;
      if(ninjaObjects.collide(bush))
      {
        ninjaObjects.changeAnimation('idle');
      }
    }
    else
    {
      ninjaObjects.changeAnimation('idle');
      ninjaObjects.velocity.x = 0;
    }

    if(keyDown('d'))
    {
      ninjaObjects.changeAnimation('run');
      ninjaObjects.velocity.x += .5;
      if(ninjaObjects.collide(bush))
      {
        ninjaObjects.changeAnimation('idle');
      }
    }
    else
    {
      ninjaObjects.changeAnimation('idle');
      ninjaObjects.velocity.x = 0;
    }

    ninjaObjects.debug = mouseIsPressed;
    bush.debug = mouseIsPressed;
    drawSprites();
}
