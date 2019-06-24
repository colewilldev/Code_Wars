function duplicateCount(input){
if (input == 0) return 0;
  console.log('INPUT: ', input);
  let testEl = 'a';
  let test = input.match('/'+testEl+'/g');
  console.log('TEST:', test);
  for (let i = 0; i < input.length; i++){
    let el = '/'+input[i]+'/g';
    console.log("el:", el);
    console.log(input.match(el));
    
  }
}
duplicateCount('aabcde');