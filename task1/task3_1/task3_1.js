var element1 = prompt("Please enter the first element");
var element2 = prompt("Please enter your the second element");
var element3 = prompt("Please enter the third element ");
                   
var arr=[element1,element2,element3];
          console.log(arr);
    var sum=( parseInt(arr[0])+parseInt(arr[1])+parseInt(arr[2]));
          var str1=new String("<h2>Sum of 3 values </h2> ");
        document.write(str1.fontcolor( "red" )+" "+element1+"+"+element2+"+"+element3+"="+sum);
              var multiplication=( parseInt(arr[0])*parseInt(arr[1])*parseInt(arr[2]));
          var str2=new String("<h2> Muliplication of 3 values </h2>");
          document.write(str2.fontcolor( "red" ))
        document.write(" "+"<h2>"+element1+"*"+element2+"*"+element3+"="+sum+"</h2>");
              var Division =( parseInt(arr[0])/parseInt(arr[1])/parseInt(arr[2]));
            var str3=new String("<h2>Division of 3 values </h2>");
          document.write(str3.fontcolor( "red" ))
                  document.write(" "+element1+"/"+element2+"/"+element3+"="+Division);
