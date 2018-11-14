"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SplitUtils = (function () {
    function SplitUtils() {
    }
    SplitUtils.splitNumberStr = function (src) {
        var strings = src.split(this.MAJOR_DELIMITER);
        var array = new Array();
        for (var i = 0; i < strings.length; i++) {
            array.push(Number(strings[i]));
        }
        return array;
    };
    SplitUtils.compactNumberStr = function (src) {
        var str = "";
        for (var i = 0; i < src.length; i++) {
            str += String(src[i]);
            if (i != src.length - 1) {
                str += this.MAJOR_DELIMITER;
            }
        }
        return str;
    };
    SplitUtils.splitNumberMap = function (src) {
        var map = new Map();
        var strings = src.split(this.SEMICOLON_DELIMITER);
        for (var i = 0; i < strings.length; i++) {
            var itemStr = strings[i].split(this.MAJOR_DELIMITER);
            map.set(Number(itemStr[0]), Number(itemStr[1]));
        }
        return map;
    };
    SplitUtils.MAJOR_DELIMITER = ",";
    SplitUtils.MINOR_DELIMITER = "|";
    SplitUtils.SEMICOLON_DELIMITER = ";";
    return SplitUtils;
}());
exports.SplitUtils = SplitUtils;
