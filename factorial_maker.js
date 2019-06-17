function factorial(n){
console.log('Input is =', n);
  let newArr = [];
  if (n === 0) return 0;
  for(let i = 1; i <= n; i++){
    newArr.push(i);
    console.log(i);
    console.log(newArr);
  }
  let ans = newArr.reduce((acc,currVal)=>{
    return acc * currVal
  })
  console.log(ans);
}

factorial(0);