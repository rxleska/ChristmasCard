class Sign{
  constructor(){
    this.posX = (height/80) + (height/2);
    this.posY = ((height*9)/10);
    this.word = -1;
    this.words = new Map();
    this.words.set(-1, "GOOD MORNING ROSEMOUNT, HAVE A NICE DAY");
    this.words.set(0, "THIS IS A TEST OF OUR EMERGENCY SERVICES");
    this.words.set(1, "SCHOOL IS DELAYED 2 HOURS");
    this.words.set(2, "AFTER SCHOOL ACTIVITIES CANCLED: VOLLY BALL, SOCCER, TENNIS. FOOTBALL IS STILL ON!");
    this.words.set(3, "SCHOOL CANCLED TOMMARROW");
    this.words.set(4, "SCHOOL CANCLED FOR 3 DAYS");
    this.words.set(5, "SCHOOL CANCELED FOR THE WEEK");
    this.words.set(6, "SCHOOL CANCLED UNTIL FURTHER NOTICE");
    this.words.set(7, "Polar Bears Migrating north to warm up");
    this.words.set(8, "PLOWS IMPROVED SCHOOL IS NO LONGER CANCLED");
    this.words.set(9, "SCHOOL IS CANCLED AGAIN");
    this.words.set(10, "THE SKY IS WHITE THERE IS NO TOMORROW");
    
  }
  drawSign(){
    push();
    translate(height/80,0);
    fill(203, 65, 84);
    rect(0,height/1.5,height/2, height/3);
    fill(0);
    textSize(height/12);
    textAlign(CENTER);
    text("RHS", height/4, height/1.3);
    fill(100,255,100);
    rect(0,(height*8.5)/10,height/2,height/15);
    fill(0,255,255);
    pop();
    
    textAlign(LEFT);
    textSize(height*0.03);
    fill(255,0,255);
    text(this.words.get(this.word), this.posX,(height*9)/10);
    
    push();
    noStroke();
    fill(30);
    rect(0,height/1.5, height/75,height/3);
    rect((height/80) + (height/2),height/1.5, width,height/3);
    pop();
  }

  signMove(){
    
    this.posX =  this.posX > - (this.words.get(this.word).length * 20) ?  this.posX-1 : (height/80) + (height/2);
    if(this.posX == (height/80) + (height/2)){
      this.word = (button.getlen()/2) - 1;
    }
    //console.log(this.posX);
  }
}
