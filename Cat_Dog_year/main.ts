export function humanYearsCatYearsDogYears(
  humanYears: number
): [number, number, number] {
  // Option 1: started from diff idea
  if (humanYears <= 0) return [0, 0, 0];
  if (humanYears == 1) return [1, 15, 15];
  let catYears = 24 + (humanYears - 2) * 4;
  let dogYears = 24 + (humanYears - 2) * 5;
  return [humanYears, catYears, dogYears];
}

// Option 2: for loop
//   if (humanYears == 0) {
//     return [0, 0, 0];
//   }
//   let catYears = 0;
//   let dogYears = 0;
//   for (let i = 1; i <= humanYears; i++) {
//     catYears += i == 1 ? 15 : i == 2 ? 9 : 4;
//     dogYears += i == 1 ? 15 : i == 2 ? 9 : 5;
//   }
//   return [humanYears, catYears, dogYears];  
// }