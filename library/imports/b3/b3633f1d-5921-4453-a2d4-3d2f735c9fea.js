"use strict";
cc._RF.push(module, 'b36338dWSFEU6LUPS9zXJ/q', 'GameData');
// Script/src/game/common/data/GameData.js

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GameData = function () {
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
        get: function get() {
            return this._level;
        },
        set: function set(_level) {
            this._level = _level;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameData.prototype, "topscore", {
        get: function get() {
            return this._topscore;
        },
        set: function set(_topscore) {
            this._topscore = _topscore;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameData.prototype, "score", {
        get: function get() {
            return this._score;
        },
        set: function set(_score) {
            this._score = _score;
        },
        enumerable: true,
        configurable: true
    });
    GameData.prototype.addscore = function (value) {
        this._score += value;
    };
    Object.defineProperty(GameData.prototype, "gametime", {
        get: function get() {
            return this._gametime;
        },
        set: function set(_gametime) {
            this._gametime = _gametime;
        },
        enumerable: true,
        configurable: true
    });
    return GameData;
}();
exports.GameData = GameData;

cc._RF.pop();