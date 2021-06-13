
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world,paper,dustbin,ground

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper=new Paper(20,670,20)
	ground=new Ground(400,680,800,10)
	dustbin=new Dustbin(500,670,100,200,20)

	Engine.run(engine);
  
}

function draw() 
{
  
  background(0);
  Engine.update(engine)
  paper.display()
  ground.display()
  dustbin.display()
  
 
}

function keyPressed() 
{
  if(keyCode===UP_ARROW)
  {
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:-85})
  }
}


