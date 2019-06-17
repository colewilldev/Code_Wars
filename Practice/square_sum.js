function squareSum(numbers){
  return numbers.map(x => Math.pow(x, 2)).reduce((acc, currVal) => acc + currVal);
}
squareSum([1, 2, 3, 4, 5]);