import type { LocalStorageKeys } from "types/local-storage";
import { beforeEach, describe, expect, it } from "vitest";
import { baseLocalStorageTool } from ".";

const storageMockData = {
  access_token: "983fc27br46t986347tbrv73",
  authenticated: true,
  time: 200,
};

const setStorageMockItems = (): void => {
  baseLocalStorageTool.setItem("access_token", "983fc27br46t986347tbrv73");
  baseLocalStorageTool.setItem("authenticated", true);
  baseLocalStorageTool.setItem("time", 200);
};

describe("Base Local Storage Tool", () => {
  beforeEach(() => {
    baseLocalStorageTool.clear();
  });

  it("Should populate Local Storage", () => {
    setStorageMockItems();

    expect(baseLocalStorageTool.length).toBe(3);
  });

  it("Should clear Local Storage", () => {
    setStorageMockItems();

    baseLocalStorageTool.clear();

    expect(baseLocalStorageTool.length).toBe(0);
  });

  it("Should be null when trying to access an item with a non-existent key", () => {
    expect(baseLocalStorageTool.getItem<LocalStorageKeys, unknown>("access_token")).toBe(null);
  });

  it("Should get an item by key", () => {
    baseLocalStorageTool.setItem("values", storageMockData);

    expect(baseLocalStorageTool.getItem("values")).toEqual(storageMockData);
  });

  it("Should get an item by index", () => {
    setStorageMockItems();

    expect(baseLocalStorageTool.key(2)).toBe("time");
  });

  it("Should be null when trying to access an item with a non-existent index", () => {
    setStorageMockItems();

    expect(baseLocalStorageTool.key(5)).toBe(null);
  });

  it("Should remove an item by key", () => {
    setStorageMockItems();

    baseLocalStorageTool.removeItem("authenticated");

    expect(baseLocalStorageTool.getItem("authenticated")).toBe(null);
  });
});
