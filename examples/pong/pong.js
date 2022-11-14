const canvas = document.getElementById("pong");
const context =  canvas.getContext("2d");




// context.fillStyle = "black";
// context.fillRect(100,200,50,75);

// context.fillStyle = "red";
// context.beginPath();
// context.arc(300, 350, 100, 0, Math.PI*2, false);
// context.closePath();
// context.fill();

// function drawRect(x,y,w,h,color){
//     context.fillStyle = color;
//     context.fillRect(x,y,w,h);
// }

// function drawCircle(x,y,r, color){
//     context.fillStyle = color;
//     context.beginPath();
//     context.arc(x,y,r,0,Math.PI*2,false);
//     context.closePath();
//     context.fill();
// }

// function drawText(text, ){
//     context.fillStyle = color;
//     context.font = "75px fantasy";
//     context.fillText(tetx, x, y);
// }

// let rectX = 0;
// function render(){
//     drawRect(0,0,600,400,"black");
//     drawRect(rectX, 100, 100, 100, "red");
//     rectX = rectX + 100;
// }

const user = {
    x:0
}