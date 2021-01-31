class paper {
	
	constructor(x, y, radius) {
		
		var options = {
			
			'friction' : 0.5,
			'restitution' : 0.3,
			'density' : 1.2
			
		}
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.body = Bodies.circle(x, y, radius, options);
		this.image = loadImage("paper.png");
		
		World.add(world, this.body);

	}
	display() {

		var pos = this.body.position;

				
		push();
		translate(pos.x, pos.y);
		imageMode(CENTER);
		//strokeWeight(4);
		image(this.image, 0, 0, 60, 60);
		
		pop();

	}

}