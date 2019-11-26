class Store{
  constructor(){
    this.arr = [];
    this.l = loadImage('ClickArt/Blender.png');
    this.b = loadImage('ClickArt/SnowCone.png');
    this.c = loadImage('ClickArt/HolePuncher.png');
    this.d = loadImage('ClickArt/Ski.png');
    this.e = loadImage('ClickArt/CanTru.png');
    this.f = loadImage('ClickArt/Scis.png');
    this.g = loadImage('ClickArt/AC.png');
    this.h = loadImage('ClickArt/Portal.png');
    this.j = loadImage('ClickArt/Weat.png');
    this.k = loadImage('ClickArt/Earth.png');
  }
  show(){
    textAlign(RIGHT);
    for(var i = 1; i <= 10; i++){
      if(store.canBuy(i-1)){
        fill(255,0,0);  
      }
      else{
        fill(200);
      }
      circle(width-(0.05*height), (height/10)*i-(0.05*height), 0.04*height);
      this.arr[i-1] = createVector(width-(0.05*height), (height/10)*i-(0.05*height)); 
      fill(0,255,255);
      textSize(height* 0.02);
      text(store.getName(i-1)+ "   " + formatMon(items.get(store.type(i-1))), width-100, (height/10)*i-(0.045*height));
      store.getPic(i-1,i);
    }
   
  }
  getPoint(a){
    return this.arr[a];
  }
  type(a){
    switch(a){
      case 0:
        return "blend";
      case 1:
        return "sCone";
      case 2:
        return "hole";
      case 3:
        return "ski";
      case 4:
        return "canTru";
      case 5:
        return "scis";
      case 6:
        return "AC";
      case 7:
        return "portal";
      case 8:
        return "weat";
      case 9:
        return "earth";
    }
  }
  getTypeVal(a){
    switch(a){
      case 0:
        return 0.1 * (items.get(store.type(a))/10 +1);
      case 1:
        return 0.5 * (items.get(store.type(a))/10 +1);
      case 2:
        return 1 * (items.get(store.type(a))/10 +1);
      case 3:
        return 10 * (items.get(store.type(a))/10 +1);
      case 4:
        return 25 * (items.get(store.type(a))/10 +1);
      case 5:
        return 100 * (items.get(store.type(a))/10 +1);
      case 6:
        return 500 * (items.get(store.type(a))/10 +1);
      case 7:
        return 1000 * (items.get(store.type(a))/10 +1);
      case 8:
        return 10000 * (items.get(store.type(a))/10 +1);
      case 9:
        return 100000 * (items.get(store.type(a))/10 +1);
    }
  }
  getName(a){
    switch(a){
      case 0:
        return "Blenders";
      case 1:
        return "Snow Cone Machines";
      case 2:
        return "Paper Hole punchers";
      case 3:
        return "Ski Snow Blasters";
      case 4:
        return "Canada Snow Shipments";
      case 5:
        return "Scissors for Paper Flakes";
      case 6:
        return "Outside AC Machines";
      case 7:
        return "Portals To Antartica";
      case 8:
        return "Weather Machines";
      case 9:
        return "Earth Movers";
    }
  }
  getCost(a){
    switch(a){
      case 0:
        return floor(5 + store.fibon(items.get("blend")));
      case 1:
        return floor(15 + (3* store.fibon(items.get("sCone"))));
      case 2:
        return floor(100 +  (10 * store.fibon(items.get("hole"))));
      case 3:
        return floor(250 +  (23 * store.fibon(items.get("ski"))));
      case 4:
        return floor(1000 + (95 * store.fibon(items.get("canTru"))));
      case 5:
        return floor(5000 + (434 * store.fibon(items.get("scis"))));
      case 6:
        return floor(10000 +  (834 * store.fibon(items.get("AC"))));
      case 7:
        return floor(100000 +  (94360 * store.fibon(items.get("portal"))));
      case 8:
        return floor(1000000  +  (92300 * store.fibon(items.get("weat"))));
      case 9:
        return floor(5000000  +  (483590 * store.fibon(items.get("earth"))));
    }
  }
  //image(     ,width-(0.05*height), (height/10)*i-(0.05*height),0.04*height);
  getPic(a,i){
    
    switch(a){
      case 0:
        image(this.l, width-(0.05*height), (height/10)*i-(0.05*height),0.06*height,0.06*height);
      break;
      case 1:
        image(this.b, width-(0.05*height), (height/10)*i-(0.05*height),0.06*height,0.06*height);
      break;
      case 2:
        image(this.c ,width-(0.05*height), (height/10)*i-(0.05*height),0.06*height,0.06*height);
      break;
      case 3:
        image(this.d ,width-(0.05*height), (height/10)*i-(0.05*height),0.06*height,0.06*height);
      break;
      case 4:
        image(this.e ,width-(0.05*height), (height/10)*i-(0.05*height),0.06*height,0.06*height);
      break;
      case 5:
        image(this.f, width-(0.05*height), (height/10)*i-(0.05*height),0.06*height,0.06*height);
      break;
      case 6:        
        image(this.g, width-(0.05*height), (height/10)*i-(0.05*height),0.06*height,0.06*height);
      break;
      case 7:        
        image(this.h, width-(0.05*height), (height/10)*i-(0.05*height),0.06*height,0.06*height);
      break;
      case 8:        
        image(this.j, width-(0.05*height), (height/10)*i-(0.05*height),0.06*height,0.06*height);
      break;
      case 9:        
        image(this.k, width-(0.05*height), (height/10)*i-(0.05*height),0.06*height,0.06*height);
      break;
    }
  }
  
  canBuy(a){
    let c = button.getTotal();
    if(c >= store.getCost(a)){
      return true;
    }
    return false;
  }  
  
  fibon(n){
    if(n == 0){
      return 0;}
    if(n == 1){
      return 1;}
    return store.fibon(n-1) + store.fibon(n-2);
  }
}
/*switch(a){
      case "blend":
        this.name = "blender";
        this.addVal = 1;
        this.itemVal = 0;
      break;
      case "sCone":
        this.name = "Snow Cone Machine";
        this.addVal = 5;
        this.itemVal = 1;
      break;
      case "ski":
        this.name = "Ski Snow Machine";
        this.addVal = 15;
        this.itemVal = 2;
      break;
      case "hole":
        this.name = "Hole punchers";
        this.addVal = 100;
        this.itemVal = 3;
      break;
      case "canTru":
        this.name = "Canada Truck";
        this.addVal = 250;
        this.itemVal = 4;
      break;
      case "scis":
        this.name = "Paper Snowflakes";
        this.addVal = 1000;
        this.itemVal = 5;
      break;
      case "AC":
        this.name = "Outside AC";
        this.addVal = 5000;
        this.itemVal = 6;
      break;
      case "portal":
        this.name = "Portal to Antartica";
        this.addVal = 10000;
        this.itemVal = 7;
      break;
      case "weat":
        this.name = "Weather Machine";
        this.addVal = 100000;
        this.itemVal = 8;
      break;
      case "earth":
        this.name = "Earth Mover";
        this.addVal = 1000000;
        this.itemVal = 9;
      break;
    }
*/
