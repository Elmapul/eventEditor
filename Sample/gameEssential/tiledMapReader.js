//tutorial: http://davetayls.me/blog/2013/02/11/drawing-sprites-with-canvas

var sprite = new Sprite(img, 32, 32, [
    // specify a few sprite locations
    [32, 32],  
    [64, 32], 
    [32, 32]  
]);
sprite.draw(1, 20, 20); //pos, x,y

