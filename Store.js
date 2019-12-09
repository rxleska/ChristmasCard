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
      text(store.getName(i-1)+ "   " + store.formatMon(items.get(store.type(i-1))), width-100, (height/10)*i-(0.045*height));
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
        return 0.1;
      case 1:
        return 1;
      case 2:
        return 8;
      case 3:
        return 47;
      case 4:
        return 260;
      case 5:
        return 1400;
      case 6:
        return 7800;
      case 7:
        return 44000;
      case 8:
        return 260000;
      case 9:
        return 1600000;
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
        return floor(15  * (Math.pow(1.15, items.get(store.type(a)))));
      case 1:
        return floor(100  * (Math.pow(1.15, items.get(store.type(a)))));
      case 2:
        return floor(1100  * (Math.pow(1.15, items.get(store.type(a)))));
      case 3:
        return floor(12000  * (Math.pow(1.15, items.get(store.type(a)))));
      case 4:
        return floor(130000  * (Math.pow(1.15, items.get(store.type(a)))));
      case 5:
        return floor(1400000  * (Math.pow(1.15, items.get(store.type(a)))));
      case 6:
        return floor(20000000  * (Math.pow(1.15, items.get(store.type(a)))));
      case 7:
        return floor(330000000  * (Math.pow(1.15, items.get(store.type(a)))));
      case 8:
        return floor(5100000000  * (Math.pow(1.15, items.get(store.type(a)))));
      case 9:
        return floor(75000000000  * (Math.pow(1.15, items.get(store.type(a)))));
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
  
  //Formats numbers
 formatMon(x){
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
}
