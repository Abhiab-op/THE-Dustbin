
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

ground = new Ground(800,670,1600,20)
paper = new Paper(200,450,50)
dustbin = new Dustbin(1200,650)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display()
 paper.display()
 dustbin.display()
}

function keyPressed(){
if(keyCode === 32  ){
	Matter.Body.applyForce(paper.body, paper.body.position, {x : 84, y : -84})
}	
}

