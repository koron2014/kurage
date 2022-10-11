let ball;


function setup() {
  createCanvas(400, 400); 
  ball = new Walker();

}


function draw() {
  background(220, 10);
  ball.update();
  ball.display();
  ball.passWall();
  ball.vel = createVector(mouseX, 0);
  ellipse(width/2, height/2, 50, 50);

}


class Walker {
  constructor() {
  	this.pos = createVector(width/2, height/2);
    this.vel = createVector(0);
    this.acc = createVector(0, 0);
    this.w = 20;
  }
  
  update() {
    if(mouseIsPressed){
      this.acc = createVector(random(-1, 1), random(-1, 1));
    }else{
      this.acc = createVector(0, 0);
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    fill(0);
  }
  
  passWall(){
    if (this.pos.x > width) {
      this.pos.x = 0;
    }
    if (this.pos.x < 0) {
      this.pos.x = width
    }
  }
  
  display() {
	ellipse(this.pos.x, this.pos.y, this.w);
  }
}