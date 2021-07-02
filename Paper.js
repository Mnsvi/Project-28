class Paper {  
    constructor(x, y, radius){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        // giving nicknames
        this.radius = radius
        this.body = Bodies.circle(x, y, radius, options);

        // adding to the world 
	    World.add(world, this.body);
   }

display(){
    fill("green");
    ellipseMode(RADIUS);
    ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
   }
}