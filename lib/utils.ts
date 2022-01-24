export function approach(num: number, approach: number, delta: number) {
  if (num < approach) {
    if(num + delta > approach) {
      return approach;
    }
    return num + delta;
  }
  if (num > approach) {
    if(num - delta < approach) {
      return approach;
    }
    return num - delta;
  }
  return num;
}
