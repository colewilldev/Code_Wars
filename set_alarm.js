function setAlarm(employed, vacation){
console.log(employed, vacation);
  
  if (employed && vacation) {
    console.log('1');
    return false;
  } else if (!employed && vacation) {
     console.log('2');
    return false;
  } else if (!employed&&!vacation) {
     console.log('3');
    return false;
  } else if (employed && !vacation) {
    console.log('this one!');
    return true;
  }
}
setAlarm(true, false);