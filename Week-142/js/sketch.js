var mainColor = 255;

function setup() {
    createCanvas(640, 480);
    background(255);
    frameRate(25);
    noStroke();
    rectMode(CENTER);
}
function draw() {
    fill(random(mainColor),random(mainColor),random(mainColor), random(100));

    var size= random(50);

    square(random(width), random(height), size);

    if (frameCount % 2 == 0) {
        mainColor = 255 - mainColor;
    }
   saveFrames("myMovie",".png",1,25);

    if (frameCount > 125) { // 1 second * 25 fps = 25
        noLoop();
    }
}