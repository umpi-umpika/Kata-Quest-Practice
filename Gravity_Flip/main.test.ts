import { describe, it, expect } from "vitest";
import { flip } from "./main.ts";

describe("Flip function should be able to apply gravity direction to array number", () => {
  // it("Function should be able to read argument of direction is 'R' and array is '[2, 4, 6]'", () => {
  //     const direction: string = "R"
  //     const array: number[] = [2, 4, 6]
  //     const expectResult: (string | number[])[] = ["R",[2, 4, 6]]
  //     expect(flip(direction, array)).toStrictEqual(expectResult)
  // })
  // it("Function should be able to read argument of direction is 'L' and array is '[5, 3, 1]'", () => {
  //     const direction: string = "L"
  //     const array: number[] = [5, 3, 1]
  //     const expectResult: (string | number[])[] = ["L",[5, 3, 1]]
  //     expect(flip(direction, array)).toStrictEqual(expectResult)
  // })
  // it("Function should be able to read argument of direction is 'L' and array is '[5, 4, 3]'", () => {
  //     const direction: string = "L"
  //     const array: number[] = [5, 4, 3]
  //     const expectResult: (string | number[])[] = ["L",[5, 4, 3]]
  //     expect(flip(direction, array)).toStrictEqual(expectResult)
  // })
  it("Function should return '[1, 3, 7, 9]' when direction is 'R' and array is '[1, 9, 7, 3]'", () => {
    const direction: string = "R";
    const array: number[] = [1, 9, 7, 3];
    const expectResult: number[] = [1, 3, 7, 9];
    expect(flip(direction, array)).toStrictEqual(expectResult);
  });
  it("Function should return '[9, 7, 3, 1]' when direction is 'L' and array is '[1, 9, 7, 3]'", () => {
    const direction: string = "L";
    const array: number[] = [1, 9, 7, 3];
    const expectResult: number[] = [9, 7, 3, 1];
    expect(flip(direction, array)).toStrictEqual(expectResult);
  });
  it("Function should return '[11, 7, 5, 1]' when direction is 'L' and array is '[7, 1, 5, 11]'", () => {
    const direction: string = "L";
    const array: number[] = [7, 1, 5, 11];
    const expectResult: number[] = [11, 7, 5, 1];
    expect(flip(direction, array)).toStrictEqual(expectResult);
  });
  it("Function should return '[]' when direction is not 'R' or 'L'", () => {
    const letters = "ABCDEFGHIJKMNOPQSTUVWXYZ";
    const randomIndex = Math.floor(Math.random() * letters.length);
    const direction: string = letters[randomIndex];
    const array: number[] = [7, 1, 5, 11];
    const expectResult: number[] = [];
    expect(flip(direction, array)).toStrictEqual(expectResult);
  });
});
