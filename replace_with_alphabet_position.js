
https://www.codewars.com/kata/replace-with-alphabet-position/train/javascript
let test = "The sunset sets at twelve o' clock.";
function alphabetPosition(text) {
  console.log("Input:", text);
  
  let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let finalArr = [];
  let newArr = text.split("");
  console.log(newArr);
  console.log(alphabet.length);
  newArr.forEach((el, i) => { 
    console.log(i);
    console.log(el, alphabet.indexOf(el.toLowerCase()));
    let eaIndex = alphabet.indexOf(el.toLowerCase());
    if (eaIndex > -1) {
      finalArr.push(el);
    }
  })
  console.log('newString:', newString);

}
alphabetPosition(test);