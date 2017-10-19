function descendingOrder(n){
  // Turn the number into an array
  var array = n.toString(10).split("");
  // Sort the digits into order, then reverse
  var sortedArray = array.sort().reverse();
  // Turn the array of strings into an array of numbers
  var arrayNumbers = sortedArray.map(function(t){return parseInt(t)});
  // Turn the array of numbers into a number
  var finalNumber = parseInt(arrayNumbers.join(''));
  return finalNumber;
}
