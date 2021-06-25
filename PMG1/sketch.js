var ship, shipImg;
var bg, bgImg;
var obstacle, obstacle1,obstacle2,obstacle3,obstacle4,obstacle5, obstacleGroup;
var invisibleGround;
var score;

function preload(){
  bgImg = loadImage("Background.jpg");
  
   shipImg = loadImage("Spaceship.png");
  
   obstacle1 = loadImage("Obstacle1.png");
   obstacle2 = loadImage("Obstacle2.png");
   obstacle3 = loadImage("Obstacle3.png");
   obstacle4 = loadImage("Obstacle4.png");
   obstacle5 = loadImage("Obstacle5.png");
}

function setup(){
  createCanvas(600,600);
  
  bg=createSprite(300,600,20,20);
  bg.addImage("bg",bgImg);
  bg.velocityY = 4;
  bg.scale = 5.5
  
  
 ship = createSprite(300,500,50,50);
 ship.addImage("ship",shipImg);
 ship.scale = 0.5;
  
  obstacleGroup = new Group();
  score = 0
}

function draw(){
  background(0);
  drawSprites()
  fill("white");
  textSize (40);
  text("Score:" + score, 400,70);

  if(bg.y > 400){
    bg.y = 300;
 }

  if(keyDown("LEFT_ARROW")){
    ship.x=ship.x - 6;
  }

  if(keyDown("RIGHT_ARROW")){
    ship.x=ship.x + 6;
  }

  score = score + Math.round(getFrameRate()/60);

  if(ship.isTouching(obstacleGroup)){
    obstacleGroup.destroyEach();
  }

  spawnObstacles();
 
}

function spawnObstacles(){
  if(frameCount % 90 === 0){
    obstacle = createSprite(500,100,30,80)
    obstacle.x = Math.round(random(100,400));
    obstacle.velocityY = 10;

    var rand = Math.round(random(1,5));
     switch(rand) {
     
       case 1: obstacle.addImage(obstacle1); 
       break;
       case 2: obstacle.addImage(obstacle2); 
       break;
       case 3: obstacle.addImage(obstacle3);
       break;
       case 4: obstacle.addImage(obstacle4);
       break;
       case 5: obstacle.addImage(obstacle5);
       break;
       default: break; 
          }

          obstacle.scale = 0.4;

          obstacleGroup.add(obstacle);
  }


}













