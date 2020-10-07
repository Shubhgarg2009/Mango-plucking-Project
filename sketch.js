const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var tree;
var engine, world;
var mango1, mango2, mango3,mango4,mango5, backgroundImg,stone, launcher;
var score=0 ;
var particle;

function preload() {
    backgroundImg = loadImage("bg.png");
	boyIMG=loadImage("boy.png");
}

function setup(){
    engine = Engine.create();
    world = engine.world;
    var canvas = createCanvas(1200,400);
    
    tree=new Tree(900,200);
    boy=createSprite(200,250,20,20);
    boy.addImage(boyIMG);
    boy.scale=0.1;

    ground = new Ground(600,height,1200,20);
    ground2 = new Ground(140,400,300,200);
    mango1 = new Mango(880,150,10,10);
    mango2 = new Mango(960,180,10,10);
    mango3 = new Mango(830,160,10,10);
    mango4 = new Mango(990,100,10,10);
    mango5 = new Mango(770,160,10,10);
    stone = new Stone(140,50);
    launcher = new Launcher(stone.body,{x:150, y:200});

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    tree.display();
    mango1.display();
    mango2.display();
    ground.display();
    mango3.display();
    mango4.display();
    mango5.display();
    stone.display();
    launcher.display();  
    ground2.display();  
    detectCollision(stone,mango1);
    detectCollision(stone,mango2);
    detectCollision(stone,mango3);
    detectCollision(stone,mango4);
    detectCollision(stone,mango5);
    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}

function keyPressed(){
if (keyCode === 32){
launcher.attach(stone.body)
}
}
function detectCollision(stone,mango ){
    mangoBodyPosition=mango.body.position
    stoneBodyPosition=stone.body.position
   
   var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
   
   if (distance<=mango.radius+40){
   Matter.Body.setStatic(mango.body,false);
   }
   }