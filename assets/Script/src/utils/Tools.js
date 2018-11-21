"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StorageInfo_1 = require("../game/common/data/StorageInfo");
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
            var numStr = num.toString();
            if (num < 10) {
                numStr = "0" + num.toString();
            }
            return "00:" + numStr;
        }
        else if (num < second * minute) {
            var sec = Math.floor(num % second);
            var min = Math.floor(num / second);
            var secStr = "";
            if (sec < 10) {
                secStr = "0" + sec.toString();
            }
            var minStr = "";
            if (min < 10) {
                minStr = "0" + min.toString();
            }
            return minStr + ":" + secStr;
        }
        else {
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
}());
exports.Tools = Tools;
