 let theShader;
 let cam;

 function preload(){
   theShader = loadShader('assets/webcam.vert', 'assets/webcam.frag');
 }

 function setup() {
   createCanvas(710, 400, WEBGL);
   noStroke();
   cam = createCapture(VIDEO);
   cam.size(710, 400);
   cam.hide();
 }

 function draw() {
   shader(theShader);
   theShader.setUniform('tex0', cam);
   rect(0,0,width,height);
 }
