"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StorageInfoClass = (function () {
    function StorageInfoClass() {
    }
    Object.defineProperty(StorageInfoClass, "instance", {
        get: function () {
            if (this._instance == null) {
                this._instance = new StorageInfoClass();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    StorageInfoClass.prototype.setTopScore = function (score) {
    };
    StorageInfoClass.prototype.setRedPackTimes = function (times) {
    };
    StorageInfoClass.prototype.getTopScore = function () {
    };
    StorageInfoClass.prototype.getRedPackTimes = function () {
    };
    return StorageInfoClass;
}());
exports.StorageInfo = StorageInfoClass.instance;
