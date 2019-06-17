
//This is the refactor

function divisibleByThree(str) { 
  return (str.split("").map(x => parseInt(x)).reduce((accumulator, currentValue) => accumulator + currentValue) % 3) === 0;
}
divisibleByThree('123');

// first Run... Take a number add its parts, and if the remainder is 0 it IS divisible by three
function divisibleByThree(str) {
  
  
  
  let split = str.split("");
  console.log('split:', split);
  let mapMe = split.map(x => parseInt(x));
  console.log('map:',mapMe);
  let reduceIt = mapMe.reduce((acc, currVal) => acc + currVal );
  console.log(reduceIt);
  let accum = 0;
  
  console.log('accum:', accum);
  return accum % 3 === 0;

  
}
divisibleByThree('123');