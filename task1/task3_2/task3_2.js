          var element1 = prompt("Please enter the first element");
var element2 = prompt("Please enter your the second element");
var element3 = prompt("Please enter the third element ");
var element4 = prompt("Please enter your the forth element");
var element5 = prompt("Please enter the fifth element ");
                   
var arr=[element1,element2,element3,element4,element5]; 
          document.write("</br> <h2>  you've entered the values of </h2>  ".fontcolor( "red" ));
          document.write(arr);
         console.log(arr.sort(compareascending));
       document.write("</br>  <h2> After Sorting in Ascending Order </h2>".fontcolor( "red" ));  
      document.write(arr);
             console.log(arr.sort(comparedscending));
       document.write("</br> <h2> After Sorting in dscending Order </h2>".fontcolor( "red" ));  
      document.write(arr);
          
          
         function compareascending(a,b){
             return a-b;
             
         }
            function comparedscending(a,b){
             return b-a;
             
         }