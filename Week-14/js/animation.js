//Variables
var myAnimation;
var result
//preload
function preload() {
  result = loadStrings('assets/myAnimation.txt');
}

function setup() {
    createCanvas(800,600);
    myAnimation = createSprite(400, 300, 800, 600);
    myAnimation.addAnimation('idle', result[0], result[result.length-1]);
}

// display all the frames using the draw function as a loop
function draw()
{
    background(120);

    if(keyDown('w'))
    {
      myAnimation.changeAnimation('idle');
      myAnimation.velocity.y += .5;
    }
    else
    {
      myAnimation.changeAnimation('idle');
      myAnimation.velocity.x = 0;
    }

    if(keyDown('a'))
    {
      myAnimation.changeAnimation('idle');
      myAnimation.velocity.x -= .5;
    }
    else
    {
      myAnimation.changeAnimation('idle');
      myAnimation.velocity.x = 0;
    }

    if(keyDown('s'))
    {
      myAnimation.changeAnimation('idle');
      myAnimation.velocity.y -= .5;
    }
    else
    {
      myAnimation.changeAnimation('idle');
      myAnimation.velocity.x = 0;
    }

    if(keyDown('d'))
    {
      myAnimation.changeAnimation('idle');
      myAnimation.velocity.x += .5;
    }
    else
    {
      myAnimation.changeAnimation('idle');
      myAnimation.velocity.x = 0;
    }

    myAnimation.debug = mouseIsPressed;
    drawSprites();
}
