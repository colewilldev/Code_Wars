// Array Sorted so that odd ascending even descending
// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 8, 4, 5, 2]

function sortArray(array) {
    // I belive that you can solve this ;)
  console.log('INPUT:', array);

  let evens = [];
  let oddArray = [];
  //pull even numbers out of array
  array.forEach(el => {
    if (el % 2 === 0 || el === 0) {
      evens.push(el);
    } else { 
      oddArray.push(el);
    }
  })
  console.log(evens.sort((a, b) => { return b - a }));
  oddArray.sort((a, b) => { return a - b });
  return oddArray.concat(evens);
}
sortArray([5, 3, 2, 8, 1, 4])