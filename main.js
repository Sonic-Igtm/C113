function setup(){
    canvas=createCanvas(640, 480);
    canvas.position(110, 250);  
    video=createCapture(VIDEO);
    video.hide();
    }
    
    function draw(){
    image(video, 80, 50, 480, 380);
    circle(30, 30, 50)
    fill(56, 235, 1);
    rect(55, 15, 530, 30)
fill(210, 255, 4);

circle(610, 30, 50)
fill(56, 235, 1);
    rect(592, 55, 35, 370)
fill(210, 255, 4);

circle(610, 450, 50)
fill(56, 235, 1);
rect(55, 435, 530, 30)
fill(210, 255, 4);

circle(30, 450, 50)
fill(56, 235, 1);
rect(15, 55, 30, 370)
fill(210, 255, 4);
    }
    
    function take_snapshot(){
        save("happy_birthday.png");
    }