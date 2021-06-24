var canvas;
var bg,bgImg;
var iss,issImg;
var hasDocked = false;
var spacecraft;
var spacecraft1;
var spacecraft2;
var spacecraft3;
var spacecraft4;

function preload(){
    bgImg = loadImage("images/spacebg.jpg")
    issImg = loadImage("images/iss.png")
    spacecraft1 = loadImage("images/spacecraft1.png")
    spacecraft2 = loadImage("images/spacecraft2.png")
    spacecraft3 = loadImage("images/spacecraft3.png")
    spacecraft4 = loadImage("images/spacecraft4.png")
}

function setup(){
    canvas = createCanvas(1200,600);    

    iss = createSprite(500,250);
    iss.addImage("iss",issImg);
    iss.scale = 1;

    spacecraft = createSprite(600,500);
    spacecraft.addImage(spacecraft1);
    spacecraft.scale = 0.3;

    
   
}

function draw() {
    background(bgImg);

    spacecraft.addImage(spacecraft1)
    
    if(!hasDocked){

    if(keyDown("up")) {
        spacecraft.addImage(spacecraft2);
        spacecraft.y = spacecraft.y -3;
        spacecraft.scale = 0.3;
    }

    if(keyDown("down")) {
        spacecraft.addImage(spacecraft1);
        spacecraft.y = spacecraft.y +3;
        spacecraft.scale = 0.3;
    }

    if(keyDown("left")) {
        spacecraft.addImage(spacecraft3);
        spacecraft.x = spacecraft.x -3;
        spacecraft.scale = 0.3;
    }

    if(keyDown("right")) {
        spacecraft.addImage(spacecraft4);
        spacecraft.x = spacecraft.x +3;
        spacecraft.scale = 0.3;
    }
    }

    if(spacecraft.y <= (iss.y +95) && spacecraft.x <= (iss.x -5)){
        hasDocked = true;
        textSize(30);
        fill(255);
        text("DOCKING SUCCESSFUL",650,300);
    }

    drawSprites();    
}