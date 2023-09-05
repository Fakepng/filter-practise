const { filterString } = require("../dist/req00001");

test("TC00001", () => {
  expect(filterString("test")).toEqual({ error: false, value: "test" });
});

test("TC00002", () => {
  expect(filterString("test123")).toEqual({
    error: true,
    message: "กรอกข้อมูลไม่ถูกต้อง",
  });
});

test("TC00003", () => {
  expect(filterString("123")).toEqual({
    error: true,
    message: "กรอกข้อมูลไม่ถูกต้อง",
  });
});

test("TC00004", () => {
  expect(filterString("test_1")).toEqual({
    error: true,
    message: "กรอกข้อมูลไม่ถูกต้อง",
  });
});

test("TC00005", () => {
  expect(filterString("_")).toEqual({
    error: true,
    message: "กรอกข้อมูลไม่ถูกต้อง",
  });
});

test("TC00006", () => {
  expect(filterString("_123")).toEqual({
    error: true,
    message: "กรอกข้อมูลไม่ถูกต้อง",
  });
});

test("TC00007", () => {
  expect(filterString("      ")).toEqual({
    error: true,
    message: "กรุณากรอกข้อมูล",
  });
});

test("TC00008", () => {
  expect(filterString("")).toEqual({
    error: true,
    message: "กรุณากรอกข้อมูล",
  });
});

test("TC00009", () => {
  expect(filterString("test", -1)).toEqual({
    error: true,
    message: "กรุณากรอกจำกัดตัวเลขที่มีมากกว่า 1",
  });
});

test("TC00010", () => {
  expect(filterString("test", 0)).toEqual({
    error: true,
    message: "กรุณากรอกจำกัดตัวเลขที่มีมากกว่า 1",
  });
});

test("TC00011", () => {
  expect(filterString("test", 3)).toEqual({ error: false, value: "test" });
});

test("TC00012", () => {
  expect(filterString("tes", 3)).toEqual({
    error: true,
    message: "กรอกข้อมูลไม่ถูกต้อง",
  });
});
