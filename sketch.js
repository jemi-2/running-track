var runningWoman, runningMan
var hurdle
var runningTrack
var ground, invisibleGround
var score = 0


function preload(){
  runningWoman= loadAnimation("images/rw1.png","images/rw2.png","images/rw3.png","images/rw4.png","images/rw5.png","images/rw6.png","images/rw7.png","images/rw8.png","images/rw9.png", "images/rw10.png");
  runningMan = loadAnimation("images/rm1.png","images/rm2.png","images/rm3.png","images/rm4.png","images/rm5.png","images/rm6.png","images/rm7.png","images/rm8.png","images/rm9.png","images/rm10.png");
  
  groundImage = loadImage("images/runninTrack.png");
  
  hurdleImage= loadImage("images/hurdle.png");
}

function setup() {

  createCanvas(1500,800)

  background1 = createSprite(750,400)
  background1.addImage(groundImage);
  background1.velocityX = -6;
  background1.scale = 5.7

  woman = createSprite(200,585,50,50);
  woman.addAnimation("running",runningWoman);
  woman.scale = 0.9;


  man = createSprite(420,503,40,40);
  man.addAnimation("running",runningMan);
  man.scale = 0.5;

  invisibleGround = createSprite(0,600,1500,10)
  invisibleGround.visible = false;
}

  function draw() {
    background(180);

  
    if(keyCode === 32) {
      man.velocityY = -10;
    }
    
    man.velocityY = man.velocityY + 0.8

    
   if (background1.x < background1.width/2 - 200){
      background1.x = background1.width/2;
    }
    

    man.collide(invisibleGround);
  
    drawSprites();

    textSize(20)
    fill("black")
    text ("score:"+score,75,50)
    score = score +Math.round(getFrameRate()/60)
    
    hurdles();
  }
  
  function hurdles(){
    if(frameCount%120 === 0){
      hurdle = createSprite(700,560,40,40)
      hurdle.addImage(hurdleImage)
      hurdle.velocityX = -5
      hurdle.scale = 0.5;
      hurdle.y = random(height/2,height-140)
    }
  }
 