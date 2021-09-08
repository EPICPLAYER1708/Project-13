var garden,rabbit;
var gardenImg,rabbitImg;
var apples,leaves
var appleImg,leavesImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leavesImg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x = mouseX 
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  spawnApples()

  spawnLeaves()

  drawSprites();
}

function spawnApples(){
  if (frameCount % 80 === 0){
    apples = createSprite(100,600,40,10);
    apples.y = Math.round(random(10,60));
    apples.addImage(appleImg);
    apples.scale = 1/8
    apples.velocityY = 3;

    apples.lifetime = 134

    apples.depth = rabbit.depth;
    rabbit.depth = rabbit.depth;
  }

}
function spawnLeaves(){
  if (frameCount % 80 === 0){
    leaves = createSprite(300,600,40,10);
    leaves.y = Math.round(random(10,60));
    leaves.addImage(leavesImg);
    leaves.scale = 1/8
    leaves.velocityY = 3;

    leaves.lifetime = 134

    leaves.depth = rabbit.depth;
    rabbit.depth = rabbit.depth + 1;
  }

}