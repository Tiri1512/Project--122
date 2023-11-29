x = 0;
y = 0;
speak_data = "";

to_number = "";

apple = "";

screen_width = 0;
screen_height = 0;
draw_apple = "";


var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload() 
{ 
}


function loadImage()
{

}

function Number()
{
  to_number = Number(content);
  if(Number.isInteger(to_number));
{}
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

 document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
 if(content =="apple")
 {
     x = Math.floor(Math.random() * 900);
     y = Math.floor(Math.random() * 600);
     document.getElementById("status").innerHTML = "Started drawing apple ";
     draw_apple = "set";
 }
}

function setup() {
  canvas = createCanvas(1580, 780);
    screen_width = window.innerWidth;
    screen_height = window.innerHeight;
    canvas.position(0, 150);

}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";

    speak()
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
