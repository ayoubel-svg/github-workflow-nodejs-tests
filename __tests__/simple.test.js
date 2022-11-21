import { Sum } from "./simple";
test("1 + 1 = 2", () => {
  expect(Sum(1, 1)).toBe(2);
});

test("1 + 2 = 3", () => {
  expect(Sum(1, 1)).toBe(3);
});
