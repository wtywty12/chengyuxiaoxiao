(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/src/utils/Tools.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'b70c16cb3RBjImXMw7h9ewO', 'Tools', __filename);
// Script/src/utils/Tools.js

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StorageInfo_1 = require("../game/common/data/StorageInfo");
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
        return Math.floor(totalNumber * 0.25);
    };
    Tools.deepCopyArray = function (array) {
        var newArray = [];
        for (var i = 0; i < array.length; i++) {
            newArray.push(array[i]);
        }
        return newArray;
    };
    Tools.numberToDate = function (num) {
        var second = 60;
        var minute = 60;
        var hour = 60;
        var timeStr = "";
        if (num < second) {
            return num.toString();
        } else if (num < second * minute) {
            var sec = Math.floor(num % second);
            var min = Math.floor(num / second);
            var secStr = "";
            if (sec < 10) {
                secStr = "0" + secStr.toString();
            }
            var minStr = "";
            if (min < 10) {
                minStr = "0" + minStr.toString();
            }
            return minStr + ":" + minStr;
        } else {
            return num.toString();
        }
    };
    Tools.judgeIsSomeDay = function (year, month, date) {
        var myDate = new Date();
        var isSomeDay = false;
        if (Number(year) == myDate.getFullYear()) {
            if (Number(month) == myDate.getMonth()) {
                if (Number(date) == myDate.getDate()) {
                    isSomeDay = true;
                }
            }
        }
        return isSomeDay;
    };
    Tools.resetDate = function () {
        var myDate = new Date();
        var year = myDate.getFullYear();
        var month = myDate.getMonth();
        var date = myDate.getDate();
        StorageInfo_1.StorageInfo.setGameYear(year.toString());
        StorageInfo_1.StorageInfo.setGameMonth(month.toString());
        StorageInfo_1.StorageInfo.setGameDate(date.toString());
    };
    return Tools;
}();
exports.Tools = Tools;

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=Tools.js.map
        