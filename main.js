song1="";
Song2="";

function setup() {
    canvas= createCanvas (600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video,0,0,600,500);
}
function preload() {
    song1=loadSound("music.mp3")
    Song2=loadSound("music2.mp3")
}