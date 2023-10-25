import { describe, expect, it } from "vitest";
import { stringExtension } from ".";

describe("String Extension", () => {
  it("Should capitalize the first letter of a string", () => {
    expect(stringExtension.capitalize("hello, World!")).toBe("Hello, World!");
  });

  it("Should convert any value to a string", () => {
    // number
    expect(stringExtension.toString(12345)).toBe("12345");
    expect(stringExtension.toString(NaN)).toBe("NaN");
    expect(stringExtension.toString(Infinity)).toBe("Infinity");
    expect(stringExtension.toString(-Infinity)).toBe("-Infinity");

    // boolean
    expect(stringExtension.toString(true)).toBe("true");
    expect(stringExtension.toString(false)).toBe("false");

    // null
    expect(stringExtension.toString(null)).toBe("null");

    // undefined
    expect(stringExtension.toString(undefined)).toBe("undefined");

    // object
    expect(stringExtension.toString([1, 2, 3, 4, 5])).toBe(JSON.stringify([1, 2, 3, 4, 5]));
    expect(stringExtension.toString({ name: "John", age: 20 })).toBe(
      JSON.stringify({ name: "John", age: 20 }),
    );
  });

  it("Should truncate a string if it exceeds the specified maximum length", () => {
    expect(stringExtension.truncate("This is my text!", 7)).toBe("This is ...");
  });
});
