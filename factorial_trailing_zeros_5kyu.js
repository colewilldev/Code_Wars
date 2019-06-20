// https://www.codewars.com/kata/52f787eb172a8b4ae1000a34/train/javascript
// get the factorial of number
// 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720
// 720 has 1 trailing zero

// numbers can get big really quickly, and so can the trailing zeros...



function zeros(n) {
  if (n === 0) return 0;
  console.log('INPUT:', n);
  let array = [];
  let zeroCount = 0;
  for (let i = 1; i < n + 1; i++) { 
    
    array.push(i);

  } 
  
  // this will not work
  let factorialNum = array.reduce((acc, currVal) => acc * currVal);
  console.log('Reduction -->:', factorialNum);
  console.log(factorialNum.toString().split('e+'));
  let factorialnum = () => {
    // multiply and add all numbers together
    
  };
  

  // Will return ALL zeros NOT just trailing... need ONLY trailing
  // factorialNum.toString().split("").forEach(el => { 
  //   if (el === "0") { 
  //     zeroCount++;
  //   }
  // })
  // console.log('Found This Many zeros:', zeroCount);

  
  /// SCIENTIFIC NOTATION is a problem...
  let digitArr = factorialNum.toString().split("");
  console.log('length of digit array:', digitArr.length);
  for (let i = digitArr.length - 1; i > -1; i--) { 
    console.log('counting down:', digitArr[i]);
    if (digitArr[i] !== 0) { 
      console.log('no zeroes found');
      return zeroCount;
    }
    if (digitArr[i] == 0) {
      zeroCount++;
    } else { 
      console.log('Exiting Loop, should not see this again');
      console.log('Final Zero Count is:', zeroCount);
      return zeroCount;
    }
  }

}
zeros(25);
