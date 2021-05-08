
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground,iron;

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	ground=new Ground(600,height,1200,15)

   hammer=new Hammer(200,200);

   stone=new Stone(700,470,80,100 );

   iron=new Iron(300,470,80,50);

   rubber=new Rubber(700,370,20,10);

   //Engine.run(engine);
  
}


function draw() {
 
  rectMode(CENTER);

  background("lightblue");

  Engine.update(engine);

  hammer.display();
  ground.display();
  stone.display();
  iron.display();
  rubber.display();


  
 
   
}