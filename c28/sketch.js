var player;
var score= 0;
var wormGroup;

function setup() {
createCanvas(600,600);
player = createSprite(40,500,30,30)
wormGroup = new Group()

}

function draw() {

background("yellow");
stroke("red");
noFill(); 
ellipse(300,300, 50,50);
player.x= mouseX;
player.y= mouseY;

if(player.x < 350 && player.x > 250 && player.y >250 && player.y < 350){
  text("No Cheating", 300, 100);
  player.x= 30;
  player.y= 30;
  score =0;
}
generateWorms();


for( var i =0;  i< (wormGroup).length;i++){
  var temp= (wormGroup).get(i);
  if(player.isTouching(temp)){
    score++;
    temp.destroy();
    temp=null;
  }
}

  drawSprites();
  textSize(25);
  text(" WORMS DESTROYED " + score , 100,50)
}

function generateWorms(){
  if (frameCount % 30 === 0) {
    console.log(frameCount);
    var worm = createSprite(300, 300, random(40, 100), 2 );
    worm.shapeColor = "black";
    worm.velocityX = random(-5, 5);
    worm.velocityY = random(-5, 5);
    wormGroup.add(worm);
  }
}

