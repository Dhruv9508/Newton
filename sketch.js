const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bob1,bob2,bob3,bob4,bob5,rope1,rope2,rope3,rope4,rope5,roof;


function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;


    roof = new Ground(400,100,600,20);
    bob1= new Ball(200,600,50)
    bob2= new Ball(300,600,50)
    bob3= new Ball(400,600,50)
    bob4= new Ball(500,600,50)
    bob5= new Ball(600,600,50)
    rope1=new Slingshot(bob1.body,roof.body,{x:-200,y:0})
    rope2=new Slingshot(bob2.body,roof.body,{x:-100,y:0})
    rope3=new Slingshot(bob3.body,roof.body,{x:0,y:0})
    rope4=new Slingshot(bob4.body,roof.body,{x:100,y:0})
    rope5=new Slingshot(bob5.body,roof.body,{x:200,y:0})

    

}
function draw(){
    background(250);
    Engine.update(engine);
     roof.display();
     bob1.display();
     bob2.display();
     bob3.display();
     bob4.display();
     bob5.display();
     rope1.display();
     rope2.display();
     rope3.display();
     rope4.display();
     rope5.display();
}

function keyPressed (){
  if (keyCode===32){
    Matter.Body.applyForce (bob1.body,bob1.body.position,{x:-100,y:-100})
    
  } 
} 
function mouseDragged(){
  Matter.Body.setPosition  (bob1.body,{x:mouseX,y:mouseY})
}