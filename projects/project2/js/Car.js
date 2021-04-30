class Car {
  constructor(carImage) {
    // Parameters for Michael in 2nd Decision and Catch outcome
    this.x = -460,
    this.y = 270,
    this.vx = 1,
    this.width = 990,
    this.height = 266,
    this.image = carImage;
   }
   display(){
     image(this.image,this.x,this.height,this.width);
   }

   move(){
     this.x += this.vx
     if (this.x + this.width/2 >=300){
       state = `doNothing3Outcome`
     }
   }
}
