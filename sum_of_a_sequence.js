// sequenceSum(2,2,2) === 2
// sequenceSum(2,6,2) === 12 // 2 + 4 + 6
// sequenceSum(1,5,1) === 15 // 1 + 2 + 3 + 4 + 5
// sequenceSum(1,5,3) === 5 // 1 + 4

// if the first arg is greater than the 2nd return 0
// sum every number according to the "step" which is the 3rd arg

const sequenceSum = (begin, end, step) => {
  console.log('lets begin');
  if (begin > end) return 0;
    let final = 0;
    console.log('i begin:', begin);
    console.log('end: ', end);
  console.log('step is:', step);
  let newArr = [];
  
  for (let i = begin; i <= end; i++) { 
    console.log('inside for loop');
    console.log('step:', i * step);
    // if (i === begin) { 
    //   newArr.push(i);
    // }
    if (newArr.indexOf(i * step) < 0) { 
      newArr.push(i * step);
    }
    if (i * step <= end)
    { 
      newArr.push(i * step);
    } 
    console.log(newArr);
  }
  return newArr.reduce((accum, currVal) => accum + currVal);
};
// sequenceSum(2, 2, 2);
sequenceSum(2, 6, 2);
// sequenceSum(1, 5, 3);