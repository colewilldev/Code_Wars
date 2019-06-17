function enough(cap, on, wait) {
  if (cap < (on + wait)) {
    return Math.abs(cap - (on + wait));
  } else { return 0}  
}
enough(600, 60, 100);