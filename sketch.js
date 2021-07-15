var Runner
var invisiblewall
var invisiblewall2

function preload(){
  //pre-load images

Runner1 = loadAnimation("Runner-1.png","Runner-2.png")
path1 = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  path = createSprite(200,200,20,20)
  path.addImage(path1)
 
  path.velocityY=2
  path.scale = 0.7


invisiblewall = createSprite(395,200,10,400)
invisiblewall.visible=false



invisiblewall2 = createSprite(15,200,10,400)
invisiblewall2.visible=false

  Runner = createSprite(200,330,20,50);
  Runner.addAnimation("runnng",Runner1);
 Runner.scale = 0.1;


  //create sprites here
}

function draw() {
  if(path.y>250){
  path.y = height/2
    }

Runner.x=mouseX

Runner.collide(invisiblewall)
Runner.collide(invisiblewall2)




background("blue")


drawSprites();
}
