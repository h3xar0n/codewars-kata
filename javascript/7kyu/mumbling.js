function accum(s) {
	var letters = s.toLowerCase().split('');
    var phrase = '';
    for (var i = 0; i < letters.length; i++) {
      var portion = '';
      for (var j = 0; j < i+1; j++) {
        if (j === 0) {
          portion += letters[i].toUpperCase();
        } else {
          portion += letters[i];
        }
      }
      if (i < letters.length - 1) {
        phrase += portion + '-';
      } else {
        phrase += portion;
      }
    }
    return phrase;
}
