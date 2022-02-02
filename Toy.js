img = "";
Status = "";

function preload(){
    img = loadImage("toy.jpg");
}

function draw(){
    image(img, 0, 0, 640, 420);
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Object Detecting";

    function modelLoaded(){
        console.log("ModelLoaded!");
        Status = true;
        objectDetector.detect(img, gotResult);
    }
    
    function gotResult(error, results){
       if(error){
            console.error(error);
       }
       console.log(results);
    }
}