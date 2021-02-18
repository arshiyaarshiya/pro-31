const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drops = [];
var maxdrop = 100;
var thunder,rand;
var thunder1,thunder2,thunder3,thunder4,thunder_g;

function preload(){
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");

    thunder_g = new Group();
}

function setup(){

    canvas = createCanvas(400,700);
    background(0);

    engine = Engine.create();
    world = engine.world;

    boy = new Umbrella(200,500);

}

function draw(){
    Engine.update(engine);
    
    if(frameCount % 150=== 0){
        for(var a = 0; a < maxdrop ; a++){
            drops.push(new Drop(random(0,400),random(0,400)));
            drops[a].show();
        }
    }
    ran();
    boy.show();
    drawSprites();
}  

function ran(){
    rand = Math.round(random(1,4));
    if (frameCount %80 === 0) {
        //thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370),random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            default: break;
        }
        thunder.scale = random(0.3,0.6);
        thunder_g.add(thunder);
        thunder_g.lifetime = 10;
    }
}