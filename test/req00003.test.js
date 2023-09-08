const { filterFloat } = require("../dist/req00003");

test("TC00001", () => {
  expect(filterFloat("test", -1, 123)).toEqual({
    error: true,
    message: "กรอกข้อมูลไม่ถูกต้อง",
  });
});

test("TC00002", () => {
  expect(filterFloat("test123", -1, 123)).toEqual({
    error: true,
    message: "กรอกข้อมูลไม่ถูกต้อง",
  });
});

test("TC00003", () => {
  expect(filterFloat("123", -1, 123)).toEqual({
    error: false,
    value: 123,
  });
});

test("TC00004", () => {
  expect(filterFloat("-2", -1, 123)).toEqual({
    error: true,
    message: "กรอกข้อมูลไม่ถูกต้อง",
  });
});

test("TC00005", () => {
  expect(filterFloat("-1.2", -1, 123)).toEqual({
    error: true,
    message: "กรอกข้อมูลไม่ถูกต้อง",
  });
});

test("TC00006", () => {
  expect(filterFloat("0", -1, 123)).toEqual({
    error: false,
    value: 0,
  });
});

test("TC00007", () => {
  expect(filterFloat("12.3", -1, 123)).toEqual({
    error: false,
    value: 12.3,
  });
});

test("TC00008", () => {
  expect(filterFloat("12..3", -1, 123)).toEqual({
    error: true,
    message: "กรอกข้อมูลไม่ถูกต้อง",
  });
});

test("TC00009", () => {
  expect(filterFloat("124", -1, 123)).toEqual({
    error: true,
    message: "กรอกข้อมูลไม่ถูกต้อง",
  });
});

test("TC00010", () => {
  expect(filterFloat("test_1", -1, 123)).toEqual({
    error: true,
    message: "กรอกข้อมูลไม่ถูกต้อง",
  });
});

test("TC00011", () => {
  expect(filterFloat("_", -1, 123)).toEqual({
    error: true,
    message: "กรอกข้อมูลไม่ถูกต้อง",
  });
});

test("TC00012", () => {
  expect(filterFloat("_123", -1, 123)).toEqual({
    error: true,
    message: "กรอกข้อมูลไม่ถูกต้อง",
  });
});

test("TC00013", () => {
  expect(filterFloat("    ", -1, 123)).toEqual({
    error: true,
    message: "กรุณากรอกข้อมูล",
  });
});

test("TC00014", () => {
  expect(filterFloat("", -1, 123)).toEqual({
    error: true,
    message: "กรุณากรอกข้อมูล",
  });
});
