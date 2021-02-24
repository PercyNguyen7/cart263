class TreeTrunk{
    constructor(treetrunkImage){
      this.x = width/2;
      this.y = 4*height/5;
      this.speed = 45;
      this.vy = -2;
      this.vx = 0;
      this.width = 800;
      this.height = 145;
      this.image = treetrunkImage;
      this.shrink = false;
      this.frozen = false;
    }

  display(){
    image(treetrunkImage,this.x,this.y,this.width,this.height)
    }

  move(){
    if(currentSpell === ``)
    this.x += this.vx;
    this.y += this.vy;


    }
  }
