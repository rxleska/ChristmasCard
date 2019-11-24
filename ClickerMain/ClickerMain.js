var button;
var store;
var items;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  button = new Button();
  store = new Store();
  items = new Map();
  items.set("blend", 0);
  items.set("sCone", 0);
  items.set("ski", 0);
  items.set("hole", 0);
  items.set("canTru", 0);
  items.set("scis", 0);
  items.set("AC", 0);
  items.set("portal", 0);
  items.set("weat", 0);
  items.set("earth", 0);
  textSize(height* 0.04);
  counter = 0;
}


function draw() {
  addStuff();
  background(100);
  button.show();
  store.show();
  fill(0,255,255);
  textAlign(LEFT);
  textSize(height* 0.04);
  text(formatMon(button.getTotal()),80,height/20);
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
      if(d < 25){
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
