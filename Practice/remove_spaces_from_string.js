
let string = "8 j 8   mBliB8g  imjB8B8  jl  B";
function noSpace(x){
  let newArr = x.split("");
  let final = [];
  console.log(newArr);
    newArr.map((el, i) => {
    if (el !== " ") {
      final.push(el);
      console.log('Final Array...', final);
    }
  });
  return final.join("");
}
noSpace(string);