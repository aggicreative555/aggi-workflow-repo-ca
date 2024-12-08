import { expect, describe, it } from "vitest";
import { isActivePath } from "./userInterface";

describe("isActivePath", () => {
  it("Returns true when path matches exactly", () => {
    expect(isActivePath("/login", "/login")).toBe(true);
  });

  it("Returns true for root path when path is exactly / or /index.html", () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  it("Returns true when current path includes the href", () => {
    expect(isActivePath("/venue", "/venue/id")).toBe(true);
    expect(isActivePath("/id", "/venue/id")).toBe(true);
  });

  it("Returns false when paths don't match", () => {
    expect(isActivePath("/login", "/register")).toBe(false);
    expect(isActivePath("/venue", "/login")).toBe(false);
  });
});
