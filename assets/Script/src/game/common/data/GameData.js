"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConfigManager_1 = require("../ConfigManager");
var GameData = (function () {
    function GameData() {
        this._level = 1;
        this._score = 0;
        this._gametime = 60;
        this._totalGameTime = 60;
        this._playtimes = 0;
    }
    GameData.prototype.refuseData = function () {
        this._level = 1;
        this._score = 0;
        this._gametime = 60;
        this._totalGameTime = 60;
        this._playtimes = 0;
    };
    GameData.prototype.gameStart = function () {
        this._score = 0;
        this._gametime = 60;
        this._totalGameTime = 60;
    };
    GameData.prototype.addlevel = function () {
        this._level += 1;
    };
    GameData.prototype.addscore = function (value) {
        this._score += value;
    };
    GameData.prototype.addgametime = function () {
        var levelsInfo = ConfigManager_1.ConfigManager.levelsJsonMap.get(this._level);
        var value = levelsInfo.addtime || 60;
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
    Object.defineProperty(GameData.prototype, "topscore", {
        get: function () {
            return this._topscore;
        },
        set: function (_topscore) {
            this._topscore = _topscore;
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
    return GameData;
}());
exports.GameData = GameData;
