function strCount(str, letter){  
  let array = str.split("");
  let counter = 0;
  array.forEach((el, i) => { 
    if (el === letter) { 
      counter++;
      
    }
  })
  return counter;
}
strCount('asdlfkjhasdlkfhjsadlkjfhsafd', 'f');