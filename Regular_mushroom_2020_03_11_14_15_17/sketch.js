let x = 0;

function setup() {
  createCanvas(320, 240);
}

function draw() {
  //console.log(x);
  background(100);
  ellipse(x, 120, 16, 16)
  x = x + 1;
  if (x > width){
    x = 0;
  }
}