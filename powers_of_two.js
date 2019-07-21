function isPowerOfTwo(n){
  let array = Math.sqrt(n).toString().split("");
  let final = true;
  console.log('input:', n);
  console.log(`array.indexOf('.') > -1 ? ${array.indexOf('.')> -1}`);
  console.log('index of .:',array.indexOf('.'))
  
  
  

  if((array.indexOf('.') > -1)){
    console.log('FAlSE there is a decimal');
    final = false;
    console.log('Final = ', final);
    return final;
  }
  if (n === 2 || 1) return final = true;
  console.log('Final is:', final);
  return final;
  
  
}
isPowerOfTwo(2);