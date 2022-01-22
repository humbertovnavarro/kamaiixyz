export default function approach(num: number, approach: number, speed: number) {
  if(num < approach) {
    return num + speed;
  }
  if(num > approach) {
    return num - speed;
  }
  return num;
}
