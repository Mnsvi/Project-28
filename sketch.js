// defining constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// defining variables
var paper, dustbin;

function setup() {

	// creating canvas
	createCanvas(800, 700);
	
	// creating engine and adding to world 
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin = new Dustbin(500, 650, 100, 10);
	paper = new Paper(100, 600, 12);

	// creating ground
	ground = Bodies.rectangle(width/2, 650, width, 10,{
		isStatic: true});
		World.add(world, ground);

	// running engine
	Engine.run(engine);
}

function draw() {
	
	// rect
	rectMode(CENTER);
	
	// background
	background(0);
	
	// displaying class
	dustbin.display();
    paper.display();

	// displaying sprites
	drawSprites();
}

//  Up arrow key movement
function keyPressed(){
	if (keyCode == UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x: 20, y: -17});
	}
}	