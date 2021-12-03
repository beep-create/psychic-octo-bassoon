
video="";
status="";
objects=[];


function change_background() {
    document.body.style.backgroundImage = "url('camera.jpg')";
    console.log("united states canada mexico panama haiti jamaica peru republic dominican cuba carribean greenland el salvador too");
    
}

function preload() {
    video=createVideo('video.mp4');
    video.hide();

}

function setup() {
    canvas = createCanvas(480,380);
    canvas.center();
}

function draw() {
    image(video, 0,0 ,480,380);

   if(status != "") {
        objectDetector.detect(video, gotResults);
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status: Objects detected!";
            document.getElementById("number_of_objects").innerHTML = "Number of objects: " + objects.length;
            fill("#FF5454");
            percent=floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%" , objects[i].x+15, objects[i].y+15);
            noFill();
            stroke("#FF5454");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);


        }

   }




}


function gotResults(error,results) {
if (error) {
    console.error(error);

}
else {

console.log(results);
objects=results;

}

}


function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting objects...";
}

function modelLoaded() {
console.log("model loaded!");
status=true;
video.loop();
video.speed(1);
video.volume(0);


}