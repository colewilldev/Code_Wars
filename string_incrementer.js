function incrementString(strng) {
  let newArr = strng.split("");
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let num = '';
  let endDigits = 0;
  let finalNum = '';
  
  let i = 0;
  do {
      
    console.log('newArr[i]', newArr[i]);
    if ((numbers.indexOf(parseInt(newArr[i])) > -1)) {
      num = newArr.slice(i, newArr.length).join("");
      console.log(num);
    }
    i++;
  } while ((i < newArr.length) && (num === ''));
  // num, is 000, preserve the zeroes
  let length = num.length;
  console.log('length:', length);
  
  for (let i = 0; i < num.length; i++) {
    finalNum += '0';
    if (num[i] != 0) {
      let theNum = num.split("").slice(i, num.length).join("");
      console.log('theNum:', theNum);
      endDigits += parseInt(theNum) + 1;
      console.log(endDigits);
      i = num.length;
    }
    
  }
}
  
  finalNum += endDigits.toString();
incrementString('foobar012');