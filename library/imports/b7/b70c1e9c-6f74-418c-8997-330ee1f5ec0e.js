"use strict";
cc._RF.push(module, 'b70c16cb3RBjImXMw7h9ewO', 'Tools');
// Script/src/utils/Tools.js

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Tools = function () {
    function Tools() {}
    Tools.getMapLength = function (map) {
        var length = 0;
        map.forEach(function (value) {
            length++;
        });
        return length;
    };
    Tools.getGridNumber = function (tableWidth, tableHeight) {
        var totalNumber = tableWidth * tableHeight;
        var reduceNumber = 0;
        if (totalNumber % 4 != 0) {
            reduceNumber = -1;
        }
        return Math.floor(totalNumber * 0.25 + reduceNumber);
    };
    return Tools;
}();
exports.Tools = Tools;

cc._RF.pop();