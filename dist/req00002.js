"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterNumber = void 0;
function filterNumber(text, min, max) {
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
exports.filterNumber = filterNumber;
