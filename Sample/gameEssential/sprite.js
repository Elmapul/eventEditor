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
      var pos = this.positions[position];
      ctx.drawImage(
        this.img,
        pos[0],
        pos[1],
        this.width,
        this.height,
        x, y,
        this.width,
        this.height
      );
    }
};
