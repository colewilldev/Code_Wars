// WORKING, but test suite is broken can't submit :(
let word = 'abba',
  wordsArray = ['aabb', 'abcd', 'bbaa', 'abab'],
  final = [];
  
// => ['aabb', 'bbaa']
function anagrams(word, words) {
  let sortedWord = word.split("").sort();
  
  
  for (let x = 0; x < words.length; x++) { 
    console.log(x+1, 'wordInArray:', words[x].split("").sort(), 'VS', 'primary:', sortedWord);
    let checkingWord = words[x].split("").sort();
    
    // for every element in each word from the wordsArray...
    for (var i = 0; i < words[x].length; i++) { 
      console.log(i, 'sortedWord', sortedWord[i], 'checkingWord', words[x].split("").sort()[i]);
      if (sortedWord[i] !== checkingWord[i]) {
        i = words[x].length +1;
        console.log('Stopping not a match, i is now =', i);
        words.splice(x, 1);
        console.log(words);
      } // ForLoop2
    }
    
    
  } // ForLoop1
  console.log('FINAL ARRAY CONTENTS --> --> ', words);
  return wordsArray;
} 
anagrams(word, wordsArray);