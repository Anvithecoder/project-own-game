var spaceImg, space;

var starImg, star , starsGroup;
var spaceship, spaceshipImg;
var asteroid,asteroidImg,asteroidGroup
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var score=0

function preload(){
 spaceImg = loadImage("space.png");
 
// asteroidImg = loadImage(".png")
  starImg = loadImage("star.png");
spaceshipImg = loadImage("spaceship.png");
asteroidImg = loadImage("meteroir3.png")

}

function setup() {
  createCanvas(600, 600);
space = createSprite(300,300);
space .addImage("space",spaceImg);
space .velocityY = 1;

 asteroidGroup=new Group()
  starsGroup=new Group()
  invisibleBlockGroup=new Group()
  
  spaceship=createSprite(200,550,50,50)
 spaceship.scale=0.1
 spaceship.addImage(spaceshipImg)



}

function draw() {
  background(200);
  fill("white")
  
  text("Score: "+ score,100,100);
  
  if(gameState==="play"){
    if(keyDown("left_arrow")){
        spaceship.x = spaceship.x - 10;

      }
      
      if(keyDown("right_arrow")){
      spaceship.x = spaceship.x + 10;
      }
     
      
      
    //  spaceship.velocityY = spaceship.velocityY + 0.8
    if(space.y > 400){
        space.y = 300
      }

  
    
  

     stars()
      asteroids()


      drawSprites ()
  }
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }
}
function stars (){

if (frameCount%80===0){
  star=createSprite(random(50,550),10)
  star.addImage(starImg)
star.scale=0.02
 star.velocityY=5
  star.lifetime=800
  starsGroup.add (star)
}  

  }
  function asteroids(){
    if (frameCount%80===0){
     asteroid =createSprite(random(50,550),10)
     asteroid .addImage(asteroidImg)
    asteroid.scale=0.2
    asteroid .velocityY=10
    asteroid .lifetime=800
     asteroidGroup.add (asteroid)
    } 
  }




