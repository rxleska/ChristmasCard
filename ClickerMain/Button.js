class Button{
  constructor(){
    this.total = 0;
    this.freq = 1;
    this.img = loadImage('ClickArt/Snow.png');
  }
  show(){
    fill(80);
    circle(200,height/5,height/10);
    imageMode(CENTER);
    image(this.img, 200, height/5,height/6,height/6);
  }
  getTotal(){
    return this.total;
  }
  clicked(){
    this.total+= this.freq;
  }
  addTo(a){
    this.total+= a;
  }
  buyFrom(a){
    this.total-= a;
  }
}
