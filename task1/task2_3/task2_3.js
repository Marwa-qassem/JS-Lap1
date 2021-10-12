var user_name=prompt("Enter your name","characters only");
 var  Regex_username= /^[a-zA-Z]+$/ ; 
 if(Regex_username.test(user_name)===false){
    alert("The name is not valid")
     var user_name=prompt("Enter your name","characters only");

}

var user_phone=prompt("Enter your phone number","nmbers only (8 numbers)");
var  Regex_phone=/^[0-9]{8}$/
if(Regex_phone.test(user_phone)===false){
    alert("The phone number is not valid")
    var user_phone=prompt("Enter your phone number","nmbers only (8 numbers)");

}

var user_mobile=prompt("Enter your mobile number","nmbers only (11 numbers)");
 var  Regex_mobile=/^01(0|1|2)[0-9]{8}$/
if(Regex_mobile.test(user_mobile)===false){
    alert("The mobile number is not valid")
    var user_mobile=prompt("Enter your mobile number","nmbers only (11 numbers)");

}

var user_email=prompt("Enter your email","for example username@gmail.com");
var Regex_email =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

if(Regex_email.test(user_email)===false){
    alert("The email is not valid")
    var user_email=prompt("Enter your email","for example username@gmail.com");

}
var today=new Date();
var Date = today.toDateString();
var color = prompt( "Which color would you like to choose red or blue or green ?")



           
if(color==="blue"){
document.write("<h3> Welcome dear guest".fontcolor("blue")+" "+user_name)
document.write("<h3> Your telephone number is".fontcolor("blue")+" "+user_phone)
document.write("<h3> Your mobile number is ".fontcolor("blue")+ " "+user_mobile)
document.write("<h3> Your Email is ".fontcolor("blue")+" "+user_email)
document.write("<h3> Today is ".fontcolor("blue")+" "+Date)

    
}
          if(color==="green"){
document.write("<h3> Welcome dear guest".fontcolor("green")+" "+user_name)
document.write("<h3> Your telephone number is".fontcolor("green")+" "+user_phone)
document.write("<h3> Your mobile number is ".fontcolor("green")+" "+user_mobile)
document.write("<h3> Your Email is ".fontcolor("green")+" "+user_email)
document.write("<h3> Today is ".fontcolor("green")+" "+Date)

    
}
  if(color==="red"){
document.write("<h3> Welcome dear guest".fontcolor("red")+" "+user_name)
document.write("<h3> Your telephone number is".fontcolor("red")+" "+user_phone)
document.write("<h3> Your mobile number is ".fontcolor("red")+" "+user_mobile)
document.write("<h3> Your Email is ".fontcolor("red")+" "+user_email)
      document.write("<h3> Today is ".fontcolor("red")+" "+Date)

    
}


