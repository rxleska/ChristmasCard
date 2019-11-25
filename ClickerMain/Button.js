class Button{
  constructor(){
    this.total = 96643464484646846846468468466488486864846464846468448464643543543546546540;
    this.freq = 1;
    this.img = loadImage('ClickArt/Snow.png');
  }
  show(){
    //console.log(this.total);
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
