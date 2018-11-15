"use strict";
cc._RF.push(module, 'ae8ddoAhIBOXKkpmgmvY7/V', 'RecordGrid');
// Script/src/game/common/model/RecordGrid.js

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RecordGridClass = function () {
    function RecordGridClass() {
        this.chooseGridAry = [];
        this.gameTableGridMap = new Map();
    }
    Object.defineProperty(RecordGridClass, "instance", {
        get: function get() {
            if (this._instance == null) {
                this._instance = new RecordGridClass();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    RecordGridClass.prototype.setGameTableGridMap = function (index, grid) {
        if (typeof index == "number" && typeof grid != null) {
            this.gameTableGridMap.set(index, grid);
        }
    };
    RecordGridClass.prototype.getGameTableGridMap = function () {
        return this.gameTableGridMap;
    };
    RecordGridClass.prototype.setChooseGridAry = function (grid) {
        if (typeof grid != null) {
            this.chooseGridAry.push(grid);
        }
    };
    RecordGridClass.prototype.getChooseGridAry = function () {
        return this.chooseGridAry;
    };
    RecordGridClass.prototype.getChooseGridByIndex = function (index) {
        return null;
    };
    RecordGridClass.prototype.getGridMapLength = function () {
        var index = 0;
        this.chooseGridAry.forEach(function (value) {
            index++;
        });
        return index;
    };
    RecordGridClass.prototype.displayGrid = function (str, index) {
        if (typeof str != "string" || typeof index != "number") {
            return;
        }
        this.gameTableGridMap.get(index).setGridString(str);
    };
    RecordGridClass.prototype.clearRecordData = function () {
        this.chooseGridAry = [];
    };
    RecordGridClass.prototype.onGameOver = function () {
        this.clearRecordData();
        this.gameTableGridMap.clear();
    };
    return RecordGridClass;
}();
exports.RecordGrid = RecordGridClass.instance;

cc._RF.pop();