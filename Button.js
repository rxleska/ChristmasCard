class Button{
  constructor(){
    this.total = 0;
    this.freq = 1;
    this.bounce = 1.0;
    this.relay = 10;
    this.img = loadImage('ClickArt/Snow.png');
  }
  show(){
    //this.total+= 1000000;
    if(this.relay > 4){
      this.bounce = 1;
    }
    else{
      this.relay++;
    }
    //console.log(this.total);
    fill(80);
    circle(height/5,height/5,height/10*this.bounce);
    imageMode(CENTER);
    image(this.img, height/5, height/5,(height/6)*this.bounce,(height/6)*this.bounce);
  }
  getTotal(){
    return this.total;
  }
  clicked(){
    this.total+= this.freq;
    this.bounce = 0.95;
    this.relay = 0;
  }
  addTo(a){
    this.total+= a;
  }
  buyFrom(a){
    this.total-= a;
  }
  getlen(){
    let temp = this.total;
    let count = 0;
    while(temp > 0){
      temp = floor(temp /10);
      count++;
    }
    return count;
  }
}
