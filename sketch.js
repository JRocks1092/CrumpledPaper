
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj, groundObject, paper1;
var world;
var force;
var forceApplied;


function setup() {

	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	groundObject = new ground(width / 2, 670, width, 20);
	dustbinObj = new dustbin(1200, 650);
	paper1 = new paper(width / 4, 620, 22);

	forceApplied = false;

	Engine.run(engine);

}


function draw() {

	rectMode(CENTER);
	background(230);

	if (keyDown("up") && forceApplied == false) {

		//force = paper1.body.force;

		force = Matter.Vector;

		force.x = 100;
		force.y = -100;

		Matter.Body.applyForce(paper1.body, paper1.body.position, force);

		forceApplied = true;

	}
	
	paper1.display();
	groundObject.display();
	dustbinObj.display();
	
	console.log(paper1.body.position.x);
	console.log(paper1.body.position.y);

}

