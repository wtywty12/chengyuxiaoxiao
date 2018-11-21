"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConfigManager_1 = require("../ConfigManager");
var StorageInfo_1 = require("./StorageInfo");
var GameData = (function () {
    function GameData() {
        this._level = 1;
        this._tempLevel = 1;
        this._score = 0;
        this._tempScore = 0;
        this._totalGameTime = 30;
        this._gametime = this._totalGameTime;
        this._playtimes = 0;
        this._gridEffectTime = 0.5;
        this._gridWidth = 109;
        this._gridHeight = 109;
        this._redPackTimes = 3;
    }
    GameData.prototype.refuseData = function () {
        this._tempLevel = this._level;
        this._level = 1;
        this._tempScore = this._score;
        this._score = 0;
        this._gametime = this._totalGameTime;
    };
    GameData.prototype.gameStart = function () {
        this._gametime = this._totalGameTime;
    };
    GameData.prototype.addlevel = function () {
        this._level += 1;
    };
    GameData.prototype.addscore = function (value) {
        this._score += Math.floor(value * Math.sqrt(this._playtimes || 1));
        StorageInfo_1.StorageInfo.setTopScore(this._score);
    };
    GameData.prototype.addgametime = function () {
        var levelsInfo = ConfigManager_1.ConfigManager.levelsJsonMap.get(this._level);
        var value = levelsInfo.addtime || this._totalGameTime;
        this._gametime += value;
        this._totalGameTime += value;
    };
    Object.defineProperty(GameData.prototype, "playtimes", {
        get: function () {
            return this._playtimes;
        },
        set: function (_playtimes) {
            this._playtimes = _playtimes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameData.prototype, "playerId", {
        get: function () {
            return this._playerId;
        },
        set: function (_playerId) {
            this._playerId = _playerId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameData.prototype, "level", {
        get: function () {
            return this._level;
        },
        set: function (_level) {
            this._level = _level;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameData.prototype, "templevel", {
        get: function () {
            return this._tempLevel;
        },
        set: function (_level) {
            this._tempLevel = _level;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameData.prototype, "score", {
        get: function () {
            return this._score;
        },
        set: function (_score) {
            this._score = _score;
            StorageInfo_1.StorageInfo.setTopScore(_score);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameData.prototype, "tempScore", {
        get: function () {
            return this._tempScore;
        },
        set: function (_score) {
            this._tempScore = _score;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameData.prototype, "gametime", {
        get: function () {
            return this._gametime;
        },
        set: function (_gametime) {
            this._gametime = _gametime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameData.prototype, "totalGameTime", {
        get: function () {
            return this._totalGameTime;
        },
        set: function (_totalTime) {
            this._totalGameTime = _totalTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameData.prototype, "gridEffectTime", {
        get: function () {
            return this._gridEffectTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameData.prototype, "gridGridWidth", {
        get: function () {
            return this._gridWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameData.prototype, "gridGridHeight", {
        get: function () {
            return this._gridHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameData.prototype, "redPackTimes", {
        get: function () {
            return this._redPackTimes;
        },
        set: function (times) {
            this._redPackTimes = times;
        },
        enumerable: true,
        configurable: true
    });
    return GameData;
}());
exports.GameData = GameData;
