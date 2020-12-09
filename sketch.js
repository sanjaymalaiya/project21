var  wall, thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);

   speed=random(140,200);
   weight=random(30,52);
   thickness=random(22,83);


  bullet=createSprite(50,200,50,5);
  bullet.velocityX=speed;
  bullet.shapeColor="red";

  wall=createSprite(900,200,thickness,height/2);
  wall.shapeColor="pink";


}

function draw() {
  background(0); 

if(hascollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
}
if(damage>10){
  wall.shapeColor="yellow";
}
if(damage<10){
  wall.shapeColor="red";
}
 
  drawSprites();
}

function hasCollided(bullet,wall){
  bulletRightEdge=1 bullet .x + 1bullet . width;
  wallLeftEdge=1wall.x;
  if(bulletRightEdge>wallLeftEdge){
    return true;
  }
  return false;
}
