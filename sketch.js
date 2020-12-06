
var monkey, monkey_running;
var ground;
var banana, bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 400); 
  
  monkey = createSprite(75, 325, 20, 20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(200, 360, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
  

}


function draw() {
  background(220);
  
  if(ground.x<0){
    ground.x = 200
     
     }
  
  if(keyWentDown("space") && monkey.y>300){
    monkey.velocityY = -15;
     
     }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  survivalTime =                   survivalTime+Math.round(getFrameRate()/60);
  
  stroke("black");
  textSize(20);
  fill("black");
  text("Survival Time:"+survivalTime, 125, 50);
  
  food();
  stone();
  
  monkey.collide(ground);
  drawSprites();
  
}

function food(){
  if(frameCount%100 === 0){
    banana = createSprite(400, 200, 20, 10);
    banana.addImage("food", bananaImage);
    banana.velocityX = -5;
    banana.y = Math.round(random(200, 270));
    banana.lifetime = 100;
    banana.scale = 0.1;
    
    FoodGroup.add(banana);
     
     }  
}

function stone(){
  if(frameCount%300 === 0){
    obstacle = createSprite(400, 327, 20, 20);
    obstacle.addImage("rock", obstacleImage);
    obstacle.velocityX = -5;
    obstacle.lifetime = 100;
    obstacle.scale = 0.15;
    
    obstacleGroup.add(obstacle);
  }
}






