difference= 0
rightWristX= 0
leftWristX= 0

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500)

    canvas = createCanvas(550, 500)
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function draw() {
    background('#a5cfbc')
    fill('#c77146')
    stroke('#c77146')
    textFont('Poppins')
    text('Vedhansh', 0, 300)
    textSize(difference)

    document.getElementById('font_size').innerHTML = 'Font Size = ' + difference + " px"
}

function modelLoaded() {
    console.log('PoseNet is Initialized!')
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results)

        leftWristX = results[0].pose.leftWrist.x
        rightWristX = results[0].pose.rightWrist.x  
        difference = floor(leftWristX - rightWristX)

        console.log

    }
}