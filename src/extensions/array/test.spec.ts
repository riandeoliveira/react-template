import { describe, expect, it } from "vitest";
import { arrayExtension } from ".";

describe("Array Extension", () => {
  it("Should return the last element of the array", () => {
    expect(arrayExtension.lastElement(["Apple", "Banana", "Orange"])).toBe("Orange");
  });

  it("Should remove an element from the array", () => {
    expect(arrayExtension.removeOne(["Apple", "Banana", "Orange"], "Banana")).toEqual([
      "Apple",
      "Orange",
    ]);
  });

  it("Should remove many elements from the array", () => {
    expect(arrayExtension.removeMany(["Apple", "Banana", "Banana"], "Banana")).toEqual(["Apple"]);
  });

  it("Should sort an array of numbers in ascending order", () => {
    expect(arrayExtension.sortNumberList([20, 1, 30, 5, 15])).toEqual([1, 5, 15, 20, 30]);
  });

  it("Should sort an array of strings in ascending order", () => {
    expect(arrayExtension.sortStringList(["orange", "apple", "Banana"])).toEqual([
      "apple",
      "Banana",
      "orange",
    ]);
  });

  it("Should sum all elements of the array", () => {
    expect(arrayExtension.sum([20, 10, 30, 25, 15])).toBe(100);
  });
});
