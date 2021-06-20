class Umbrella{
    constructor(){
        var options = {
            isStatic : true
        }
        this.body = Bodies.circle(210,380,80,options);
        World.add(world,this.body); 
        this.r = 80
    }
    display(){
        var pos = this.body.position;
        fill(0);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r );
    }
}