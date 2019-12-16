class Sign{
  constructor(){
    this.posX = (height/80) + (height/2);
    this.posY = ((height*9)/10);
		
    this.word = -1; // Starting word sequence 
		
		// RHS BOARD TEXT
    this.words = new Map();
    this.words.set(-1, "GOOD MORNING ROSEMOUNT, HAVE A NICE DAY");
    this.words.set(0, "THIS IS A TEST OF OUR EMERGENCY SERVICES");
    this.words.set(1, "SCHOOL IS DELAYED 2 HOURS");
    this.words.set(2, "AFTER SCHOOL ACTIVITIES CANCLED: VOLLY BALL, SOCCER, TENNIS. FOOTBALL IS STILL ON!");
    this.words.set(3, "SCHOOL CANCLED TOMMARROW");
    this.words.set(4, "SCHOOL CANCLED FOR 3 DAYS");
    this.words.set(5, "SCHOOL CANCELED FOR THE WEEK");
    this.words.set(6, "SCHOOL CANCLED UNTIL FURTHER NOTICE");
    this.words.set(7, "Polar Bears Migrating north to warm up");
    this.words.set(8, "PLOWS IMPROVED SCHOOL IS NO LONGER CANCLED");
    this.words.set(9, "SCHOOL IS CANCLED AGAIN");
    this.words.set(10, "THE SKY IS WHITE THERE IS NO TOMORROW");
		
		// RHS BOARD LENGTHS
		this.lenOfWords =  new Array(11);
		this.lenOfWords[0] = "GOOD MORNING ROSEMOUNT, HAVE A NICE DAY".length;
		this.lenOfWords[1] = "THIS IS A TEST OF OUR EMERGENCY SERVICES".length;
		this.lenOfWords[2] = "SCHOOL IS DELAYED 2 HOURS".length;
		this.lenOfWords[3] = "AFTER SCHOOL ACTIVITIES CANCLED: VOLLY BALL, SOCCER, TENNIS. FOOTBALL IS STILL ON!".length;
		this.lenOfWords[4] = "SCHOOL CANCLED TOMMARROW".length;
		this.lenOfWords[5] = "SCHOOL CANCLED FOR 3 DAYS".length;
		this.lenOfWords[6] = "SCHOOL CANCELED FOR THE WEEK".length;
		this.lenOfWords[7] = "SCHOOL CANCLED UNTIL FURTHER NOTICE".length;
		this.lenOfWords[8] = "Polar Bears Migrating north to warm up".length;
		this.lenOfWords[9] = "PLOWS IMPROVED SCHOOL IS NO LONGER CANCLED".length;
		this.lenOfWords[10] = "SCHOOL IS CANCLED AGAIN".length;
		this.lenOfWords[11] = "THE SKY IS WHITE THERE IS NO TOMORROW".length;
		
		
		// Brick Texture and digital sign font
		this.brick = loadImage('images/brickTexture.jpg');
		this.signFont = loadFont('24dig.ttf');
  }
	
  drawSign(){
		
		// Sign Background
    push();
    translate(height/80,0);
		image(this.brick,height*0.25263157894,height/1.2,height/2, height/3);
		stroke(0);
		strokeWeight(4);
		
		// Rhs logo/text
		fill(100,250,100);
    textSize(height/8);
    textAlign(CENTER);
    text("RHS", height/4, height/1.26);
    
		// Scrolling text background
		fill(0,10,0);
    rect(0,(height*8.5)/10,height/2,height/15);
    fill(0,255,255);
    pop();
    
		// Sign text
		textFont(this.signFont);
    textAlign(LEFT);
    textSize(height*0.07);
    fill(255,0,0);
		text(this.words.get(floor(this.word)), this.posX,(height*145)/160);
		textFont('arial');
		
		// Sign text cut out
    push();
    noStroke();
    fill(30);
    rect(0,height/1.5, height/75,height/3);
    rect((height/80) + (height/2),height/1.5, width,height/3);
    pop();
  }

  signMove(){
    
		this.posX =  this.posX > - (this.lenOfWords[floor(this.word+1)] * height*0.03 ) ? this.posX-1 : (height/80) + (height/2);
    
		if(this.posX == (height/80) + (height/2)){
      this.word = (button.getlen()/2) - 1;
    } 
  }
}
