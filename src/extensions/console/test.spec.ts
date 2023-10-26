import { describe, expect, it, vi } from "vitest";
import { consoleExtension } from ".";

describe("ConsoleExtension", () => {
  it("Should log an object or an array as formatted JSON", () => {
    const logSpy = vi.spyOn(console, "log");

    const data = {
      name: "John",
      age: 20,
    };

    consoleExtension.logJSON(data);

    expect(logSpy).toHaveBeenCalledWith(JSON.stringify(data, null, 2));

    logSpy.mockRestore();
  });
});
