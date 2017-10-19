function stray(numbers) {
  var strayNumber = 0;
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] === numbers[i + 1]) {
      if (numbers[i] !== numbers[i + 2]) {
        strayNumber = numbers[i + 2];
        return strayNumber;
      }
    } else if (numbers[i] === numbers[i + 2]) {
      strayNumber = numbers[i + 1];
      return strayNumber;
    } else if (numbers[i + 1] === numbers[i + 2]) {
      strayNumber = numbers[i];
      return strayNumber;
    }
  }
}
