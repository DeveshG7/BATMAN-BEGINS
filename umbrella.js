class Ground {
    constructor(x,y,r) {
      var options = {
          isStatic: true
      }
      
      this.x=x;
		  this.y=y;  
      this.r=r;
      
      this.image=loadImage("images/Walking Frame/walking_1.png")
      
      this.body = Bodies.circle(this.x, this.y, (this.r/2)-40, options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.r, this.r);
    }
  };
