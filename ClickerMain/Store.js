class Store{
  constructor(){
    this.arr = [];
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
      text(items.get(store.type(i-1)), width-100, (height/10)*i-(0.04*height));
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
        return "ski";
      case 3:
        return "hole";
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
  getCost(a){
    switch(a){
      case 0:
        return 5 +  sq((items.get("blend")) *1);
      case 1:
        return 15 +  sq(((items.get("sCone")) )*10);
      case 2:
        return 100 +  sq((items.get("ski")) *50);
      case 3:
        return 250 +  sq((items.get("hole")) *100);
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
        if(c >= 100 +  sq((items.get("ski")) *50)){
          return true;
        }
        return false;
      case 3:
        if(c >= 250 +  sq((items.get("hole")) *100)){
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
