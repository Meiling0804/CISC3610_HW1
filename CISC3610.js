window.onload = function () {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

  

    draw_sky(canvas, context);

    //To draw a house
    context.beginPath();
    var house = new Image();
    house.src = "house.png";
    house.onload = function () {
    context.drawImage(house, 200, 350,400,400);
    }

    //to draw a sun
    context.beginPath();
    var sun = new Image();
    sun.src = "sun.png";
    sun.onload = function () {
    context.drawImage(sun, 50, 50);
    }
    //to draw a butterfly
    context.beginPath();
    var butterfly1 = new Image();
    butterfly1.src = "butterfly1.png";
    butterfly1.onload = function () {
    context.drawImage(butterfly1, 700, 400,100,100);
    }
    context.beginPath();
    var butterfly2 = new Image();
    butterfly2.src = "butterfly2.png";
    butterfly2.onload = function () {
    context.drawImage(butterfly2, 1000, 500,100,100);
    }
    //to draw a bird
    context.beginPath();
    var bird = new Image();
    bird.src = "bird.png";
    bird.onload = function () {
    context.drawImage(bird, 900, 100,150,100);
    }
    //To draw a mountain
    context.beginPath();
    context.moveTo(0, 500);
    context.lineTo(120, 400);
    context.lineTo(180, 350);
    context.lineTo(300, 300);
    context.lineTo(380, 340);
    context.lineTo(500, 290);
    context.lineTo(580, 220);
    context.lineTo(680, 180);
    context.lineTo(800, 230);
    context.lineTo(880, 190);
    context.lineTo(960, 240);
    context.lineTo(1060,200);
    context.lineTo(1150,260);
    context.lineTo(1400,500);

    var grd = context.createLinearGradient(0, 0, 1000, 0);
    grd.addColorStop(0, "#46AF5B");
    grd.addColorStop(1, "#66B476");

    // Fill with gradient
    context.fillStyle = grd;
    context.fillRect(0, 500, 1400, 300);
    context.fill();
    context.stroke();
    context.closePath();
    //for loop draw 3 clouds
    var x =30;
    var y=120;
    for (var i = 0; i < 3; i++) {
        draw_Cloud(context, x,y);
        x += 500;
    }

    //To draw a mountain
    context.beginPath();
    context.moveTo(0, 300);
    context.lineTo(120, 140);
    context.lineTo(300, 160);
    context.lineTo(500, 170);
    context.lineTo(580, 220);
    context.lineTo(680, 180);

    //for loop to draw grasses
    var x = 500;
    var y = 700;
    for (var i = 0; i < 10; i++) {
        draw_grass(context, x, y);
        x += 80
    }
    context.fillStyle = "pink";
    context.font = "20px Arial";
	context.strokeText("CISC 3610 Meiling Huang ", 50, 750);
    contexr.fill();
    
};


function draw_Cloud(context, x, y) {
    context.beginPath();
    context.arc(x, y, 60, Math.PI * 0.5, Math.PI * 1.5);
    context.arc(x + 70, y - 60, 70, Math.PI * 1, Math.PI * 1.85);
    context.arc(x + 152, y - 45, 50, Math.PI * 1.37, Math.PI * 1.91);
    context.arc(x + 200, y, 60, Math.PI * 1.5, Math.PI * 0.5);
    context.moveTo(x + 200, y + 60);
    context.lineTo(x, y + 60);
    context.fillStyle = "white";
    context.fill();
}

function draw_grass(context, x, y) {
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + 5, y - 40);
    context.lineTo(x + 15, y - 20);
    context.lineTo(x + 25, y - 40);
    context.lineTo(x + 35, y - 15);
    context.lineTo(x + 45, y - 30);
    context.lineTo(x + 55, y);
    context.closePath(0);
    context.fillStyle = "#00994C";
    context.fill();
    context.stroke();
}

function draw_sky(canvas, context) {
    context.beginPath();
    var skyColor = context.createLinearGradient(0, 0, 0, canvas.height);
    skyColor.addColorStop(0, "#33DDFF");
    skyColor.addColorStop(1, "white");
    context.fillStyle = skyColor;
    context.fillRect(0, 0, canvas.width, canvas.height);
}
