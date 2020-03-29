// You could have multiple flags like: start, launch to indicate the state of the game.

const Engine= Matter.Engine;
const World =Matter.World;
const Bodies = Matter.Bodies;
var engine;
var world; 
var ground;
var tanker;
var canonball, shooter;


/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
    tanker = new Tanker(200,200);
    canonball = new CanonBall(200,180);
    shooter = new Shooter(210,180,PI/8);


}

function draw() {
background(0);
Engine.update(engine);
ground.display();
tanker.display();
canonball.display();
shooter.display();
}


function keyReleased() {
    // Call the shoot method for the cannon.
}