type returnVal =
  | {
      error: true;
      message: string;
    }
  | {
      error: false;
      value?: number;
    };

function filterNumber(
  text: string,
  min: number | undefined,
  max: number | undefined
): returnVal {
  const textTrim = text.trim();

  if (textTrim.length === 0)
    return {
      error: true,
      message: "กรุณากรอกข้อมูล",
    };

  const regex = /^-?[0-9]*$/;

  if (!regex.test(textTrim))
    return {
      error: true,
      message: "กรอกข้อมูลไม่ถูกต้อง",
    };

  const parseIntText = parseInt(textTrim);

  if (min != undefined) {
    if (parseIntText < min)
      return {
        error: true,
        message: "กรอกข้อมูลไม่ถูกต้อง",
      };
  }

  if (max != undefined) {
    if (parseIntText > max)
      return {
        error: true,
        message: "กรอกข้อมูลไม่ถูกต้อง",
      };
  }

  return {
    error: false,
    value: parseIntText,
  };
}

export { filterNumber };
