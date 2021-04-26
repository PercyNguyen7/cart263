class Phone {
  constructor() {
    this.x = width / 2,
    this.y = height / 2 - 300,
    this.width = 160,
    this.height = 280,
    this.vy = 3

  }
  // Display black rectangle. Slightly transparent if player casts Lumos and completely transparent if player casts Lumos Maxima.
  display() {
    push();
    fill(20);
    rect(this.x, this.y, this.width,this.height);
    fill(0,150,240);
    rect(this.x, this.y+5, this.width - 20, this.height - 30);
    pop();
  }
  // Move
  move(){
    this.y += this.vy
    if (this.y - this.height/2 >= height){
      state =`doNothingOutcome`
    }
  }

  }
