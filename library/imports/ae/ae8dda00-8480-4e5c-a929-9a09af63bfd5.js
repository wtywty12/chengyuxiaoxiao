"use strict";
cc._RF.push(module, 'ae8ddoAhIBOXKkpmgmvY7/V', 'RecordGrid');
// Script/src/game/common/model/RecordGrid.js

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RecordGridClass = function () {
    function RecordGridClass() {
        this.chooseGridMap = new Map();
        this.gameTableGridMap = new Map();
        this.tempChooseGridMap = new Map();
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
    RecordGridClass.prototype.setChooseGridMap = function (index, grid) {
        if (typeof grid != null) {
            this.chooseGridMap.set(index, grid);
        }
    };
    RecordGridClass.prototype.getChooseGridMap = function () {
        return this.chooseGridMap;
    };
    RecordGridClass.prototype.settempChooseGridMap = function (index, str) {
        if (typeof str != null) {
            this.tempChooseGridMap.set(index, str);
        }
    };
    RecordGridClass.prototype.gettempChooseGridMap = function () {
        return this.tempChooseGridMap;
    };
    RecordGridClass.prototype.displayGrid = function (str, index) {
        if (typeof str != "string" || typeof index != "number" || str == "") {
            return;
        }
        this.gameTableGridMap.get(index).setGridString(str);
        this.gameTableGridMap.delete(index);
    };
    RecordGridClass.prototype.clearRecordData = function () {
        this.chooseGridMap.clear();
    };
    RecordGridClass.prototype.clearTempRecordData = function () {
        this.tempChooseGridMap.clear();
    };
    RecordGridClass.prototype.onGameOver = function () {
        this.clearRecordData();
        this.gameTableGridMap.clear();
    };
    RecordGridClass.prototype.onClearAll = function () {
        this.clearRecordData();
        this.gameTableGridMap.clear();
    };
    return RecordGridClass;
}();
exports.RecordGrid = RecordGridClass.instance;

cc._RF.pop();