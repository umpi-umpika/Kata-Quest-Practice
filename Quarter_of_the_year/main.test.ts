import { describe, it, expect } from "vitest";
import { quarterOf } from "./main.ts";

describe("Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number", () => {
  it("Function should return quarter 1 when input month as 1",
    () => {
      const month: number = 1;
      const expectResult: number = 1;
      expect(quarterOf(month)).toStrictEqual(expectResult);
    });
    it("Function should return quarter 2 when input month as 4",
    () => {
      const month: number = 4;
      const expectResult: number = 2;
      expect(quarterOf(month)).toStrictEqual(expectResult);
    });
    it("Function should return quarter 3 when input month as 7",
    () => {
      const month: number = 7;
      const expectResult: number = 3;
      expect(quarterOf(month)).toStrictEqual(expectResult);
    });
        it("Function should return quarter 4 when input month as 10",
    () => {
      const month: number = 10;
      const expectResult: number = 4;
      expect(quarterOf(month)).toStrictEqual(expectResult);
    });
});
