import { beforeEach, describe, expect, it } from "vitest";
import { localStorageTool } from ".";

describe("Local Storage Tool", () => {
  beforeEach(() => {
    localStorageTool.clear();
  });

  it("Should set and get an access token", () => {
    const accessToken: string = "983fc27br46t986347tbrv73";

    localStorageTool.setAccessToken(accessToken);

    expect(localStorageTool.getAccessToken()).toBe(accessToken);
  });

  it("Should return an empty string when access token is not a string", () => {
    const accessToken: number = 12345;

    localStorageTool.setAccessToken(accessToken as any);

    expect(localStorageTool.getAccessToken()).toBe("");
  });
});
