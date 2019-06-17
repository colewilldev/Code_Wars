// years divisible by 4 are leap years
// but years divisible by 100 are not leap years
// but years divisible by 400 are leap years
let yr = 1000;
function isLeapYear(year) {
  console.log(2000 % 4);
  console.log('year%4:', year % 4);
  console.log('year % 100', year % 100);
  console.log('year % 400', year % 400);

  let by4 = year % 4 === 0 ? true : false;
  let by100 = year % 100 === 0 ? true : false;
  let by400 = year % 400 === 0 ? true : false;

  console.log('by4:', by4);
  console.log('by100:',by100);
  

  if (by4 && !by100) {
    console.log('True condition 1');
    return true;
  } else if (by4) { 
    if (by400) { 
      console.log('by400:', by400);
      console.log('True condition 2');
      return true;
    }
  } else { 
    console.log('False!', year);
    return false;
  }
   
}
isLeapYear(yr);