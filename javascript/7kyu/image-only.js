function imageFilter(arr) {
  for (var i = 0; i < arr.length; i++) {
    var filteredName = null;
    var str = arr[i];
    if(str.indexOf('.') > 0) {
      var point = str.indexOf('.');
      var fileType = str.slice(point + 1, point + 5);
      var fileCheck = fileType.toLowerCase();
      if (fileCheck ===  'jpg' || fileCheck === 'gif' || fileCheck === 'png' || fileCheck === 'tiff' || fileCheck === 'svg' || fileCheck === 'bmp') {
        var filename = str.slice(0, point);
        filteredName = [str, filename, fileType];
      }
    }
    arr[i] = filteredName;
  }
  return arr;
}
