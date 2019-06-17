// Goal is to find the "Digital Root" of a number
// The digital root is simply adding each individual number together
// So if it is "999"  you perform 9 + 9 + 9
// that equals 27, repeat, so 2 + 7
// that equals 9, which is the 'digital root' (only one digit left)

let num = 12341299;
function digital_root(n) {
  
  
  let newArray = [];
  let digiRoot = n;
  // Takes input number, converts to a string, then an array...
  let numberToArray = input => {
    let arr = input.toString().split("");
    return arr.map(x => parseInt(x));
  }
  
  let getDigiRoot = arrayInput => arrayInput.reduce((accum, currVal) => accum + currVal);

  do {
    newArray = numberToArray(digiRoot);
    console.log('Do statement, array;', newArray);
    digiRoot = getDigiRoot(newArray);
    console.log(`Do Statement, digiRoot:${digiRoot} length = ${digiRoot.toString().length}`);
    
  }
  while (digiRoot.toString().length > 1);
  
  console.log('while loop over, FINAL digital root =', digiRoot);
  return digiRoot;
  
}

digital_root(num);