"use strict";
cc._RF.push(module, '057c0eqrf9GUbey+y6qoZ2C', 'StorageInfo');
// Script/src/game/common/data/StorageInfo.js

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GameEngine_1 = require("../GameEngine");
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
    StorageInfoClass.prototype.setTopScore = function (score) {
        var topScore = this.getTopScore();
        ;
        if (score > topScore) {
            GameEngine_1.GameEngine.localStorage.set("TopScore", score.toString());
        }
    };
    StorageInfoClass.prototype.setRedPackTimes = function (times) {
        var redPacktimes = this.getRedPackTimes() + times;
        GameEngine_1.GameEngine.localStorage.set("RedPackTimes", redPacktimes.toString());
    };
    StorageInfoClass.prototype.setRedPackMoney = function (money) {
        if (typeof money == "number") {
            var redPackMoney = this.getRedPackMoney() + money;
            GameEngine_1.GameEngine.localStorage.set("RedPackMoney", redPackMoney.toString());
        }
    };
    StorageInfoClass.prototype.getTopScore = function () {
        return Number(GameEngine_1.GameEngine.localStorage.get("TopScore")) || 0;
    };
    StorageInfoClass.prototype.getRedPackTimes = function () {
        return Number(GameEngine_1.GameEngine.localStorage.get("RedPackTimes")) || 0;
    };
    StorageInfoClass.prototype.getRedPackMoney = function () {
        return Number(GameEngine_1.GameEngine.localStorage.get("RedPackMoney")) || 0;
    };
    return StorageInfoClass;
}();
exports.StorageInfo = StorageInfoClass.instance;

cc._RF.pop();