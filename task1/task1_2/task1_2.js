     var sum=0;
          
          while((Message!==0) && (sum<100)){
          var Message =parseInt(prompt("Enter the num")) ;
              if(isFinite(Message)==true){
          sum=sum+Message;
         
          }
               else{
              alert("It is not a numeric value");

          }
               }
           document.write("<br>The sum of numbers = <br>");

          document.write(sum); 