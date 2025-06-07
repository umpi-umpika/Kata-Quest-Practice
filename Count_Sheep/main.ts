export function countSheep(num: number): string {
  if(num == 0) {
    return "";
  }
  let sheepmurmur: string = ""
  for (let i = 1; i <= num; i++) {
    const temp: string = i + " sheep..."
    sheepmurmur = sheepmurmur + temp
  }
  return sheepmurmur
}


//better
// return num <= 0 ? "" : 
// Array.from({length: num}, (_, i) => `${i + 1} sheep...`).join('');