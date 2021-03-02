// This object serves as a black rectangle that will block the vision of the player. Player must use Lumos to make it disappear.
class Darkness{
    constructor(){
      this.x = width/2,
      this.y = height/2,
      this.size = 800,
      this.transparency = 220;
    }
// Display black rectangle
    display(){
      push();
        if(currentSpell === `Lumos`){
          this.transparency = this.transparency - 15;
          this.transparency = constrain(this.transparency, 150,220);
        }
        else if(currentSpell === `Lumos Maxima`){
          this.transparency = this.transparency - 15;
          this.transparency = constrain(this.transparency, 0,220);
        }
      fill(0,0,0,this.transparency);
      ellipse(this.x,this.y, this.size);
      pop();
      }


}
