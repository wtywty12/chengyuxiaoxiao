"use strict";
cc._RF.push(module, '057c0eqrf9GUbey+y6qoZ2C', 'StorageInfo');
// Script/src/game/common/data/StorageInfo.js

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GameEngine_1 = require("../GameEngine");
var GameDataManager_1 = require("./GameDataManager");
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
    StorageInfoClass.prototype.setFirstLogin = function () {
        if (this.getFirstLogin() == true) {
            GameEngine_1.GameEngine.localStorage.set("FirstLogin", "true");
        }
    };
    StorageInfoClass.prototype.setTopScore = function (score) {
        var topScore = this.getTopScore();
        ;
        if (score > topScore) {
            if (typeof score != "number") {
                console.log("score is not number!");
                return;
            }
            wx.getOpenDataContext().postMessage({
                EventType: "2",
                EventData: { score: score, level: GameDataManager_1.GameDataManager.gameData.level }
            });
            GameEngine_1.GameEngine.localStorage.set("TopScore", score.toString());
        }
    };
    StorageInfoClass.prototype.resetRedPackTimes = function () {
        GameEngine_1.GameEngine.localStorage.set("RedPackTimes", "0");
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
    StorageInfoClass.prototype.setGameYear = function (year) {
        GameEngine_1.GameEngine.localStorage.set("GameYear", year);
    };
    StorageInfoClass.prototype.setGameMonth = function (month) {
        GameEngine_1.GameEngine.localStorage.set("GameMonth", month);
    };
    StorageInfoClass.prototype.setGameDate = function (date) {
        GameEngine_1.GameEngine.localStorage.set("GameDate", date);
    };
    StorageInfoClass.prototype.setGameAudioStatus = function (status) {
        GameEngine_1.GameEngine.localStorage.set("GameAudioStatus", status);
    };
    StorageInfoClass.prototype.addPlayTimes = function () {
        var times = this.getPlayTimes() + 1;
        GameEngine_1.GameEngine.localStorage.set("PlayTimes", times.toString());
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
    StorageInfoClass.prototype.getGameYear = function () {
        return GameEngine_1.GameEngine.localStorage.get("GameYear");
    };
    StorageInfoClass.prototype.getGameMonth = function () {
        return GameEngine_1.GameEngine.localStorage.get("GameMonth");
    };
    StorageInfoClass.prototype.getGameDate = function () {
        return GameEngine_1.GameEngine.localStorage.get("GameDate");
    };
    StorageInfoClass.prototype.getGameAudioStatus = function () {
        return GameEngine_1.GameEngine.localStorage.get("GameAudioStatus");
    };
    StorageInfoClass.prototype.getFirstLogin = function () {
        var isFirstLogin = GameEngine_1.GameEngine.localStorage.get("FirstLogin");
        return isFirstLogin == null;
    };
    StorageInfoClass.prototype.getPlayTimes = function () {
        return Number(GameEngine_1.GameEngine.localStorage.get("PlayTimes"));
    };
    return StorageInfoClass;
}();
exports.StorageInfo = StorageInfoClass.instance;

cc._RF.pop();