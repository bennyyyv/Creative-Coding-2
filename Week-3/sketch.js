// variables
var counter = 0;
var shape1X = 40, shape1Y = 140;
var shape2X = 640, shape2Y = 140;
var shape3X = 140, shape3Y = 340;
var shape4X = 440, shape4Y = 340;
var shape5X = 340, shape5Y = 140;
var shape6X = 550, shape6Y = 450;
var shape7X = 538, shape7Y = 231;
var shape8X = 130, shape8Y = 275;
var shape9X = 340, shape9Y = 290;
var shape10X = 50, shape10Y = 240;
//colors
var redColor1, greenColor1, blueColor1;
var redColor2, greenColor2, blueColor2;
var redColor3, greenColor3, blueColor3;
var redColor4, greenColor4, blueColor4;
var redColor5, greenColor5, blueColor5;
var redColor6, greenColor6, blueColor6;
var redColor7, greenColor7, blueColor7;
var redColor8, greenColor8, blueColor8;
var redColor9, greenColor9, blueColor9;
var redColor10, greenColor10, blueColor10;
//shape size
var shape1Size = 50;
var shape2Size = 90;
var shape3Sizew = 20;
var shape3Sizeh = 70;
var shape4Sizew = 120;
var shape4Sizeh = 70;
var shape5Sizew = 190;
var shape5Sizeh = 70;
var shape6Size = 90;
var shape7Size = 55
var shape9Sizew = 50;
var shape9Sizeh = 190;
//images and font
var blueghost;
var blueghostX = 100;
var blueghostY = 100;
var blueghostSpeed = 2;
var orangeghost;
var orangeghostX = 200;
var orangeghostY = 200;
var orangeghostSpeed = 3;
var redghost;
var redghostX = 300;
var redghostY = 300;
var redghostSpeed = 5;
var newFont;
var timerText = 0;
//preload
function preload() {
  blueghost = loadImage('assets/blueghost.png');
  orangeghost = loadImage('assets/orangeghost.png');
  redghost = loadImage('assets/redghost.png');
  newFont = loadFont('assets/Oswald.ttf');
}
//setup
// random colors
function setup()
{
    createCanvas(800,600);
    redColor1 = random(255);
    greenColor1 = random(255);
    blueColor1 = random(255);
    redColor2 = random(255);
    greenColor2 = random(255);
    blueColor2 = random(255);
    redColor3 = random(255);
    greenColor3 = random(255);
    blueColor3 = random(255);
    redColor4 = random(255);
    greenColor4 = random(255);
    blueColor4 = random(255);
    redColor5 = random(255);
    greenColor5 = random(255);
    blueColor5 = random(255);
    redColor6 = random(255);
    greenColor6 = random(255);
    blueColor6 = random(255);
    redColor7 = random(255);
    greenColor7 = random(255);
    blueColor7 = random(255);
    redColor8 = random(255);
    greenColor8 = random(255);
    blueColor8 = random(255);
    redColor9 = random(255);
    greenColor9 = random(255);
    blueColor9 = random(255);
    redColor10 = random(255);
    greenColor10 = random(255);
    blueColor10 = random(255);

    setInterval(changeSpeed, 1000);
}

//draw border
function draw()
{
    background(120);
    // top border
    noStroke();
    fill(100,200,300);
    rect(0,0,800,25);
    // left border
    rect(0,25,25,600);
    // bottom border
    rect(25,575,800,25);
    // right border
    rect(775,25,25,600);

    //new newFont
    fill('#fa8072');
    textFont(newFont);
    textSize(36);
    text('Ben Vanderbosch', 10, 50);
    text('Pacman with shapes', 10, 50);
    text("Time Passed: " + timerText, 550, 50);

//images
image(blueghost, blueghostX, blueghostY);
image(orangeghost, orangeghostX, orangeghostY);
image(redghost, redghostX, redghostY);
//imagespeed and movement
blueghostX += blueghostSpeed;
if(blueghostX >= width - blueghost.width || blueghostX  <= blueghost.width/8)
{
    blueghostSpeed *= -1;
}

orangeghostY += orangeghostSpeed;
if(orangeghostY >= height - orangeghost.height || orangeghostY  <= orangeghost.height/8)
{
    orangeghostSpeed *= -1;
}

redghostY += redghostSpeed;
if(redghostY >= height - redghost.height || redghostY  <= redghost.height/8)
{
    redghostSpeed *= -1;
}
redghostX += redghostSpeed;
if(redghostX >= width - redghost.width || redghostX  <= redghost.width/8)
{
    redghostSpeed *= -1;
}

    //random shapes and colors @ 1000
    if(counter > 1000)
    {
        shape1X = random(100,600);
        shape1Y = random(100,500);
        shape2X = random(100,600);
        shape2Y = random(100,500);
        shape3X = random(100,600);
        shape3Y = random(100,500);
        shape4X = random(100,600);
        shape4Y = random(100,500);
        shape5X = random(100,600);
        shape5Y = random(100,500);
        shape6X = random(100,600);
        shape6Y = random(100,500);
        shape7X = random(100,600);
        shape7Y = random(100,500);
        shape8X = random(100,600);
        shape8Y = random(100,500);
        shape9X = random(100,600);
        shape9Y = random(100,500);
        shape10X = random(100,600);
        shape10Y = random(100,500);

        redColor1 = random(255);
        greenColor1 = random(255);
        blueColor1 = random(255);
        redColor2 = random(255);
        greenColor2 = random(255);
        blueColor2 = random(255);
        redColor3 = random(255);
        greenColor3 = random(255);
        blueColor3 = random(255);
        redColor4 = random(255);
        greenColor4 = random(255);
        blueColor4 = random(255);
        redColor5 = random(255);
        greenColor5 = random(255);
        blueColor5 = random(255);
        redColor6 = random(255);
        greenColor6 = random(255);
        blueColor6 = random(255);
        redColor7 = random(255);
        greenColor7 = random(255);
        blueColor7 = random(255);
        redColor8 = random(255);
        greenColor8 = random(255);
        blueColor8 = random(255);
        redColor9 = random(255);
        greenColor9 = random(255);
        blueColor9 = random(255);
        redColor10 = random(255);
        greenColor10 = random(255);
        blueColor10 = random(255);

        shape1Size = random(100);
        shape2Size = random(100);
        shape3Sizew = random(50);
        shape3Sizeh = random(100);
        shape4Sizew = random(200);
        shape4Sizeh = random(100);
        shape5Sizew = random(200);
        shape5Sizeh = random(100);
        shape6Size = random(135);
        shape9Sizew = random(100);
        shape9Sizeh = random(200);

        counter = 0;
    }
    //counter
    counter++;
        // shape 1
        fill(redColor1,greenColor1,blueColor1);
        square(shape1X,shape1Y,shape1Size);

        // shape 2
        fill(redColor2,greenColor2,blueColor2);
        circle(shape2X,shape2Y,shape2Size);

        // shape 3
        fill(redColor3,greenColor3,blueColor3);
        rect(shape3X,shape3Y,shape3Sizew,shape3Sizeh);

        // shape 4
        fill(redColor4,greenColor4,blueColor4);
        rect(shape4X,shape4Y,shape4Sizew,shape4Sizeh);

        // shape 5
        fill(redColor5,greenColor5,blueColor5);
        ellipse(shape5X,shape5Y,shape5Sizew,shape5Sizeh);

        // shape 6
        fill(redColor6,greenColor6,blueColor6);
        rect(shape6X, shape6Y, shape6Size);

        // shape 7
        fill(redColor7,greenColor7,blueColor7);
        square(shape7X, shape7Y, shape7Size);

        // shape 8
        fill(redColor8,greenColor8,blueColor8);
        triangle(shape8X, shape8Y, 158, 220, 186, 275);

        // shape 9
        fill(redColor9,greenColor9,blueColor9);
        ellipse(shape9X,shape9Y,shape9Sizew,shape9Sizeh);

        // shape 10
        stroke(redColor10,greenColor10,blueColor10);
        strokeWeight(7);
        line(shape10X, shape10Y, 185, 475);
}
//speed change every 5s
function changeSpeed() {
      timerText++;
      if (timerText % 5 == 0) {
        blueghostSpeed = random(1,10);
        orangeghostSpeed = random(1,10);
        redghostSpeed = random(1,10);
    }
  }
