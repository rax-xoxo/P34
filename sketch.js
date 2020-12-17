//Create variables here

var dog, happyDog, dogImg, food, database;

function preload()
{
  //load images here
  
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();

  createCanvas(800, 700);
  
  dog=createSprite(400,400);
  dog.addImage(dogImg);

  var dogFoods = database.ref("Foods");
  dogFoods.on("value",readPosition);
  
}


function draw() {  
  background("green");

  if(keyDown(UP_ARROW)){
    writeStock(food);
    dog.addImage(happyDog);
  }


  drawSprites();
  //add styles here

}

function writeStock(food){
  var ref = database.ref('Foods');
  
  if(x<=0){
   x=0
  }
else{
  x=x-1
}
    ref.set({
    Foods: food

  })
}

function readPosition(data){

  food = data.val();
}


