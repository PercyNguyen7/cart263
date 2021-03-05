// This small timer moves from the left to the right. Once it touches the width, Voldemort will cast the next spell
class Timer{
    constructor(timerImage){
      this.x = 50,
      this.y = 450,
      this.vx = random(1,5);
      this.width = 40,
      this.height = 47,
      this.tint = 220

      this.fill ={
        r : 0,
        g : 0,
        b : 0,
      };

    }

    display(){
      push();
      noStroke();
      fill(this.fill.r,this.fill.g,this.fill.b,140);
      rect(50,450,540,20);
      //
      image(timerImage,this.x,this.y,this.width,this.height);
      pop();
    }

    move(){
      this.x += this.vx;
      this.x = constrain(this.x,50, 590);
    }

}
