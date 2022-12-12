const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,ground2

var engine,world

var ball;

var rock;

var btn;

var angle;

function setup() 
{
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ground_s = 
  {
    isStatic: true
  };

  var ballyg =
  {
    restitution:0.75,
    frictionAir:0.1
  }
  ground = Bodies.rectangle(200,400,400,40,ground_s);
  World.add(world,ground);
  fill("blue")
  ball = Bodies.circle(50,50,40,ballyg)
  World.add(world,ball)

  rock = Bodies.circle(230,300,30,ballyg)
  World.add(world,rock)

 
 
  btn = createImg("up.png")
  btn.position(50,40)
  btn.size(40,40)
  btn.mouseClicked(Forceee)



  rectMode(CENTER);
  ellipseMode(RADIUS);


}


function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,40)
  rect(ground.position.x,ground.position.y,400,40)
  push()
  fill("red")
  ellipse(rock.position.x,rock.position.y,30);
  pop()
}
function Forceee()
{
  Matter.Body.applyForce(ball,{x:5,y:0},{x:0.09,y:-0.3})
}