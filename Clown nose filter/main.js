noseX=0;
noseY=0;
function preload(){
  clownnose=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
 
}
function setup(){
  canvas=createCanvas(300,300);
  canvas.center();
  video=createCapture(VIDEO);
  video.size(300,300);
  video.hide();

  posenet=ml5.poseNet(video, Modelloaded);
  posenet.on('pose',gotPoses);


}
function gotPoses(results){
  if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x-12;
    noseY=results[0].pose.nose.y-12;
  }
}
function Modelloaded(){
  console.log('Posenet has loaded now ');
}
function draw(){
image(video, 0, 0, 300, 300);



image(clownnose, noseX, noseY, 30, 30);


}
  function snapshot(){
      save('NoseFilterImage.jpg');
  }