//tutorial: http://davetayls.me/blog/2013/02/11/drawing-sprites-with-canvas


var img = new Image();
img.src = 'mage_city.png'; //usar preload js

function Sprite(img, width, height, positions){
  this.img = img;
  this.width = width;
  this.height = height;
  this.positions = positions;
}

Sprite.prototype = {
  draw: function(position, x, y){

	var aux1,aux2;

if (typeof position==="number"){
var pos = this.positions[position];
aux1=pos[0];
aux2=pos[1];
}else{
if (typeof position==="object"){}
aux1=position[0];
aux2=position[1];
console.log(aux1);
console.log(aux2);
}


      ctx.drawImage(
        this.img,
	aux1,
	aux2,
        this.width,
        this.height,
        x, y,
        this.width,
        this.height
      );


    }
};
