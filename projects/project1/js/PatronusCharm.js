class PatronusCharm{
    constructor(x,y){
      this.x = x;
      this.y = y;
      this.x2 = x;
      this.y2 = y;
      this.size = 1;
      this.size2 = 1;
      this.deform = 40;
      this.deform2 = 70;
      this.transparency = 40;
      this.transparency2 = 60;
    }

    display(){
      push();
      fill(255,255,255,this.transparency);
      noStroke();
      ellipse(this.x,this.y, this.size,this.size);
      fill(255,255,255,this.transparency2);
      ellipse(this.x2,this.y2, this.size2,this.size2);
      pop();
    }

    casted(){
      this.size += this.deform;
      this.size2 += this.deform2;

      if (this.size >= 400){
        this.size = 1;
      }
      if (this.size2 >= 500){
        this.size2 = 1;
      }
    }

// Spell collide with dementors depending on the spell's size
    collide(dementors){
      let d = dist(this.x, this.y, dementors.x, dementors.y)
      if (d < this.size/2 + dementors.width/2){
        dementors.vx = -20;
        dementors.vy = -2;
        }
      let d2 = dist(this.x, this.y, dementors.x2, dementors.y2)
      if (d2 < this.size/2 + dementors.width2/2){
        dementors.vx2 = 20;
        dementors.vy2 = -2;
      }
      let d3 = dist(this.x, this.y, dementors.x3, dementors.y3)
      if (d3 < this.size/2 + dementors.height3/2){
        dementors.vx3 = -2;
        dementors.vy3 = -20;
      }
    }
}
