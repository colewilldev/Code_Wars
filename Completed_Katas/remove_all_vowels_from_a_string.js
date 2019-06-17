// remove all vowels from a string
// y is not a vowel for this kata
let string = "raada";
// Final Refactored Solution
function disemvowel(str) {
  console.log('INITIAL:', str);
  let vowels = ["A", 'E', 'I', 'O', 'U'];
  let newArr = str.split("");

  newArr.forEach((el, i) => {
    console.log('Times Run', i );
    console.log('This is the element:', el);
    if (vowels.indexOf(el.toUpperCase()) > -1) { 
      console.log(`vowels.index, el: ${el} indexOf: ${vowels.indexOf(el.toUpperCase())}`);
      
      newArr.splice(i, 1);
      console.log('newArr after splice', newArr);
    }
    
  });
   newArr.forEach((el, i) => {
    console.log('Times Run', i );
    console.log('This is the element:', el);
    if (vowels.indexOf(el.toUpperCase()) > -1) { 
      console.log(`vowels.index, el: ${el} indexOf: ${vowels.indexOf(el.toUpperCase())}`);
      
      newArr.splice(i, 1);
      console.log('newArr after splice', newArr);
    }
    
  });
  let final = newArr.join("");
  console.log('final', final);
  
  return final;
}
disemvowel(string);

// Initial solution
// function disemvowel(str) {
//   console.log('INITIAL:', str);
//   let vowels = ["A", 'E', 'I', 'O', 'U'];
//   let newArr = str.split("");

//   newArr.forEach((el, i) => {
//     if (vowels.indexOf(el.toUpperCase()) > -1) { 
//       console.log('splicing...:',newArr.splice(i, 1));
//     }
    
//   });
//   let final = newArr.join("");
//   console.log(final);
  
//   return final;
// }
// disemvowel(string);