
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, drop1, drop2, drop3, ground;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(150, 10, 30);
	drop1 = new Dustbin(1120, 530, 240, 20);
	drop2 = new Dustbin(990, 465, 20, 150);
    drop3 = new Dustbin(1240, 465, 20, 150);
	ground = new Ground(650, 600, 1380, 20)
	Engine.run(engine);
}


function draw() {
 
  Engine.update(engine);
 
  rectMode(CENTER);
  background(0);
  paper.display();
  drop1.display();
  drop2.display();
  drop3.display();
  ground.display();

  keyPressed();
  
  
  drawSprites();
 
}

function keyPressed() {
if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body, paper.body.position, {x:0.5, y:-10});


  }
}


