var mouseEvent="empty";
var last_position_of_x, last_position_of_y;
var canvas= document.getElementById('myCanvas');

ctx=canvas.getContext("2d");
var color="black";
var line_width=2;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    line_width=document.getElementById("line_width").value;

    mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;  
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;  

    if (mouseEvent=="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=line_width;

    console.log("Last position of X and Y co-ordinates= " );
    console.log("X= " + last_position_of_x);
    console.log("Y= " + last_position_of_y);

    ctx.moveTo(last_position_of_x, last_position_of_y);


    console.log("Current position of X and Y co-ordinates= ");
    console.log("X= " + current_position_of_mouse_x);
    console.log("Y= " + current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();
    
    }
    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
mouseEvent="mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
mouseEvent="mouseup";
}

function clearArea(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
