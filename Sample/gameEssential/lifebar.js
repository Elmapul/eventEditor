//tela




//lifebar.draw();
//tela

//barra de vida
var Bar = function(name, x,y,max) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.max=max;
    this.current=max;
    this.size=100;
}

Bar.prototype = {
    setCurrent: function(value) {
        this.current = value;
    },
    draw: function(){
    this.area=this.size * (this.current /this.max);
			ctx.beginPath();
			ctx.rect(this.x, this.y, this.x+this.area, this.y+10);
			ctx.fillStyle = "rgba(0,255,0,1)";
      ctx.strokeStyle="rgba(0,0,0,0)";
      ctx.closePath();
			ctx.fill();
      
      ctx.beginPath();
      
			ctx.rect(this.x, this.y, this.x+this.size, this.y+10);
      ctx.strokeStyle="rgba(0,0,0,1)";
      ctx.closePath();
			ctx.stroke();
}
    
    
    
    
}
//barra de vida.


var bar = new Bar('life', 10,10,100);
//bar.setCurrent(10);
//console.log(bar.name);
//console.log(bar.current);
bar.setCurrent(90);
bar.draw();
