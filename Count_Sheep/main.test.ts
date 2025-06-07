import { describe, it, expect } from "vitest";
import { countSheep } from "./main.ts";

describe("Function should return a string with a murmur when input will always be valid ", () => {
  it("Function should return an empty sting when input 0", () => {
    const num: number = 0;
    const expectResult: string = "";
    expect(countSheep(num)).toStrictEqual(expectResult);
  });
  it("Function should return '1 sheep...' when input 1", () => {
    const num: number = 1;
    const expectResult: string = "1 sheep...";
    expect(countSheep(num)).toStrictEqual(expectResult);
  });
  it("Function should return 'n sheep...' when input n", () => {
    const num: number = Math.floor(Math.random() * 100);
    let expectResult: string = "";
    for (let i = 1; i <= num; i++) {
      const temp: string = i + " sheep...";
      expectResult = expectResult + temp;
    }
    expect(countSheep(num)).toStrictEqual(expectResult);
  });
});
