function positiveSum(arr) {
  var answer = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      answer = answer + arr[i];
    }
  }
  return answer;
}
