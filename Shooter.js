class Shooter{
    constructor(x,y,angle){
    var options={
        density:0.5,
        friction:0.2
    
    }
    this.body= Bodies.rectangle(x,y,5,10,options);
    this.width=5;
    this.height=10;
    this.body.angle=angle;
    Matter.Body.setAngle(this.body.angle);
    World.add(world,this.body)
    }
    display(){
        var pos =this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("orange");
        rect(0, 0, this.width, this.height);
        pop();
    
    }
       }
