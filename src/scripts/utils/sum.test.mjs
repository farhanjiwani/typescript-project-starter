import { sum } from "./sum";

describe("Just testing Jest", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
