class Button{
	// The button class contains the main click button and the total snow flakes.
  constructor(){
    this.total = 0; //Total number of snow flakes made.
    this.freq = 1; //Number of flakes per click
    this.bounce = 1.0; //Bounce ratio of size of button
    this.relay = 10; //Bouce reset delay
    this.img = loadImage('ClickArt/Snow.png'); // Image displayed on button
  }
	// Displays button 
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
	// Adds one to total, bounces button
  clicked(){
    this.total+= this.freq;
    this.bounce = 0.95;
    this.relay = 0;
  }
	// increases total by A
  addTo(a){
    this.total+= a;
  }
	// reduce total by A
  buyFrom(a){
    this.total-= a;
  }
	// gets number of digits in the total
  getlen(){
    let temp = this.total;
    let count = 0;
    while(temp > 0){
      temp = floor(temp /10);
      count++;
    }
    return count;
  }
	// sets total to a certian number, used to set total when started
	setTotal(t){
		this.total = t;
	}
}
