type returnVal =
  | {
      error: true;
      message: string;
    }
  | {
      error: false;
      value?: number;
    };

function filterFloat(text: string, min: number, max: number): returnVal {
  const textTrim = text.trim();
  const value = parseFloat(textTrim);

  if (textTrim.length === 0) {
    return {
      error: true,
      message: "กรุณากรอกข้อมูล",
    };
  }

  const regex = /^-?[0-9]*\.?[0-9]*$/;

  if (!regex.test(textTrim)) {
    return {
      error: true,
      message: "กรอกข้อมูลไม่ถูกต้อง",
    };
  }

  if (isNaN(value)) {
    return {
      error: true,
      message: "กรอกข้อมูลไม่ถูกต้อง",
    };
  }

  if (value < min || value > max) {
    return {
      error: true,
      message: "กรอกข้อมูลไม่ถูกต้อง",
    };
  }

  return {
    error: false,
    value: value,
  };
}

export { filterFloat };
