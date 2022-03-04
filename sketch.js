var box;
var edges;

function setup() {
  createCanvas(400,400);

  box = createSprite(200, 200, 30, 30);
  box.shapeColor = "blue";
  
  edges = createEdgeSprites();
}

function draw() 
{
  background(30);
  if(keyDown("up")) {
    box.velocityY = -7;
  }
  if(keyDown("down")) {
    box.velocityY = 7;
  }
  if(keyDown("left")) {
    box.velocityX = -7;
  }
  if(keyDown("right")) {
    box.velocityX = 7;
  }
  box.bounceOff(edges);
  /* if(box.y < 0) {
  //   box.y = 1;
  // }
  // if(box.y > 400) {
  //   box.y = 399;
  // }
  // if(box.x < 0) {
  //   box.x = 1;
  // }
  // if(box.x > 400) {
  //   box.y = 399;
   }*/
  drawSprites();
}




