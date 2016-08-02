// JavaScript Document
window.onload = function(){
var c = document.getElementById("playarea");
var cxt = c.getContext("2d");

cxt.fillStyle="#FF0000";
cxt.beginPath();

cxt.arc(cx,cy,15,0,Math.PI*2,true);
cxt.closePath();
cxt.fill();
}

