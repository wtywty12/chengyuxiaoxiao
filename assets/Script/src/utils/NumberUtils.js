"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberUtils = (function () {
    function NumberUtils() {
    }
    NumberUtils.convertNumber = function (num) {
        var smallLength = 4;
        var retStr = "";
        var str = num.toString();
        var strLength = str.length;
        if (strLength <= smallLength) {
            return str;
        }
        else if (strLength > smallLength && strLength <= smallLength * 2) {
            retStr = this.sliceToStr(str, 4, "A");
        }
        else if (strLength > smallLength && strLength <= smallLength * 3) {
            retStr = this.sliceToStr(str, 4 * 2, "B");
        }
        else if (strLength > smallLength && strLength <= smallLength * 4) {
            retStr = this.sliceToStr(str, 4 * 3, "C");
        }
        else if (strLength > smallLength && strLength <= smallLength * 5) {
            retStr = this.sliceToStr(str, 4 * 4, "D");
        }
        else if (strLength > smallLength && strLength <= smallLength * 6) {
            retStr = this.sliceToStr(str, 4 * 5, "E");
        }
        else if (strLength > smallLength && strLength <= smallLength * 7) {
            retStr = this.sliceToStr(str, 4 * 6, "F");
        }
        else if (strLength > smallLength && strLength <= smallLength * 8) {
            retStr = this.sliceToStr(str, 4 * 7, "G");
        }
        return retStr;
    };
    NumberUtils.sliceToStr = function (str, length, toStr) {
        return str.slice(0, str.length - length) + "." + str.slice(str.length - length, str.length -
            (length - 2)) + toStr;
    };
    return NumberUtils;
}());
exports.NumberUtils = NumberUtils;
