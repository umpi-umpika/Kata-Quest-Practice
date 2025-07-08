import { describe, it, expect } from "vitest";
import { otherAngle } from "./main.ts";

describe("otherAngle should return other angle of triangle when input two interior angles in degrees", () => {
  it ("Function should return 90 when input 30 and 60", () => {
    const a: number = 30;
    const b: number = 60;
    expect(otherAngle(a,b)).toStrictEqual(90);
  })
  it ("Function should reture result of 180-(a+b) when input a and b for any number", () => {
    const a: number = Math.floor(Math.random()*20);
    const b: number = Math.floor(Math.random()*20);
    expect(otherAngle(a,b)).toStrictEqual(180-(a+b));
  })
})
