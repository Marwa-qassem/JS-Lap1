var radius =parseInt( prompt("Please enter the radius of circle","Type your value here"));
var area=radius*radius*Math.PI;
alert("the total area of circle ="+area);
var value =parseInt( prompt("What is the value you want to calculate its square root","Type your value here"));
var root=Math.sqrt(value);
alert("Square root of "+" "+value+" " +"is"+" "+root);
var angle =parseInt( prompt("What is the angle you want to calculate its cosine","Type your value here"));
function cos(degrees) {
  var radians = (degrees * Math.PI) / 180;
  return Math.cos(radians);
}

value1 = cos(angle);
document.write("cos of"+angle+" "+"="+value1);

