
function showTime(){
    var time = document.querySelector('#time');
var d = new Date();
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();
var session = "AM";

if(h>12){
    session = "PM";
}

time.innerHTML =  h +  ":"  + m +  ":"  + s + " " + session; 
setTimeout(showTime, 1000);
}
showTime();