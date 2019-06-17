
function spinWords(string) {
  let newArr = string.split(" ");
  let finalArr = [];
  newArr.forEach((el, i) => { 
    if (el.length >= 5) {
      finalArr.push(el.split("").reverse().join(""));
    } else { 
      finalArr.push(el);
    }
  })
  return finalArr.join(" ");
}
spinWords("This is another test");


// First Pass

// function spinWords(string) {
//   console.log(string);
//   let newArr = string.split(" ");
//   let finalArr = [];
//   newArr.forEach((el, i) => { 
//     if (el.length >= 5) {
//       console.log('5 letter word found:', el);
//       let transformedWord = el.split("").reverse().join("");
      
//       finalArr.push(transformedWord);
//     } else { 
//       finalArr.push(el);
//     }
//   })

  
//   console.log(finalArr.join(" "));
//   return finalArr.join(" ");

// }
// spinWords("This is another test");