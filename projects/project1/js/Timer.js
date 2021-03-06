// This small timer moves from the left to the right. Once it touches the width, Voldemort will cast the next spell
class Timer{
    constructor(timerImage){
      this.x = 50,
      this.y = 450,
      this.vx = 0;
      this.width = 40,
      this.height = 47,
      this.tint = 220,

      this.transparency2 = 160
    }

    display(){
      push();
      noStroke();
      let r = map(this.x,50,590,0,133);
      let g = map(this.x,50,590,0,210);
      let b = map(this.x,50,590,0,100);
      fill(r,g,b,this.transparency2);

      rect(50,450,540,10);
      //
      image(timerImage,this.x,this.y,this.width,this.height);
      pop();
    }

    move(voldemort){
      this.x += this.vx;

      if (voldemort.countered === true){
      this.vx = 5;
      this.x = constrain(this.x,50, 590)
      }
      else if (voldemort.countered === false){
        this.vx = 0;
      }

      if (this.x === 590){
        voldemort.countered = false;
        this.x = 50;
      }
    }

}
