const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;

var ground, man, manAn, lightningSpr, li1, li2, li3 ,li4;
var drops = [];
var maxDrops = 100;


function preload(){
  li1 = loadImage("images/thunderbolt/1.png");
  li2 = loadImage("images/thunderbolt/2.png");
  li3 = loadImage("images/thunderbolt/3.png");
  li4 = loadImage("images/thunderbolt/4.png");

  manAn = loadAnimation("images/man/walking_8.png","images/man/walking_7.png","images/man/walking_6.png","images/man/walking_5.png","images/man/walking_4.png","images/man/walking_3.png","images/man/walking_2.png","images/man/walking_1.png")
}

function setup() {
  createCanvas(400,600);
  
  engine=Engine.create();
  world = engine.world;

  makeDrops(); //Mona: Reason of slowness you were calling this makeDrops function in both setup and draw function

  var g_options = {
    isStatic : true
  }
  ground = Bodies.rectangle(200,570,400,20,g_options);
  World.add(world,ground)

  man = createSprite(width/2,420,50,100);
  man.addAnimation("manAnimation",manAn);
  man.scale = 0.4
  
  u1 = new Umbrella();

  
}

function draw() {
  background(0);  
  Engine.update(engine);



  u1.display();

  //makeDrops();  

  for(var i=0; i<maxDrops; i++){
    drops[i].display();
    drops[i].updateY() //Mona:created function in Drop class to repeat drops
  }

  fill(58,24,0);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20)


  

  drawSprites();

  console.log(mouseY);  
}

function lightning(){
  if(frameCount % 50===0){
    lightningSpr = createSprite()
  }
}

function makeDrops(){
  if(frameCount%1===0){
    for(var i=0; i<maxDrops; i++){
      drops.push(new Drop(random(0,400),random(0,400)));
    }}
}