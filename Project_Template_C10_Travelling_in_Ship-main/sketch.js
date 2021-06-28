var ship;
var sea;
function preload(){
Sprite.addimage(seaimg);
if (keydown("space")){
 ship.velocityY = -10;
}
ship.velocityY = ship.velocityY + 0.8
if (sea.x < 0)  {
 sea.x = sea.width / 2;
}
ship.collide(sea);
drawSprite()

function setup(){
  createCanvas(400,400);
  
ship=createSprite(70,180,20,20)
ship.addAnimation("ship-1.png" ,"ship-2.png" ,"ship-3.png" ,"ship-4.png")
}
ship.scale=0.2
sea=createSprite(10,200,600,10);
sea.x=sea.width/2
sea.velocitX=-2;

function draw(){
  background("blue");
 seaimg = ("sea.png")
 shipimg1 = ("ship-1.png");
 shipimg2 = ("ship-2.png");
 shipimg3 = ("ship-3.png");
 shipimg4 = ("ship-4.png");
}