class Umbrella{
    constructor(x, y, radius) {
        var options={
            'friction' : 0.1,
            'isStatic' : true
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius
        this.bat = loadImage("images/Bestman-01.png");
        this.image = loadImage("umbrella.png");
        World.add(world,this.body);
    }

    display() {
        var posU = this.body.position;

        imageMode(CENTER);


        if(frameCount>=200) {
            image(this.bat,posU.x,posU.y,150,230);
        }
        else{
            image(this.image,posU.x,posU.y,this.radius*2, this.radius*2)
        }
    }
}