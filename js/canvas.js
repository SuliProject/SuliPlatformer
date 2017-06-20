var slo;
var hatter,noiTest;

function setup(){
  createCanvas(1280, 720, WEBGL);
  hatter=loadImage('kepek/hatter.jpg');
  hatter=loadImage('kepek/Női_test.jpg');

  background(128);
}

function draw(){
  translate(-640,360)
  background(255);
translate(0,0);
   texture(hatter);
   rect(0,0,1280,720)
   rect(0,0,200,200)

}
