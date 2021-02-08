var ninja;
var animation = [];
var ninjaObjects = [];
var i = 0;
var x = 0;



function preload() {

    // Bring in all the assets from our folder
    // and create all our objects
    ninja = new imageclass('assets/Idle__000.png', 0, 0);
    ninjaObjects[0] = ninja;
    ninja = new imageclass('assets/Idle__001.png', 0, 0);
    ninjaObjects[1] = ninja;
    ninja = new imageclass('assets/Idle__002.png', 0, 0);
    ninjaObjects[2] = ninja;
    ninja = new imageclass('assets/Idle__003.png', 0, 0);
    ninjaObjects[3] = ninja;
    ninja = new imageclass('assets/Idle__004.png', 0, 0);
    ninjaObjects[4] = ninja;
    ninja = new imageclass('assets/Idle__005.png', 0, 0);
    ninjaObjects[5] = ninja;
    ninja = new imageclass('assets/Idle__006.png', 0, 0);
    ninjaObjects[6] = ninja;
    ninja = new imageclass('assets/Idle__007.png', 0, 0);
    ninjaObjects[7] = ninja;
    ninja = new imageclass('assets/Idle__008.png', 0, 0);
    ninjaObjects[8] = ninja;
    ninja = new imageclass('assets/Idle__009.png', 0, 0);
    ninjaObjects[9] = ninja;

    for (var i = 0; i < ninjaObjects.length; i++) {
        animation[i] = ninjaObjects[i].getImage();
    }

}

// create the canvas
function setup() {

    createCanvas(641, 542);
    setInterval(incrementIndex, 50);
}

// display all the frames using the draw function as a loop
function draw() {

    background(120);

    // draw each frame based on the index in the array
    image(animation[i], ninjaObjects[i].getX(), ninjaObjects[i].getY());

}

function incrementIndex()
{
     // increment the index
     i += 1;

     // if we reach the end of the array, start over
     if (i >= animation.length) {
         i = 0;
     }
}
