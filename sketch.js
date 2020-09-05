//This city is called the "The Plateau City" as the buildings that are in the city are in a sequence of like a plateau (big to small).

class building {
  constructor()
  {
    this.height=10;
    this.position=1;    
    this.yPosition=390;
    this.width=25;
    this.floors=10;
    
    //Each floor is approximately equal to 12 feet
    //If a building has 3 floors it would be 3*12=36 feet high.
    this.building_height=this.floors*12;
    
  }  
  display()
  {
   this.height=this.floors*8;
   this.yPosition=395-(this.height);
    //this.xPosition=395-(this.height);
   this.xPosition=this.position*40;
   rect(this.xPosition,this.yPosition, this.width, this.height); 
  }  
  
}

var b1, b2, b3, b4, b5, b6, b7, b8, b7, b8, b9, b10;

function setup() {
  createCanvas(400, 400);
  b1=new Building();
  b1.position=0;
  b1.floors=28;
  
  b2=new Building();
  b2.position=1;
  b2.floors=28;
  
  b3=new Building();
  b3.position=2;
  b3.floors=24;
  
  b4=new Building();
  b4.position=3;
  b4.floors=20;
 
  b5=new Building();
  b5.position=4;
  b5.floors=20;
  
  b6=new Building();
  b6.position=5;
  b6.floors=16;
  
  b7=new Building();
  b7.position=6;
  b7.floors=12;
  
  b8=new Building();
  b8.position=7;
  b8.floors=12;
  
  b9=new Building();
  b9.position=8;
  b9.floors=10;
  
  b10=new Building();
  b10.position=9;
  b10.floors=10;
}

function draw() {
  background(0);
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
}