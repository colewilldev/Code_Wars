function alphabetPosition(text) {
  // Your Code Here!
  console.log('INPUT:', text);
  let aplhabetString = 'abcdefghijklmnopqrstuvwxyz';
  let alphabetArr = aplhabetString.split("");

  
  let workingArr = text.split("");

  let finalArr = [];

  workingArr.forEach(el => { 
    let eaIndex = alphabetArr.indexOf(el.toLowerCase());
    console.log(el, eaIndex);
    // if the index is greater than -1, the element IS in the alphabet array --> return that number!
    if (eaIndex > -1) { 
      finalArr.push(eaIndex + 1);
    }
  })
  console.log('Final Arr:', finalArr);
  return finalArr;a
}
alphabetPosition("The sunset sets at twelve o' clock.");

// Solution: "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"