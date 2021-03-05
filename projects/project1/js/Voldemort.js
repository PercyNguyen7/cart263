// Lord Voldemort at the final stage - Stage5.
class Voldemort{
    constructor(voldemortgreetImage,voldemortcastImage){
      this.x = width/2;
      this.y = 2*height/3;
      this.vy = 0;
      this.vx = 0;
      this.width = 50;
      this.height = 65;
      this.image = voldemortgreetImage;

      this.x2 = width/2;
      this.y2 = 2*height/3;
      this.vx2 = random(-4,4);
      this.vy2 = random(-4,4);
      this.ax2 = 0,
      this.ay2 = 0,
      this.acceleration2 = 0.05,
      this.maxSpeed2 = 5,
      this.size2 = 5,
      this.grow2 = 6,
      this.image2 = voldemortspellImage;
      this.countered2 = false;

      this.counter = 0;
    }

    display(){
// Display Voldemort
      image(this.image,this.x,this.y,this.width,this.height);
      if (this.size2 <=15){
        this.image =voldemortcastImage;
      }
      else if(this.size2 >15){
        this.image= voldemortgreetImage;
      }
// Display Voldermort's spell
      image(this.image2, this.x2, this.y2, this.size2, this.size2);
      this.size2 += this.grow2;
      this.size2 = constrain(this.size2,0,600);

// RESET values of the spell once it has been countered
      if (this.countered ===true){
        this.x2 = width/2;
        this.y2 = height/2;
        this.size2 = 5;
        this.counter++;
        this.countered = false;
       }
    }

    move(){
      // MOVE VOLDY'S SPELL
      this.x2 += this.vx2;
      this.y2 += this.vy2;
      // Add acceleration tp the movement of tee and constrain it
      this.vx2 += this.ax2;
      this.vx2 = constrain(this.vx2, -this.maxSpeed2, this.maxSpeed2);
      this.vy2 += this.ay2;
      this.vy2 = constrain(this.vy2, -this.maxSpeed2, this.maxSpeed2);

      // MOVE TO THE CENTER;
      let dx = this.x2 - width/2;
      let dy = this.y2 - height/2;
      // If x distance is negative the spell should move right
      if (dx < 0) {
      this.ax2 = this.acceleration2;
     }
     // If x distance is positive the spell should move left
     else {
       this.ax2 = -this.acceleration2;
     }
     // If y distance is negative, the spell should move up
     if (dy < 0) {
       this.ay2 = this.acceleration2;
     }
     // If y distance is positive, the spell should move down
     else {
       this.ay2 = -this.acceleration2;
     }




   }
 }
