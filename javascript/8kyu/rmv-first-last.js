function removeChar(str){
  var myArray = str.split('');
  myArray.pop();
  myArray.shift();
  result = myArray.join('');
  return result;
}
