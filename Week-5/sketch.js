var ninja;
var idleanimation = [];
var runanimation = [];
var attackanimation = [];
var ninjaIdle = [];
var ninjaRun = [];
var ninjaAttack = [];
var i = 0;
var j = 0;
var x = 0;
var counter = 0;
var keyCode;
var w = 87;
var s = 83;
var a = 65;
var d = 68;
var keyMovement
var characterX = 0;
var characterY = 0;

function preload() {

  //IDLE ASSETS
      ninja = new imageclass('assets/Idle (1).png', 0, 0);
      ninjaIdle[0] = ninja;
      ninja = new imageclass('assets/Idle (2).png', 0, 0);
      ninjaIdle[1] = ninja;
      ninja = new imageclass('assets/Idle (3).png', 0, 0);
      ninjaIdle[2] = ninja;
      ninja = new imageclass('assets/Idle (4).png', 0, 0);
      ninjaIdle[3] = ninja;
      ninja = new imageclass('assets/Idle (5).png', 0, 0);
      ninjaIdle[4] = ninja;
      ninja = new imageclass('assets/Idle (6).png', 0, 0);
      ninjaIdle[5] = ninja;
      ninja = new imageclass('assets/Idle (7).png', 0, 0);
      ninjaIdle[6] = ninja;
      ninja = new imageclass('assets/Idle (8).png', 0, 0);
      ninjaIdle[7] = ninja;
      ninja = new imageclass('assets/Idle (9).png', 0, 0);
      ninjaIdle[8] = ninja;
      ninja = new imageclass('assets/Idle (10).png', 0, 0);
      ninjaIdle[9] = ninja;

      for (var i = 0; i < ninjaIdle.length; i++) {
          idleanimation[i] = ninjaIdle[i].getImage();
      }
      //RUN ASSETS
          ninja = new imageclass('assets/Run (1).png', 0, 0);
          ninjaRun[0] = ninja;
          ninja = new imageclass('assets/Run (2).png', 0, 0);
          ninjaRun[1] = ninja;
          ninja = new imageclass('assets/Run (3).png', 0, 0);
          ninjaRun[2] = ninja;
          ninja = new imageclass('assets/Run (4).png', 0, 0);
          ninjaRun[3] = ninja;
          ninja = new imageclass('assets/Run (5).png', 0, 0);
          ninjaRun[4] = ninja;
          ninja = new imageclass('assets/Run (6).png', 0, 0);
          ninjaRun[5] = ninja;
          ninja = new imageclass('assets/Run (7).png', 0, 0);
          ninjaRun[6] = ninja;
          ninja = new imageclass('assets/Run (8).png', 0, 0);
          ninjaRun[7] = ninja;
          ninja = new imageclass('assets/Run (9).png', 0, 0);
          ninjaRun[8] = ninja;
          ninja = new imageclass('assets/Run (10).png', 0, 0);
          ninjaRun[9] = ninja;

          for (var i = 0; i < ninjaRun.length; i++)
           {
               runanimation[i] = ninjaRun[i].getImage();
           }
      //ATTACK ASSETS
          ninja = new imageclass('assets/Attack (1).png', 0, 0);
          ninjaAttack[0] = ninja;
          ninja = new imageclass('assets/Attack (2).png', 0, 0);
          ninjaAttack[1] = ninja;
          ninja = new imageclass('assets/Attack (3).png', 0, 0);
          ninjaAttack[2] = ninja;
          ninja = new imageclass('assets/Attack (4).png', 0, 0);
          ninjaAttack[3] = ninja;
          ninja = new imageclass('assets/Attack (5).png', 0, 0);
          ninjaAttack[4] = ninja;
          ninja = new imageclass('assets/Attack (6).png', 0, 0);
          ninjaAttack[5] = ninja;
          ninja = new imageclass('assets/Attack (7).png', 0, 0);
          ninjaAttack[6] = ninja;
          ninja = new imageclass('assets/Attack (8).png', 0, 0);
          ninjaAttack[7] = ninja;
          ninja = new imageclass('assets/Attack (9).png', 0, 0);
          ninjaAttack[8] = ninja;
          ninja = new imageclass('assets/Attack (10).png', 0, 0);
          ninjaAttack[9] = ninja;

       for (var i = 0; i < ninjaAttack.length; i++)
       {
           attackanimation[i] = ninjaAttack[i].getImage();
       }

    }

    function setup() {

        createCanvas(641, 542);
        setInterval(incrementIndex, 50);
    }

    function draw() {

        background(120);


        //Key Presses
        if(keyIsPressed)
        {
            if(key == "d")
            {
                image(runanimation[j], ninjaRun[j].getX(), ninjaRun[j].getY());
                counter++;
                if(counter > 5)
                {
                    incrementRunIndex();
                    counter = 0;
                }
            }
        }
        else
        {
            image(idleanimation[i], ninjaIdle[i].getX(), ninjaIdle[i].getY());
        }

        if(keyIsPressed)
        {
            if(keyCode === 32)
            {
                image(attackanimation[j], ninjaAttack[j].getX(), ninjaAttack[j].getY());
                counter++;
                if(counter > 5)
                {
                    incrementRunIndex();
                    counter = 0;
                }
            }
        }
        else
        {
            image(idleanimation[i], ninjaIdle[i].getX(), ninjaIdle[i].getY());
        }


        }

        function incrementIndex()
        {
         i += 1;

         if (i >= idleanimation.length) {
             i = 0;
         }
        }

        function incrementRunIndex()
        {

         j += 1;

         if (j >= runanimation.length) {
             j = 0;
         }
        }

        function keyMovement()
        {
          if(keyIsDown(w))
          {
              characterY -= 10;
          }
          if(keyIsDown(s))
          {
              characterY += 10;
          }
          if(keyIsDown(a))
          {
              characterX -= 10;
          }
          if(keyIsDown(d))
          {
              characterX += 10;
          }

        }
