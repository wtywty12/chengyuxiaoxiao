"use strict";
cc._RF.push(module, '057c0eqrf9GUbey+y6qoZ2C', 'StorageInfo');
// Script/src/game/common/data/StorageInfo.js

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StorageInfoClass = function () {
    function StorageInfoClass() {}
    Object.defineProperty(StorageInfoClass, "instance", {
        get: function get() {
            if (this._instance == null) {
                this._instance = new StorageInfoClass();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    StorageInfoClass.prototype.setTopScore = function (score) {};
    StorageInfoClass.prototype.setRedPackTimes = function (times) {};
    StorageInfoClass.prototype.getTopScore = function () {};
    StorageInfoClass.prototype.getRedPackTimes = function () {};
    return StorageInfoClass;
}();
exports.StorageInfo = StorageInfoClass.instance;

cc._RF.pop();