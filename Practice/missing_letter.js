//Goal Of the Kata Is to take a string of letters that is ascending and find the one that is missing

//refactored solution

function findMissingLetter(array){
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  let lowerCaseArray = array.map(x => x.toLowerCase());
  let firstLetter = lowerCaseArray[0];

  let newArr = alphabet.splice(alphabet.indexOf(firstLetter), lowerCaseArray.length + 1);
  
  newArr.forEach(el => { 
    if (lowerCaseArray.indexOf(el) === -1) { 
      missingLetter = el;
    }
  })
  
  if (array[0] == newArr[0].toUpperCase()) {  
    missingLetter = missingLetter.toUpperCase();
  } 

  return missingLetter;
}

//First Attempt that succeeds...

// let letters1 = ['b', 'c', 'd', 'f', 'g'];
// let letters2 = ['O', 'Q', 'R', 'S'];
// let missingLetter = '';

// function findMissingLetter(array){
//   const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
//   let lowerCaseArray = array.map(x => x.toLowerCase());
//   let firstLetter = lowerCaseArray[0];
//   let length = lowerCaseArray.length + 1;
  

//   console.log('lowerCase Array:', lowerCaseArray);
//   console.log('firstLetter:', firstLetter);
//   console.log('length +2:', length);
 
  
//   // get the matching section from alphabet
//   let index = alphabet.indexOf(firstLetter);
//   console.log('index', index);
//   let newArr = alphabet.splice(index, length);
//   console.log('newArr:', newArr);
  
  
//   newArr.forEach(el => { 
//     if (lowerCaseArray.indexOf(el) === -1) { 
//       missingLetter = el;
//       console.log('found the missing letter!', missingLetter);
      
//     }
//   })
//   console.log(`Testing the case of these letters === ${array[0] == newArr[0].toUpperCase()}`)
 
//   if (array[0] == newArr[0].toUpperCase()) {
//     console.log('Letter should be UPPERCASE, returning uppercase result');
//     missingLetter = missingLetter.toUpperCase();
//     console.log(missingLetter);
//   } 

//   return missingLetter;
// }

// findMissingLetter(letters2);