var userInput = prompt("Enter a sentence to encrypt: ");
console.log(userInput);
var lastFirst = function() {
  var first = userInput.charAt(0).toUpperCase();
  var last = userInput.charAt(userInput.length - 1).toUpperCase();
  return last + first;
}
var attached = function(){
  return userInput + lastFirst();
}
alert(userInput);
alert(lastFirst());
alert(attached());
var fourth = function() {
  var middleChar = userInput.charAt(Math.round(userInput.length / 2));
  return middleChar + attached();
}
alert(fourth());
var finalPhrase = function(){
  return fourth().split("").reverse().join("");
}
alert(finalPhrase());
