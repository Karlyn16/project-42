
var iss, spacecraft, !hasDocked


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

function preload(){
  iss_image=loadimage("iss.png")
  space_image=loadimage("spacebg.png")
  spacecraft1_image=loadimage("spacecraft1.png")
  spacecraft2_image=loadimage("spacecraft2.png")
  spacecraft3_image=loadimage("spacecraft3.png")
  spacecraft4_image=loadimage("spacecraft4.png")

}
function setup(){
  backgroundImage=("spacebg.png")
  iss.addAnimation()
  iss.scale=0.5
}
function draw(){
if(!hasDocked){
  spacecraft.x=300
  spacecraft.y=400
}
if(Keydown(LLEFT_ARROW)){
  showimage("spacecraft3_image")
  spacecraft.velocityX=-4
}
if(Keydown(RIGHT_ARROW)){
  showimage("spacecraft4_image")
  spacecraft.velocityX=4
}
if(Keydown(DOWN_ARROW){
  showimage("spacecraft1_image")
}
if(Keydown(UP_ARROW)){
  spacecraft.x.position=300
  spacecraft.y.position=400
}
}
