"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringUtils = (function () {
    function StringUtils() {
    }
    StringUtils.isEmpty = function (value) {
        return value == null || value == "" || value.length == 0 || typeof (value) == "undefined";
    };
    StringUtils.getName = function (url) {
        var name = url.substr((url.lastIndexOf("/") + 1), url.length);
        return name;
    };
    StringUtils.trim = function (src) {
        var str = src.replace(/(^\s*)|(\s*$)/g, "");
        return str;
    };
    StringUtils.leftTrim = function (src) {
        var str = src.replace(/(^\s*)/g, "");
        return str;
    };
    StringUtils.rightTrim = function (src) {
        var str = src.replace(/(\s*$)/g, "");
        return str;
    };
    return StringUtils;
}());
exports.StringUtils = StringUtils;
