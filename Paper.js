class Paper{
    constructor(x,y,r) {
        this.image = loadImage("sprites/paper.png");
        var options = {
            isStatic:false,
            //isStatic:true,
            restitution :0.3,
            friction : 0.5,
            density : 1.2
            
        }

        this.x=x
        this.y=y
        this.r=r;
        this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);
    }
    display() {
        push()
			translate(this.body.position.x,this.body.position.y);
			ellipseMode(RADIUS)
			strokeWeight(3);
			fill(255,0,255)
			ellipse(0,0,this.r, this.r);
            image(this.image,this.body.position.x,this.body.position.y,50,50);
			pop()
    }
}