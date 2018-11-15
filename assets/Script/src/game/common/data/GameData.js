"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameData = (function () {
    function GameData() {
        this._level = 1;
        this._score = 0;
        this._topscore = 0;
        this._gametime = 0;
    }
    GameData.prototype.refuseData = function () {
        this._level = 1;
        this._score = 0;
        this._topscore = 0;
        this._gametime = 0;
    };
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
    GameData.prototype.addscore = function (value) {
        this._score += value;
    };
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
    return GameData;
}());
exports.GameData = GameData;
