var string  = ["Barn cows dont like cheese or facebook"];


function toWeirdCase(str){
  
  let inputArray = str;
  inputArray.forEach(el => { 
    let split = str[0].split("");
    console.log(split);

    let transformedCase =split.map((currentValue, index) => { 
      if (index % 2 === 0) {
        
        return currentValue.toUpperCase();
        console.log(currentValue);
      } else { 
        return currentValue.toLowerCase();
      }
      
    })
    console.log('Transformation?', transformedCase);
    return transformedCase;
  })
 
}
toWeirdCase(string);