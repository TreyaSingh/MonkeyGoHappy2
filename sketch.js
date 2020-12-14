
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var ground, grdImage;
var survivalTime;
var score;

function preload() {
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  score = 0;
  survivalTime = 0;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  

  
}


function draw() {
  background(0);
  
  banana();
  obstacle();
  
  if(ground.x<0) {
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")) {
    monkey.velocityY = -12;
    }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  if(monkey.isTouching(FoodGroup)) {
    FoodGroup.destroyEach();
     score = score+1;
  }

  drawSprites();
  
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+ score, 220, 50);
  
  stroke("pink");
  textSize(20);
  fill("pink");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time="+ survivalTime, 50,50);
} 
  
function banana() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(400,250,40,10);
    banana.y = random(120,200);    
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    banana.lifetime = 300;
    FoodGroup.add(banana);
  }
  
}


function obstacle() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(350,350,10,40);
    obstacle.velocityX = -6;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
    obstacleGroup.add(obstacle);
  }
  
}


