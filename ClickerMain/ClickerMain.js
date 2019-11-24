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
  textSize(height* 0.04)
  console.log(width);
  addStuff();
  background(100);
  button.show();
  store.show();
  fill(0,255,255);
  textAlign(LEFT);
  text(floor(button.getTotal()),80,40);
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
