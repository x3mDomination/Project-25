
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustbin1,dustbin2,dustbin3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,350,70);
	ground = new Ground();

	dustbin1 = new Dustbin(1300,height-45,500,50);
	dustbin2 = new Dustbin(1050,height-220,50,400);
	dustbin3 = new Dustbin(1550,height-220,50,400);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  Engine.update(engine);
  
  paper.display();
  
  ground.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Body.applyForce(paper.body,paper.body.position,{x:450,y:-750});
	}
}


