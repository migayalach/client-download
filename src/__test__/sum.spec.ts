function sum(a: number, b: number): number {
  return a + b;
}

function res(a: number, b: number): number {
  return a - b;
}

test("Adds 1 + 2 to equals 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("Subtract 5 - 2 to equals 3", () => {
  expect(res(5, 2)).toBe(3);
});
