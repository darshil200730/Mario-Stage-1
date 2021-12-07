var invisibleground
var score=0;
var coinImage
var marioImage
var bg
var mariosprite
function preload(){
 bg=loadImage("backg.jpg")
 marioImage=loadAnimation("Capture1.png","Capture3.png","Capture4.png")
 coinImage=loadImage("coin.png")

}

function setup() {
  createCanvas(600, 200);
 mariosprite=createSprite(50,130,50,50)
 mariosprite.addAnimation("mario",marioImage)
 mariosprite.scale=0.5
 invisibleground=createSprite(300,170,600,10)
 invisibleground.visible=false
  score = 0;
}

function draw() {
  background(bg);
  textSize(20);
  fill(255);
  text("Score: "+ score, 500,40);
if(keyDown("space") &&mariosprite.y>60)
{
  mariosprite.velocityY=-5
}
mariosprite.velocityY+=1
mariosprite.collide(invisibleground)
spawnCoin()
  drawSprites();
  
}

function spawnCoin() {
  if(frameCount%60==0)
  {

  
  var coinsprite=createSprite(600,50,10,10)
  coinsprite.addImage(coinImage)
  coinsprite.velocityX=-5
  coinsprite.scale=0.2
  }
}

function spawnObstacles() {

  
}

