(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/src/game/common/data/StorageInfo.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '057c0eqrf9GUbey+y6qoZ2C', 'StorageInfo', __filename);
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
        //# sourceMappingURL=StorageInfo.js.map
        