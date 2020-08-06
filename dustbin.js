class Dustbin {
    constructor(x,y,w,h) {
        var options = {
            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,w,h,options);
        this.width = w;
        this.height = h;
        this.image = loadImage("dustbingreen.png");

        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        noStroke();
        fill(255);
        rect(pos.x,pos.y,this.width,this.height);
        imageMode(CENTER);
        image(this.image,1300,680,500,400);
    }
}