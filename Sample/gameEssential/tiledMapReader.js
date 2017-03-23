//tutorial: http://davetayls.me/blog/2013/02/11/drawing-sprites-with-canvas

var sprite = new Sprite(img, 32, 32, [
    // specify a few sprite locations
    [32, 32],  
    [64, 32], 
    [32, 32]  
]);
var custom=[20,20];
sprite.draw([0,0], 20, 20); //pos, x,y
//map
var map=[
[[0,0],[1,1],[0,2],[0,2],[0,2],[0,2],[0,2],[0,2]],
[[1,0],[1,1],[1,2]],
[[1,0],[1,1],[1,2]]

];
//map
function TileMap(){

}

TileMap.prototype = {
  draw: function(){


//x and y are inverted
for(x=0;x<3;x++){
for(y=0;y<10;y++){
ax1=map[x][y][0];
ax2=map[x][y][1];
console.log(ax1);
//console.log(ax2);
	sprite.draw([ax1*32,ax2*32], x*32, y*32);

}}

}};
var tileMap = new TileMap();
tileMap.draw();

