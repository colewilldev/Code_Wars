
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
let array = [ 1, 2, 0, 1, 0, 1, 0, 3, 0, 1 ];

//'["a","b","c","d",1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0]', instead got: '["a",0,"b","c","d",1,1,3,1,9,0,0,9,0,0,0,0,0,0,0]'

let moveZeros = (arr) => {
  
  let zeroArr = [];
  console.log('\n--> INPUT', arr);
  
  let i = arr.length-1;
  
  while (arr.indexOf(arr[i]) > -1) { 
    console.log('target:', arr[i]);
    
    if (arr[i] === 0) { 
      
      let spliced = arr.splice(i, 1)[0];
      console.log('spliced:', spliced);
      zeroArr.push(spliced);
    }
    
    i--;
  }
  console.log('zeroArr:', zeroArr);
  zeroArr.forEach(el => {
    console.log('pushing:', el);
    arr.push(el)
  });
  console.log(arr);

  
  
  return arr;
}
moveZeros(array);