function findShort(s){
  var arrayStrings = s.split(' ');
  var wordLengths = [];
  for (var i = 0; i < arrayStrings.length; i++) {
    var wordLength = arrayStrings[i].length;
    wordLengths.push(wordLength);
  }
  wordLengths.sort(function (a, b) {  return a - b;  });
  return wordLengths[0];
}
