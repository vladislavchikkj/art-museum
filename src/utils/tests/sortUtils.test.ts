import { add } from "../sortUtils.ts";

describe("SortUtils", () => {
  test("should add 1+3=4", () => {
    expect(add(1, 3)).toBe(4);
  });
});
