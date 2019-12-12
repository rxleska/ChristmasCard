//##################################################################################
//This is a christmas themed clicker game based upon cookie clicker made for my AP 
//computer science class, The goal is to create enough snow to close school, to do 
//this you and your friends are making snow. As the saying says 'you need to spend 
//money to make money', spend snow flakes to increase your rate of snow making.
//  ENJOY,
//   -RYAN X LESKA
//##################################################################################

//Instantiate Objects, counters, and snowflake array
var button;
var errorCheck = 0;
var store;
var items;
let snowflakes = [];
var counter = 0;
var snowFreq;
var sign;
var saveCo = 360;
var version = "Version 2.1.2";

//Setup: Canvas, background, init objects
function setup() {
  //Canvas and Background
  createCanvas(windowWidth, windowHeight);
  background(100);
  //frameRate(60);
  //objects setup
  button = new Button();
  store = new Store();
  sign = new Sign();
  
  //Init map and added items 
  items = new Map();
  items.set("blend", localStorage.getItem('blend') || 0);
  items.set("sCone", localStorage.getItem('sCone') || 0);
  items.set("hole", localStorage.getItem('hole') || 0);
  items.set("ski", localStorage.getItem('ski') || 0);
  items.set("canTru", localStorage.getItem('canTru') || 0);
  items.set("scis", localStorage.getItem('scis') || 0);
  items.set("AC", localStorage.getItem('AC') || 0);
  items.set("portal", localStorage.getItem('portal') || 0);
  items.set("weat", localStorage.getItem('weat') || 0);
  items.set("earth", localStorage.getItem('earth') || 0);
    
    
  button.setTotal( localStorage.getItem('total') || 0);
	
  //Other settings 
  textSize(height* 0.04);
  counter = 0;
  imageMode(CENTER);
}

//Runs at framerate (60fps)
function draw() {
  if(saveCo > 600){
		//Every ten seconds
		localStorage.setItem('blend', items.get("blend"));
		localStorage.setItem('sCone', items.get("sCone"));
		localStorage.setItem('hole', items.get("hole"));
		localStorage.setItem('ski', items.get("ski"));
		localStorage.setItem('canTru', items.get("canTru"));
		localStorage.setItem('scis', items.get("scis"));
		localStorage.setItem('AC', items.get("AC"));
		localStorage.setItem('portal', items.get("portal"));
		localStorage.setItem('weat', items.get("weat"));
		localStorage.setItem('earth', items.get("earth"));
		
		localStorage.setItem('total', Math.round(button.getTotal()));
		saveCo = 0;
	}
	else{
		saveCo++;
	}
	
	
  //Sets private var of total length
  let lenOfTot = button.getlen();
  
  //Snow frequency of spawning picks up after 1e+20
  snowFreq = lenOfTot < 20 ? 1 : lenOfTot-19;
  
  //Adds snowflakes to total based on the items
  addFlakes();
  
  //redraws background
  background(30);
  
  sign.drawSign();
  
  //Snow build-up
  fill(255);
  rect(0,height,width,-((height/1000000000000)*button.getTotal()));
  
  //snow angluar speed
  let t = frameCount / 240; // update time
  fill(255);
  
  //Snow Creation speed
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
  
  //Display Button
  button.show();
  
  //Display Store items and amounts
  store.show();
  
  //Display Total Flakes
  fill(0,255,255);
  textAlign(LEFT);
  textSize(height* 0.04);
  text(store.formatMon(button.getTotal()),80,height/20);
  
  textAlign(LEFT);
  fill(0,255,255);
  textSize(height * 0.03);
  text(version, width/60, height-(height * 0.01));
  
  sign.signMove();
  
  
  //display drop downs on store items 
  info();
}

//Finds clicked on buttons
function mousePressed(){
  console.log(errorCheck);
  errorCheck++;
  //check for snow button click
  let d = dist(mouseX, mouseY, height/5,height/5);
  if(d < height/10){
    button.clicked();
  }
  
  //check for item buy
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

//Finds clicked on buttons
function touchStarted(){
  //check for snow button click
  let d = dist(mouseX, mouseY, height/5,height/5);
  if(d < 100){
    button.clicked();
  }
  
  //check for item buy
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

//Add snow flakes, iterates for each item
function addFlakes(){
  for(var i = 0; i < 10; i++){
    button.addTo((items.get(store.type(i))*store.getTypeVal(i))/60);
  }
}

//Dynamic window resizes
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

//loops getInfo for item drop downs
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

//gets Info of each item
function getInfo(a){
  switch(a){
      case 0:
        return "COST:" + store.formatMon(store.getCost(a)) + "\n More blenders for kids to blend ice cubes.";
      case 1:
        return "COST:" + store.formatMon(store.getCost(a)) + "\n Just plug it in and turn it on, summer skiing here we come!";
      case 2:
        return "COST:" + store.formatMon(store.getCost(a)) + "\n Hey, it looks kinda like snow.";
      case 3:
        return "COST:" + store.formatMon(store.getCost(a)) + "\n Good enough for buck hill, good enough for me.";
      case 4:
        return "COST:" + store.formatMon(store.getCost(a)) + "\n Canada always has Snow, eh?";
      case 5:
        return "COST:" + store.formatMon(store.getCost(a)) + "\n These look even more like snow.";
      case 6:        
        return "COST:" + store.formatMon(store.getCost(a)) + "\n This is how we'll fix global warming!";
      case 7:        
        return "COST:" + store.formatMon(store.getCost(a)) + "\n Most usefull task for a portal right?";
      case 8:        
        return "COST:" + store.formatMon(store.getCost(a)) + "\n I control the Weather - Bill Murray (Groundhog Day:1993)";
      case 9:        
        return "COST:" + store.formatMon(store.getCost(a)) + "\n Sun melts snow, less sun, more snow.";
  }
}


//Creates Snow 
function createSnow(){
  // create a random number of snowflakes each frame
  for (let i = 0; i < snowFreq; i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }
}
