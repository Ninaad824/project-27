class tree
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		
		
		this.width = 450;
		this.height = 600;
		this.image=loadImage("images/tree.png")
		this.body=Bodies.rectangle(this.x, this.y, this.width, this.height, {isStatic:true})
		
		World.add(world, this.body)
		

	}
	display()
	{
			var posBottom=this.body.position;
			push()
			translate(posBottom.x, posBottom.y+10);
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.height/2,this.width, this.height)
			pop()
			
	}

}