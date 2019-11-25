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
        return 1;
      case 1:
        return 5;
      case 2:
        return 15;
      case 3:
        return 100;
      case 4:
        return 250;
      case 5:
        return 1000;
      case 6:
        return 5000;
      case 7:
        return 10000;
      case 8:
        return 100000;
      case 9:
        return 1000000;
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
        return 5 +  sq((items.get("blend")) *1);
      case 1:
        return 15 +  sq(((items.get("sCone")) )*10);
      case 2:
        return 100 +  sq((items.get("hole")) *50);
      case 3:
        return 250 +  sq((items.get("ski")) *100);
      case 4:
        return 1000 +  sq((items.get("canTru")) *500);
      case 5:
        return 5000 +  sq((items.get("scis")) *2500);
      case 6:
        return 10000 +  sq((items.get("AC")) *5000);
      case 7:
        return 100000 +  sq((items.get("portal")) *50000);
      case 8:
        return 1000000  +  sq((items.get("weat")) *500000);
      case 9:
        return 5000000  +  sq((items.get("earth")) *1000000);
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
    switch(a){
      case 0:
        if(c >= 5 +  sq((items.get("blend")) *1)){
          return true;
        }
        return false;
      case 1:
        if(c >= 15 +  sq((items.get("sCone")) *10)){
          return true;
        }
        return false;
      case 2:
        if(c >= 100 +  sq((items.get("hole")) *50)){
          return true;
        }
        return false;
      case 3:
        if(c >= 250 +  sq((items.get("ski")) *100)){
          return true;
        }
        return false;
      case 4:
        if(c >= 1000 +  sq((items.get("canTru")) *500)){
          return true;
        }
        return false;
      case 5:
        if(c >= 5000 +  sq((items.get("scis")) *2500)){
          return true;
        }
        return false;
      case 6:
        if(c >= 10000 +  sq((items.get("AC")) *5000)){
          return true;
        }
        return false;
      case 7:
        if(c >= 100000 +  sq((items.get("portal")) *50000)){
          return true;
        }
        return false;
      case 8:
        if(c >= 1000000  +  sq((items.get("weat")) *500000)){
          return true;
        }
        return false;
      case 9:
        if(c >= 5000000  +  sq((items.get("earth"))*1000000)){
          return true;
        }
        return false;
    }
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
