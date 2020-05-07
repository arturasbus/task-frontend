function counter(){

let startingTime = 58709000;
 
let seconds = 1000;
let minutes = seconds * 60;
let hours = minutes * 60;
let days = hours * 24;

let d = Math.floor(startingTime / (days));
let h  = Math.floor((startingTime % (days)) / (hours));
let m = Math.floor((startingTime % (hours)) / (minutes));
let s = Math.floor((startingTime % (minutes)) / (seconds));

document.getElementById('days').innerText = d;
document.getElementById('hours').innerText = h;
document.getElementById('minutes').innerText = m;
document.getElementById('seconds').innerText = s;

}

setInterval(function(){
    counter();
}, 1000);

