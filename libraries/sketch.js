//const { LoopOnce } = require("three");

let fft, mic, songfile;

//let fr = 2;

function setup() {
  cnv =createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.hide();

  //frameRate(fr);

  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
}

function touchStarted() { getAudioContext().resume(); } 

  

function draw() {
  background(0);

  image(capture, 0, 0, width, height);

  let spectrum = fft.analyze();
  let bass, lowMid, mid, highMid, treble;

  bass = fft.getEnergy("bass");
  lowMid = fft.getEnergy("lowMid");
  mid = fft.getEnergy("mid");
  highMid = fft.getEnergy("highMid");
  treble = fft.getEnergy("treble");
  
  
  for(i = 1; i < 2; i ++){
     if (treble > 50) {
       //emit at 18250
      console.log('bass')
      //fill(255,0,0);
      //rect(100,100,100,100);
      save('mypic.jpg');
      noLoop();
      setTimeout(loop,2000);
     }
   }
   
   console.log("Bass: "+bass+" lowMid: "+lowMid+" mid: "+mid+" highMid: "+highMid+" treble: "+treble);

  }

    
  


      



