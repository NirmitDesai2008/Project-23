const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterImage, helicopter, package, packageImage;
var packageBody, ground;

function preload(){
	helicopterImage = loadImage("helicopter.png");
	packageImage = loadImage("package.png");
}

function setup(){
	createCanvas(800, 700);
	
	package = createSprite(width/2,80,10,10);
	package.addImage(packageImage);
	package.scale = 0.15;

	helicopter = createSprite(width/2,200,10,10);
	helicopter.addImage(helicopterImage);
	helicopter.scale = 0.6;

	ground = createSprite(width/2,height-35,width,10);
	ground.shapeColor = color(255);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2, 200, 5, {isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10, {isStatic:true});
 	World.add(world, ground);

	rect1 = new Rect(390,650,200,20);
	rect2 = new Rect(300,600,20,100);
	rect3 = new Rect(480,600,20,100);
}

function draw() {
  background("black");
  Engine.update(engine);

  package.x = packageBody.position.x;
  package.y = packageBody.position.y;

  rect1.display();
  rect2.display();
  rect3.display();

  keyPressed();

  drawSprites();
 }

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
  }
}