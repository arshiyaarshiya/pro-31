class Umbrella {
    constructor(x,y){
        var opt = {
            isStatic: true
        }
        this.r=400;
        this.body = Bodies.circle(x,y,400,opt);
        World.add(world,this.body);
        this.image1 = loadImage("walking_1.png");
    }
    show(){
        imageMode(CENTER);
        image(this.image1,this.body.position.x,this.body.position.y,this.r,this.r);
    }
}