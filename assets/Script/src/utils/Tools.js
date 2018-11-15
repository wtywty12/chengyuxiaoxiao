"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tools = (function () {
    function Tools() {
    }
    Tools.getMapLength = function (map) {
        var length = 0;
        map.forEach(function (value) {
            length++;
        });
        return length;
    };
    return Tools;
}());
exports.Tools = Tools;
