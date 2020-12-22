canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1_width=120;
car1_height=70;
car1_img="Car1.jpg";
car1_x=10;
car1_y=10;

car2_width=120;
car2_height=70;
car2_img="Car2.jpg";
car2_x=10;
car2_y=100;

background_img="racing.jpg";

function Add(){
    background_img_tag=new Image(); 
    background_img_tag.onload=upload_background;
    background_img_tag.src=background_img;

   
    car1_img_tag=new Image(); 
    car1_img_tag.onload=upload_car1;
    car1_img_tag.src=car1_img;

    car2_img_tag=new Image(); 
    car2_img_tag.onload=upload_car2;
    car2_img_tag.src=car2_img;

}
function upload_background(){
    ctx.drawImage(background_img_tag,0,0,canvas.width,canvas.height)
}

function upload_car1(){
    ctx.drawImage(car1_img_tag,car1_x,car1_y,car1_width,car1_height);
}

function upload_car2(){
    ctx.drawImage(car2_img_tag,car2_x,car2_y,car2_width,car2_height);
}

window.addEventListener("keydown", Mykeydown);

function Mykeydown(e){
    Keypress=e.keyCode;
    console.log(Keypress);

    if(Keypress=='38'){
        Car1_up();
        console.log("Up arrow");
    }

    if(Keypress=='40'){
        Car1_down();
        console.log("Down arrow");
    }

    if(Keypress=='37'){
        Car1_left();
        console.log("Left arrow");
    }

    if(Keypress=='39'){
        Car1_right();
        console.log("Right arrow");
    }

    if(Keypress=='65'){
        Car2_left();
        console.log("A");
    }

    if(Keypress=='68'){
        Car2_right();
        console.log("D");
    }

    if(Keypress=='83'){
        Car2_down();
        console.log("S");
     }
    if(Keypress=='87'){
        Car2_up();
        console.log("W");
    }

    if(car1_x==680){
        console.log("Car 1 wins")
        document.getElementById("Status").innerHTML="Car 1 is the winner of the race";
    }
    if(car2_x==680){
        console.log("Car 2 wins")
        document.getElementById("Status").innerHTML="Car 2 is the winner of the race";
    }
}

function Car1_up(){
    if(car1_y>=0){
        car1_y=car1_y-10;
        upload_background();
        upload_car1();
        upload_car2();

    }
 
}
function Car1_down(){
    if(car1_y<600){
        car1_y=car1_y+10;
        upload_background();
        upload_car1();
        upload_car2();

        
    }
 
}
function Car1_left(){
    if(car1_x>0){
        car1_x=car1_x-10;
        upload_background();
        upload_car1();
        upload_car2();

        
    }
 
}
function Car1_right(){
    if(car1_x<680){
        car1_x=car1_x+10;
        upload_background();
        upload_car1();
        upload_car2();

        
    }
 
}


function Car2_up(){
    if(car2_y>=0){
        car2_y=car2_y-10;
        upload_background();
        upload_car1();
        upload_car2();

    }
 
}
function Car2_down(){
    if(car2_y<600){
        car2_y=car2_y+10;
        upload_background();
        upload_car1();
        upload_car2();

        
    }
 
}
function Car2_left(){
    if(car2_x>0){
        car2_x=car2_x-10;
        upload_background();
        upload_car1();
        upload_car2();

        
    }
 
}
function Car2_right(){
    if(car2_x<680){
        car2_x=car2_x+10;
        upload_background();
        upload_car1();
        upload_car2();

        
    }
 
}


