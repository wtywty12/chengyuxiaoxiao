"use strict";
cc._RF.push(module, '907e1+Gg5lOaZTt5ThRml6t', 'GameData');
// Script/src/game/common/data/GameData.js

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ConfigManager_1 = require("../ConfigManager");
var GameData = function () {
    function GameData() {
        this._level = 1;
        this._score = 0;
    }
    Object.defineProperty(GameData.prototype, "joinCheckSpd", {
        get: function get() {
            return this._joinCheckSpd;
        },
        set: function set(value) {
            this._joinCheckSpd = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameData.prototype, "haveRemoveGrid", {
        get: function get() {
            return this._haveRemoveGrid;
        },
        set: function set(value) {
            this._haveRemoveGrid = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameData.prototype, "nextSpdNeedCreateGrid", {
        get: function get() {
            return this._nextSpdNeedCreateGrid;
        },
        set: function set(value) {
            this._nextSpdNeedCreateGrid = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameData.prototype, "spd", {
        get: function get() {
            return this._spd;
        },
        set: function set(value) {
            this._spd = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameData.prototype, "level", {
        get: function get() {
            return this._level;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameData.prototype, "score", {
        get: function get() {
            return this._score;
        },
        enumerable: true,
        configurable: true
    });
    GameData.prototype.addLevel = function () {
        this._level += 1;
    };
    GameData.prototype.isPassGame = function () {
        return this._level == 15;
    };
    GameData.prototype.addScore = function (score) {
        this._score += score;
    };
    GameData.prototype.changeSpdData = function () {
        var nextSpd = this.spd.nextSpdId;
        if (ConfigManager_1.ConfigManager.checkPointDataMap.get(nextSpd)) {
            this.spd = ConfigManager_1.ConfigManager.checkPointDataMap.get(nextSpd);
            this._nextSpdNeedCreateGrid = 0;
            this.getPassCheck();
        }
    };
    GameData.prototype.getPassCheck = function () {
        this._nextCheckPointNeedRemoveGrid = 41 + this.spd.sumCell - this.joinCheckSpd;
        cc.log("过关条件  ：", this._nextCheckPointNeedRemoveGrid);
    };
    GameData.prototype.isPassCheck = function () {
        if (this._nextCheckPointNeedRemoveGrid <= this.haveRemoveGrid) {
            return true;
        } else {
            return false;
        }
    };
    GameData.prototype.addSpd = function () {
        if (this.nextSpdNeedCreateGrid >= this.spd.cellQua) {
            this.changeSpdData();
            return true;
        } else {
            return false;
        }
    };
    return GameData;
}();
exports.GameData = GameData;

cc._RF.pop();