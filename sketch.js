
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let img;


function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	rectMode(CENTER);
	groundbase = Bodies.rectangle(400, 660, 800, 40, { isStatic: true });
	World.add(world, groundbase);
	ground = createSprite(400, 660, 800, 40);
	D1 = new Dustbin(600, 680, 200, 20);
	D2 = new Dustbin(500, 615, 20, 150);
	D3 = new Dustbin(700, 615, 20, 150);
	img = loadImage("dustbingreen.png");
	




	ball = new Ball();

	Engine.run(engine);

}


function draw() {

	background("white");
	Engine.update(engine);
	
	D1.display();
	D2.display();
	D3.display();
	image(img, 520, 500, 170, 150);
	ball.display();
	

	drawSprites();


}

function keyPressed() {
	if (keyCode == UP_ARROW) {
		Matter.Body.applyForce(ball.body, ball.body.position, { x: 2, y: -2 });
	}

}

