const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var maxDrops = 20;
var dropArr = [];
var raindrop;
var umbrellaL, umbrellaO;
var thunder1,thunder2;
var ran,thunderFrame;
var thunderSp;
var bat, batA;    

function preload() {
    raindrop = loadImage("raindrop.png");
    umbrellaL = loadImage("umbrella.png");
    thunder1 = loadImage("thunder1.png");
    thunder2 = loadImage("thunder2.png");
    batA = loadAnimation("images/bat1.png", "images/bat2.png", "images/bat3.png", "images/bat4.png", "images/bat5.png", "images/bat6.png", "images/bat7.png")

}

function setup() {
    var canvas = createCanvas(800, 800);
    engine = Engine.create();
    world = engine.world;
    if (frameCount % 100 === 0) {
          for (var i = 0; i < maxDrops; i++) {
            dropArr.push(new drops(random(0, 800), random(0, 800), 15));
        }
    }
    umbrellaO = new Umbrella(400,600,250)

    Engine.run(engine);



}

function draw() {
    background("black")
    for (var i = 0; i < maxDrops; i++) {
        dropArr[i].display();
        dropArr[i].updateRain();

    }
    umbrellaO.display();

    ran = Math.round(random(1,2))
    if(frameCount%80 === 0){

        thunderFrame = frameCount;
        thunderSp = createSprite(random(100,380),random(100,50),10,10);
        switch(ran){
            case 1 : thunderSp.addImage(thunder1);
            console.log("test");
            break;
            
            case 2 : thunderSp.addImage(thunder2);
            break;
        }
        //thunderSp.scale = random(0.6,1);
    }
    if(thunderFrame+10 === frameCount && thunderSp) {
        thunderSp.destroy();

    }

    if(frameCount % 100 ===0 ){
        bat = createSprite(Math.round(random(0,400)), Math.round(random(0,400)))
        bat.addAnimation("bat",batA);
        bat.velocityX = Math.round(random(-4,4))
        bat.velocityY = Math.round(random(-4,4))
        bat.scale = 0.4;
    
    }
         
    drawSprites();
}

