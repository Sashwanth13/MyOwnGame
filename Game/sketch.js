var PLAY = 1;
var END = 0;
var gameState = PLAY;

var input, heading;
var sky;
var player;
var skyImg;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;
var gameState = "start";

function preload() {
  skyImg = loadImage("Background.png");
}

function setup() {
  createCanvas(800, 600);
  background("skyblue");
  sky = createSprite(400, 350, 800, 50);
  sky.addImage("Sky", skyImg);
  player = createSprite(50, 580, 50, 100);
  obstaclesGroup = new Group();
  obstacle1 = createSprite(200, 550, 50, 50);
  obstacle2 = createSprite(200, 550, 50, 100);
  obstacle3 = createSprite(200, 550, 50, 150);
  obstacle4 = createSprite(200, 550, 100, 50);
  obstacle5 = createSprite(200, 550, 100, 100);
  obstacle6 = createSprite(200, 550, 100, 150);
}

function draw() {
  background("skyblue");
  if(gameState === PLAY){
    sky.velocityX = -4;
    
    if(keyDown("space")&& player.y >= 100) {
        player.velocityY = -12;
    }

    player.velocityY = player.velocityY + 0.8

    spawnObstacles();
    
    if(obstaclesGroup.isTouching(player)){
        gameState = END;
    }
    else if (gameState === END) {
      console.log("hey")
       gameOver.visible = true;
       restart.visible = true;
      
       player.velocityY = 0
      
     obstaclesGroup.setLifetimeEach(-1);
     obstaclesGroup.setVelocityXEach(0);
    }
}

function spawnObstacles(){
  if (frameCount % 60 === 0){
    var obstacle = createSprite(400,165,10,40);
    obstacle.velocityX = -6;
    

     var rand = Math.round(random(1,6));
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
       case 6: obstacle.addImage(obstacle6);
               break;
       default: break;
     }
              
     obstacle.scale = 0.5;
     obstacle.lifetime = 300;

     obstaclesGroup.add(obstacle);
  }
 }
}