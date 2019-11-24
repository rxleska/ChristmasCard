class Button{
  constructor(){
    this.total = 0;
    this.freq = 1;
  }
  show(){
    fill(255,0,0);
    circle(200,height/5,height/10);
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
