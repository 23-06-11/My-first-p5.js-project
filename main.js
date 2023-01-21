function preload()
{

}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

}

function draw() 
{
 image(video,150,100,350,250);
fill(0,255,0);
 stroke(0,255,0);
 rect(20, 55, 20, 350);
 rect(590, 55, 20, 350);
 rect(50, 20, 525, 20);
 rect(50, 420, 525, 20);
 fill(255,0,0);
 stroke(255,0,0);
 circle(30,30,50);
 circle(30,430,50);
 circle(600,30,50);
 circle(600,430,50);

}
 