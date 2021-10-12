var str = prompt("Please enter your string");

 
                 
           var r = confirm("Consider case sensitivity of the entered string");

          
var x=0;
var y=str.length -1;
var flag;
          
      
                        while (y > x) {
                            
                           if(r===false){
                str= str.toLowerCase();
                             
                }
                              
                  
                  if (str.charAt(x++) !==str.charAt(y--) ) 
        { 
            flag=1;
             
        

         }
                            
         }
            if (flag==1)
        { 
         
          document.write(str+ " " + "is not palindrome"); 
     
        

         }
     if (flag!==1)
        { 
         
          document.write(str+ " " + "is  palindrome"); 
     
        

         }
  

 