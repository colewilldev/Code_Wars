
// Take a string and convert it to "(" or ")"
// If a character appears more than 1x --> )
// If only once it is -->                  (

let string = "Success"   // =>  "()()()"
function duplicateEncode(word) {
  let inputString = word.toLowerCase(),
      finalString = '',
      characterCount = {},
      newArr = inputString.split("");
  
  for (let i = 0; i < inputString.length; i++) { 
    let eaChar = inputString.charAt(i);
    if (!characterCount[eaChar]) {
      characterCount[eaChar] = 1;
    } else if (characterCount[eaChar]) {
      characterCount[eaChar] += 1;
    }
  }  
  console.log('This obj stores the count for all characters:', characterCount);
  console.log('About to .map over...', newArr);
  newArr.map((el) => { 
    if (characterCount[el] > 1) {
      console.log(`El is:${el}, # count: ${characterCount[el]}, Adding ")" to final string`);
      finalString += ")";
    } else { 
      console.log(`El is:${el}, # count: ${characterCount[el]}, Adding "(" to final string`);
      finalString += "(";
    }
  })
  console.log('Final Transformed String:', finalString);
  return finalString;

}
duplicateEncode(string);
