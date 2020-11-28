var fixedRect, movingRect, rect1, rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1 = createSprite(500,700,30,60);
  rect1.shapeColor= "blue";
  rect2 = createSprite(300,600,40,60);
  rect2.shapeColor= "blue";
}

function draw() {
  background(0,0,0);  
  rect1.x = World.mouseX;
  rect1.y = World.mouseY;
if (istouching(rect1,rect2)){
rect1.shapeColor = "yellow";
 rect2.shapeColor = "yellow";

}
else{
 rect1.shapeColor = "blue";
rect2.shapeColor = "blue";
}
 
  drawSprites();
}



