var bote
var anibote
var fondo
var anifondo
function preload(){
anibote = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
anifondo = loadAnimation("sea.png")
}

function setup(){
  createCanvas(400,400);
  fondo = createSprite (200,200,400,400);
  fondo.scale = (0.5)
  fondo.addAnimation ("fondo",anifondo)
  bote = createSprite (200,250,25,25);
  bote.addAnimation("bote",anibote);
  bote.scale = (0.25);
}

function draw() {
  background("blue");
 drawSprites();
}