var player;
var edges;

function setup() {
createCanvas(600,600);

edges=createEdgeSprites();
player = createSprite(40,550,30,30);// createSprite(x,y,w,h) 
target = createSprite(560,40,30,30);


obs1 = createSprite(300,120,100,20);
obs1.velocityX = 5;

obs2 = createSprite(300,320,100,20);
obs2.velocityX = -5;

target.shapeColor = "blue"
obs2.shapeColor = "red"
obs1.shapeColor = "red"


}

function draw() {
background("black");  

player.bounceOff(edges[0]);
player.bounceOff(edges[1]);
player.bounceOff(edges[2]);
player.bounceOff(edges[3]);
obs1.bounceOff(edges[1]);
obs1.bounceOff(edges[0]);
obs2.bounceOff(edges[1]);
obs2.bounceOff(edges[0]);

if(keyDown("up")){
  player.y=player.y-3;
}
if(keyDown("down")){
  player.y=player.y+3;
}
if(keyDown("left")){
  player.x=player.x-3;
}
if(keyDown("right")){
  player.x=player.x+3;
}
if(player.isTouching(target)){
  text("YOU WIN",200,200);
}
if(player.isTouching(obs1)){
  obs1.velocityX=0;
  text("YOU LOSE",200,200);
}
if(player.isTouching(obs2)){
  obs2.velocityX=0;
  text("YOU LOSE",200,200);
}
  drawSprites();
}