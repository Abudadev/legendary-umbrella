var Object_Wanted = "";

function setup(){
    canvas = createCanvas(400,400);
    canvas.position(480,330);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,400,400);
}

function start(){
    ObjectDetector = ml5.objectDetector("cocossd",ModelLoaded);
    document.getElementById("S").innerHTML = "Status: Looking for desired object";
}

function ModelLoaded(){
    console.log("Model has been successfully loaded :D");
    Object_Wanted = document.getElementById("Object").value
    console.log(Object_Wanted);
}