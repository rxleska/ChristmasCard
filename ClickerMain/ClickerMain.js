var button;
var store;
var items;
let snowflakes = [];
var counter = 0;
var snowFreq;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  button = new Button();
  store = new Store();
  items = new Map();
  items.set("blend", 0);
  items.set("sCone", 0);
  items.set("hole", 0);
  items.set("ski", 0);
  items.set("canTru", 0);
  items.set("scis", 0);
  items.set("AC", 0);
  items.set("portal", 0);
  items.set("weat", 0);
  items.set("earth", 0);
  textSize(height* 0.04);
  counter = 0;
  imageMode(CENTER);
}


function draw() {
  let lenOfTot = button.getlen();
  snowFreq = lenOfTot < 20 ? 1 : lenOfTot-19;
  addStuff();
  background(30);
  
  let t = frameCount / 240; // update time
  fill(255);
  
  if(counter < 20-lenOfTot){
    counter++;
  }
  else{
    createSnow();
    counter = 0;
  }
  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
  
  button.show();
  store.show();
  fill(0,255,255);
  textAlign(LEFT);
  textSize(height* 0.04);
  text(formatMon(button.getTotal()),80,height/20);
  info();
}
function formatMon(x){
  if(x >            1000000000000000000000000000000000000){
    let d = "" + x; 
    return "" + nfc(x, 5,2)*100 + " e" + (d.length -1);
  }
  else if(x >      1000000000000000000000000000000000){
    return floor(x/10000000000000000000000000000000)/100 + " Dec";
  }
  else if(x >      1000000000000000000000000000000){
    return floor(x/10000000000000000000000000000)/100 + " Non";
  }
  else if(x >      1000000000000000000000000000){
    return floor(x/10000000000000000000000000)/100 + " Oct";
  }
  else if(x >      1000000000000000000000000){
    return floor(x/10000000000000000000000)/100 + " Sept";
  }
  else if(x >      1000000000000000000000){
    return floor(x/10000000000000000000)/100 + " Hex";
  }
  else if(x >      1000000000000000000){
    return floor(x/10000000000000000)/100 + " Quin";
  }
  else if(x >      1000000000000000){
    return floor(x/10000000000000)/100 + " Quad";
  }
  else if(x >      1000000000000){
    return floor(x/10000000000)/100 + " T";
  }
  else if(x >      1000000000){
    return floor(x/10000000)/100 + " B";
  }
  else if(x >      1000000){
    return floor(x/10000)/100 + " M";
  }
  else if(x >      1000){
    return floor(x/10)/100 + " K";
  }
  return floor(x);
}
function mouseClicked(){
  let d = dist(mouseX, mouseY, 200,200);
  if(d < 100){
    button.clicked();
  }
  for(var i = 0; i < 10; i++){
    d = dist(mouseX, mouseY, store.getPoint(i).x, store.getPoint(i).y);
      if(d < height*0.04){
        if(store.canBuy(i)){
          button.buyFrom(store.getCost(i));
          items.set(store.type(i),items.get(store.type(i))+1);
        }
        
      }
   }
}

function addStuff(){
  for(var i = 0; i < 10; i++){
    button.addTo((items.get(store.type(i))*store.getTypeVal(i))/60);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function info(){
  for(var i = 0; i < 10; i++){
    d = dist(mouseX, mouseY, store.getPoint(i).x, store.getPoint(i).y);
      if(d < height*0.04){
        textAlign(RIGHT);
        textSize(height* 0.015);
        text(getInfo(i), width-100, (height/10)*i+(0.072*height));
        
      }
   }
}

function getInfo(a){
  switch(a){
      case 0:
        return "COST:" + store.getCost(a) + "\n More blenders for kids to blend ice cubes.";
      case 1:
        return "COST:" + store.getCost(a) + "\n Just plug it in and turn it on, summer skiing here we come!";
      case 2:
        return "COST:" + store.getCost(a) + "\n Hey, it looks kinda like snow.";
      case 3:
        return "COST:" + store.getCost(a) + "\n Good enough for buck hill, good enough for me.";
      case 4:
        return "COST:" + store.getCost(a) + "\n Canada always has Snow, eh?";
      case 5:
        return "COST:" + store.getCost(a) + "\n These look even more like snow.";
      case 6:        
        return "COST:" + store.getCost(a) + "\n This is how we'll fix global warming!";
      case 7:        
        return "COST:" + store.getCost(a) + "\n Most usefull task for a portal right?";
      case 8:        
        return "COST:" + store.getCost(a) + "\n I control the Weather - Bill Murray (Groundhog Day:1993)";
      case 9:        
        return "COST:" + store.getCost(a) + "\n Sun melts snow, less sun, more snow.";
  }
}

function createSnow(){
  
  // create a random number of snowflakes each frame
  for (let i = 0; i < snowFreq; i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }
}
