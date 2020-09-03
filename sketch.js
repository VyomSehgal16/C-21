 var fixedrect, movingrect;
 var gameobject1, gameobject2, gameobject3, gameobject4;    

function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(500,200,50,80);
  fixedrect.shapeColor = "green";
  fixedrect.debug = true; 
  fixedrect.velocityY = 5;  
  movingrect = createSprite(500,800,80,30);
  movingrect.shapeColor = "green";
  movingrect.velocityY = -5;
  movingrect.debug = true;
  gameobject1 = createSprite(100,100,50,50);
  gameobject1.shapeColor = "green";
  gameobject1.debug = true;
  gameobject2 = createSprite(200,100,50,50);
  gameobject2.shapeColor = "green";
  gameobject2.debug = true;
  gameobject3 = createSprite(300,100,50,50);
  gameobject3.shapeColor = "green";
  gameobject3.debug = true;
  gameobject4 = createSprite(400,100,50,50);
  gameobject4.shapeColor = "green";
  gameobject4.debug = true;
}

function draw() {
  background(0,0,0); 
  if(isTouching(movingrect,gameobject3)){
   movingrect.shapeColor = "red";
   gameobject3.shapeColor = "red"; 
  }
  else {
    gameobject3.shapeColor = "green";
    movingrect.shapeColor = "green";
  }
  bounceOff(movingrect,fixedrect);
  drawSprites();
}

