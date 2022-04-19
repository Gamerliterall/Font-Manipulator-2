function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    
    canvas = createCanvas(550, 460);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function modelLoaded(){
    console.log('PoseNet Is Successfully Loaded');
}

function draw(){
    background('#969A97');
    fill('#F90093');
    stroke('#F90093');
    text("Hi! I am SolarDragon1X1");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        }
}