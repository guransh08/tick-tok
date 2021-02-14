


function setup() {
  createCanvas(1600,800);
  hr=hour();
  mn=minute();
  sc=second();

  angleMode(DEGREES);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");
  
  
  

  stroke (255,0,0)  
  strokeWeight(7);
  line(0,0,100,0);
  hrAngle=map(hr%12,0,12,0,360);
  mnAngle=map(mn,0,60,0,360);
  scAngle=map (sc,0,60,0,360);

  drawSprites();
}