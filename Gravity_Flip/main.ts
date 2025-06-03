export const flip = (direction: string, array: number[]): number[] => {
  const result = array.sort((a: number, b: number): number => a - b);
  if (direction == "R") {
    return result;
  } else if (direction == "L") {
    return result.reverse();
  }
  return [];
};
