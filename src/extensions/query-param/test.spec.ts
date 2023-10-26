import { describe, expect, it } from "vitest";
import { queryParamExtension } from ".";

describe("Query Param Extension", () => {
  it("Should convert an object to URL parameters", () => {
    expect(queryParamExtension.toQuery({ name: "John", age: "20" })).toBe("name=John&age=20");
  });

  it("Should convert an object to URL parameters, ignoring empty values", () => {
    expect(queryParamExtension.toQuery({ name: "John", age: "" })).toBe("name=John");
  });
});
