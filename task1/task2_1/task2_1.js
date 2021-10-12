
var letter="e";
 var letter_Counter = 0;
var str = prompt("Please enter your string");
 for (var i = 0; i< str.length; i++) 
 {
    if (str.charAt(i) == letter) 
      {
      letter_Counter=letter_Counter+1;
      }
  }
   document.write("<br> the string contains"+" "+letter_Counter+" " +"e letters");  