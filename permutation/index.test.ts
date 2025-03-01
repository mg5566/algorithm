import { describe, it, expect } from "vitest";
import { permute } from "./index";

describe("permute", () => {
  it("숫자 배열 [1, 2, 3]의 모든 순열을 반환해야 한다", () => {
    const nums = [1, 2, 3];
    const expected = [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ];
    const result = permute(nums);
    console.log("Expected:", expected);
    console.log("Received:", result);
    expect(result).toEqual(expected);
  });

  it("숫자 배열 [0, 1]의 모든 순열을 반환해야 한다", () => {
    const nums = [0, 1];
    const expected = [
      [0, 1],
      [1, 0],
    ];
    const result = permute(nums);
    console.log("Expected:", expected);
    console.log("Received:", result);
    expect(result).toEqual(expected);
  });

  it("숫자 배열 [1]의 모든 순열을 반환해야 한다", () => {
    const nums = [1];
    const expected = [[1]];
    const result = permute(nums);
    console.log("Expected:", expected);
    console.log("Received:", result);
    expect(result).toEqual(expected);
  });

  it("빈 배열의 모든 순열을 반환해야 한다", () => {
    const nums: number[] = [];
    const expected: number[][] = [[]];
    const result = permute(nums);
    console.log("Expected:", expected);
    console.log("Received:", result);
    expect(result).toEqual(expected);
  });
});
