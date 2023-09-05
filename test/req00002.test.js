const { filterNumber } = require("../dist/req00002");

test("TC00001", () => {
  expect(filterNumber("test", -1, 123)).toEqual({
    error: true,
    message: "กรอกข้อมูลไม่ถูกต้อง",
  });
});

test("TC00002", () => {
  expect(filterNumber("test123", -1, 123)).toEqual({
    error: true,
    message: "กรอกข้อมูลไม่ถูกต้อง",
  });
});

test("TC00003", () => {
  expect(filterNumber("123", -1, 123)).toEqual({
    error: false,
    value: 123,
  });
});

test("TC00004", () => {
  expect(filterNumber("-2", -1, 123)).toEqual({
    error: true,
    message: "กรอกข้อมูลไม่ถูกต้อง",
  });
});

test("TC00005", () => {
  expect(filterNumber("-1", -1, 123)).toEqual({
    error: false,
    value: -1,
  });
});

test("TC00006", () => {
  expect(filterNumber("0", -1, 123)).toEqual({
    error: false,
    value: 0,
  });
});

test("TC00007", () => {
  expect(filterNumber("12.3", -1, 123)).toEqual({
    error: true,
    message: "กรอกข้อมูลไม่ถูกต้อง",
  });
});

test("TC00008", () => {
  expect(filterNumber("124", -1, 123)).toEqual({
    error: true,
    message: "กรอกข้อมูลไม่ถูกต้อง",
  });
});

test("TC00009", () => {
  expect(filterNumber("test_1", -1, 123)).toEqual({
    error: true,
    message: "กรอกข้อมูลไม่ถูกต้อง",
  });
});

test("TC00010", () => {
  expect(filterNumber("_", -1, 123)).toEqual({
    error: true,
    message: "กรอกข้อมูลไม่ถูกต้อง",
  });
});

test("TC00011", () => {
  expect(filterNumber("_123", -1, 123)).toEqual({
    error: true,
    message: "กรอกข้อมูลไม่ถูกต้อง",
  });
});

test("TC00012", () => {
  expect(filterNumber("    ", -1, 123)).toEqual({
    error: true,
    message: "กรุณากรอกข้อมูล",
  });
});

test("TC00013", () => {
  expect(filterNumber("", -1, 123)).toEqual({
    error: true,
    message: "กรุณากรอกข้อมูล",
  });
});
