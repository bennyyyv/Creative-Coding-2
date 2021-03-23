//Variables
let playing;
let button;
let myVideos = [];

//Setup
function setup() {
  //videos
    myVideos.push(new myVideo("assets/video.mp4", 50, 100, 350, 480));
    myVideos.push(new myVideo("assets/video.mp4", 460, 100, 280, 360));
    myVideos.push(new myVideo("assets/video.mp4", 600, 100, 350, 880));
    myVideos.push(new myVideo("assets/video.mp4", 900, 100, 480, 360));
    myVideos.push(new myVideo("assets/video.mp4", 1300, 500, 980, 560));
    createCanvas(screen.width, screen.height);
    background(0);
//Play Button
    button = createButton('Start');
    button.position(10, 100);
    button.mousePressed(playVideo);
    // create all the videos
    for (let i = 0; i < myVideos.length; i++) {
        let tempVideo = createVideo([myVideos[i].theVideoPath]);
        tempVideo.size(myVideos[i].theW, myVideos[i].theH);
        tempVideo.position(myVideos[i].theX, myVideos[i].theY);
        myVideos[i].settheVideoObject(tempVideo);
    }
}
//PlayVideo Function
function playVideo() {

    if (playing) {
        for (let i = 0; i < myVideos.length; i++) {
            let temp = myVideos[i].theVideoObject;
            temp.pause();
        }
        button.html('Play');
        playing = false;
    } else {
        for (let i = 0; i < myVideos.length; i++) {
            let temp = myVideos[i].theVideoObject;
            temp.loop();
        }

        button.html('Pause');
        playing = true;

    }

}