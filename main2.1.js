$(document).ready(function(){
 console.log(0);
 document.addEventListener('click', function(event){
      
  if (event.target.matches('.equal')) {
   var calcResult = eval(document.getElementById('display').innerHTML);
   console.log(calcResult);
   document.getElementById('display').innerHTML = calcResult;
   return;
  }
      
  if (event.target.matches('.ac')) {
   document.getElementById('display').innerHTML = '0';
   return;
  }
  
  if (!event.target.matches('.number')) return;
   var clickNumber = event.target.innerText;
   var beforClickNumber = document.getElementById('display').innerHTML;
   document.getElementById('display').innerHTML = beforClickNumber + clickNumber;
  });
});