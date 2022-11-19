status = "";
Flower_image = "";

function preload(){
    Flower_image = loadImage("images.jpg");
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector= ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML ="Staus : Detecting Objects";
}
function draw(){
    image(Flower_image,0 ,0 ,640 ,420);
    

}
function modelLoaded(){
console.log("Model Loaded");
status = true;
objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
}
