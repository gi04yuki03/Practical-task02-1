const timeDisplay = document.getElementById('timeDisplay');
const START = document.getElementById('start');
const STOP = document.getElementById('stop');
const RESET = document.getElementById('reset');

let hour = 0;
let min = 0;  
let sec = 0; 
let msec = 0;


$(document).ready(function(){
function countUp ()
{
  msec += 1;
 
  if (msec > 9) {
      msec = 0;
      sec += 1;
  }
 
  if (sec > 59) {
      sec = 0;
      min += 1;
  }
 
  if (min > 59) {
      min = 0;
      hour += 1;
  }
 
  msecNumber = msec;
 

  if (sec < 10) {
      secNumber = sec.toString();
  } else {
      secNumber = sec;
  }
 

  if (min < 10) {
      minNumber = min.toString();
  } else {
      minNumber = min;
  }
 

    if (hour < 10) {
      hourNumber = hour.toString();
  } else {
      hourNumber = hour;
  }
 

  timeDisplay.innerHTML = hourNumber + ':' + minNumber + ':' + secNumber + ':' + msecNumber;
}


START.addEventListener('click' , () => {
  interval = setInterval(countUp, 100);  
  START.disabled = true;
  STOP.disabled = false;
  RESET.disabled = true; 
})


STOP.addEventListener('click' , () => {
  clearInterval(interval); 
  START.disabled = false;  
  STOP.disabled = true;  
  RESET.disabled = false;
})
        
        
RESET.addEventListener('click' , () => {
  timeDisplay.innerHTML = '0:0:0:0';  
  hour = 0;
  min = 0; 
  sec = 0;
  msec = 0;
  START.disabled = false;
  STOP.disabled = true; 
  RESET.disabled = true; 
 })
});