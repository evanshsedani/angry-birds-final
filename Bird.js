class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image2 = loadImage("sprites/smoke.png")
    this.image = loadImage("sprites/bird.png");
    this.birdposition = []
    this.visibility = 255
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.velocity.x>20 && this.body.position.x>200){
    var birdvalues = [this.body.position.x, this.body.position.y]
    this.birdposition.push(birdvalues);
//(this.birdposition);
}
    for(var i = 0; i < this.birdposition.length; i++){
      push();
     
      
      this.visibility = this.visibility -0.4;
      tint(255, this.visibility);
      image (this.image2, this.birdposition[i][0], this.birdposition[i][1] )
    pop ();
    }

  }
}
