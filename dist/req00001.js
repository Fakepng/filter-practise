"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterString = void 0;
function filterString(text, min = undefined) {
    const textTrim = text.trim();
    if (min != undefined) {
        if (min < 1)
            return {
                error: true,
                message: "กรุณากรอกจำกัดตัวเลขที่มีมากกว่า 1",
            };
        if (textTrim.length <= min)
            return {
                error: true,
                message: "กรอกข้อมูลไม่ถูกต้อง",
            };
    }
    if (textTrim.length === 0)
        return {
            error: true,
            message: "กรุณากรอกข้อมูล",
        };
    const regex = /^[a-zA-Z]*$/;
    if (!regex.test(textTrim))
        return {
            error: true,
            message: "กรอกข้อมูลไม่ถูกต้อง",
        };
    return { error: false, value: textTrim };
}
exports.filterString = filterString;
