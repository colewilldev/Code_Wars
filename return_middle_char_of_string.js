// Goal Is to take a string in
// If the string is Odd then return the middle Character
// If the string is even then return the 2 middle characters...


let string = "111123AA678111";
// let string = "Antidisestablishmentarianism";
function getMiddle(s){
  const half = input => { return Math.floor(input / 2)};
  console.log((s.length % 2) > 0 ? s[half(s.length)] : s[half(s.length - 1)] + s[half(s.length)]);
}

getMiddle(string);