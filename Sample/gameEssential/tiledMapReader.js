//tutorial: http://davetayls.me/blog/2013/02/11/drawing-sprites-with-canvas

var sprite = new Sprite(img, 32, 32, [
    // specify a few sprite locations
    [32, 32],  
    [64, 32], 
    [32, 32]  
]);
var custom=[20,20];
sprite.draw([0,0], 20, 20); //pos, x,y

