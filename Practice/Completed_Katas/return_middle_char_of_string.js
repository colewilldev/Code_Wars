let string = "111123AA678111";
// let string = "Antidisestablishmentarianism";
function getMiddle(s){
  const half = input => { return Math.floor(input / 2)};
  console.log((s.length % 2) > 0 ? s[half(s.length)] : s[half(s.length - 1)] + s[half(s.length)]);
}

getMiddle(string);