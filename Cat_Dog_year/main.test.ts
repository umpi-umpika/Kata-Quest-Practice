import { describe, it, expect } from "vitest";
import { humanYearsCatYearsDogYears } from "./main.ts";

describe("Years funciton should return humanYears, catYears and dogYears when input humanYears", () => {
    it("Function should return [0,0,0] when input humanYear as 0", () => {
        const humanYears: number = 0;
        const catYears: number = 0;
        const dogYears: number = 0;
        const expectResult: number[] = [humanYears,catYears,dogYears];
        expect(humanYearsCatYearsDogYears(humanYears)).toStrictEqual(expectResult)
    });
    it("Function should return [1,15,15] when input humanYear as 1", () => {
        const humanYear: number = 1;
        const catYears: number = 15;
        const dogYears: number = 15;
        const expectResult: number[] = [humanYear,catYears,dogYears];
        expect(humanYearsCatYearsDogYears(humanYear)).toStrictEqual(expectResult)
    });
        it("Function should return [2,24,24] when input humanYear as 2", () => {
        const humanYear: number = 2;
        const catYears: number = 24;
        const dogYears: number = 24;
        const expectResult: number[] = [humanYear,catYears,dogYears];
        expect(humanYearsCatYearsDogYears(humanYear)).toStrictEqual(expectResult)
    });
            it("Function should return [3,28,29] when input humanYear as 3", () => {
        const humanYear: number = 3;
        const catYears: number = 28;
        const dogYears: number = 29;
        const expectResult: number[] = [humanYear,catYears,dogYears];
        expect(humanYearsCatYearsDogYears(humanYear)).toStrictEqual(expectResult)
    });
});