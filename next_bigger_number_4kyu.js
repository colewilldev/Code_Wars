
// https://www.codewars.com/kata/55983863da40caa2c900004e/train/javascript

// Transform a number to make the
//biggest possible version, using the same digits of that number and return it

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// If no bigger number can be composed using those digits, return -1:

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1

//2001 ==> 1
function nextBigger(n){
  console.log(`\n INPUT: ${n}`);
  let newArr = n.toString().split('');
  // first char stays the same, but the other digits need to be sorted for the largest one
  let firstNum = newArr[0];
  let shallow = newArr.slice(1, newArr.length);
  console.log('Slice:', shallow);
  console.log(`\n FIRST NUM:${firstNum}`);

  
  let restOfNum = shallow.join("");

  let containerArray = [];
  
const permutator = (inputArr) => {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m)
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next))
     }
   }
 }

  permute(inputArr);
  console.log(result);
 return result;
}
  let lastArr = [];
  permutator(shallow).forEach(el => { 
    let parsed = el.join('');
    console.log(parsed);
  })





}
nextBigger(2017);