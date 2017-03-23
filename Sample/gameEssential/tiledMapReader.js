//tutorial: http://davetayls.me/blog/2013/02/11/drawing-sprites-with-canvas

var sprite = new Sprite(img, 32, 32, [
    // specify a few sprite locations
    [32, 32],  
    [64, 32], 
    [32, 32]  
]);
var custom=[20,20];
sprite.draw([0,0], 20, 20); //pos, x,y

function TileMap(){

}

TileMap.prototype = {
  draw: function(){

for(x=0;x<10;x++){
for(y=0;y<10;y++){
	sprite.draw([0,0], x*32, y*32);
}}

}};
var tileMap = new TileMap();
tileMap.draw();
