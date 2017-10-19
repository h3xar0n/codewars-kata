function getMiddle(s) {
  var array = s.split('');
  if (array.length % 2 == 0) {
    var mid = array.length / 2 - 1;
    var answer = array.slice(mid, mid + 2);
  } else {
    var mid = Math.floor(s.length / 2);
    var answer = array.slice(mid, mid + 1);
  }
  answer = answer.join('');
  return answer;
}
