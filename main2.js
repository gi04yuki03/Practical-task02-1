$(document).ready(function(){
 document.addEventListener('click', function(event){
      
  if (event.target.matches('.equal')) {
   var calcResult = eval(document.getElementById('display').innerHTML);
   document.getElementById('display').innerHTML = calcResult;
   return;
  }
  
  console.log(calcResult);
      
  if (event.target.matches('.ac')) {
   document.getElementById('display').innerHTML = '0';
   return;
  }
  
  if (event.target.matches('.number')) {
   var clickNumber = event.target.innerText;
   var displayNumber = document.getElementById('display').innerHTML;
   if (displayNumber == 0){
    document.getElementById('display').innerHTML = clickNumber;
   }else{
   document.getElementById('display').innerHTML = displayNumber + clickNumber;
   }
   console.log(clickNumber);
   
  }
  if (event.target.matches('.symbol') ){
   var clickSymbol = event.target.innerText;
   var displaySymbol = document.getElementById('display').innerHTML;
   if (displaySymbol[displaySymbol.length-1] == '+' ||
   displaySymbol[displaySymbol.length-1] == '-' ||
   displaySymbol[displaySymbol.length-1] == '*' ||
   displaySymbol[displaySymbol.length-1] == '/' ||
   displaySymbol[displaySymbol.length-1] == '.' 
   ) {
     document.getElementById('display').innerHTML = displaySymbol;
   }else{
    document.getElementById('display').innerHTML = displaySymbol + clickSymbol;
    }
  }
   console.log(clickSymbol);
 });
});