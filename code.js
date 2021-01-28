function isOddWithoutModulo(num) {
  // your code here
  num = Math.abs(num)
  var remainder = (num/2)-Math.floor((num/2));
  var isOdd = false;
  if (remainder > 0)
  {
      var isOdd = true;
  }
  return isOdd;
}
