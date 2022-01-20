var pretty_savage = ""
var prettySavage2= ""

function setup(){
    canvas = createCanvas(400, 320)
    canvas.position(479, 300)
    video = createCapture(VIDEO)
    video.size(450, 350)
    video.position(100, 100)
    video.hide()
}

function preload(){
    pretty_savage = loadSound("pretty_savage.mp3");
}


function draw(){
    image(video,0,0,400,320)
}

function play(){
    pretty_savage.play()
}

function stop(){
    pretty_savage.stop()
}
