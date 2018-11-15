"use strict";
cc._RF.push(module, '9c420E/OstExYlAmTvnIUvw', 'GameDataManager');
// Script/src/game/common/data/GameDataManager.js

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GameData_1 = require("./GameData");
var UserData_1 = require("./UserData");
var GameDataManagerClass = function () {
    function GameDataManagerClass() {
        this._gameData = new GameData_1.GameData();
        this._userData = new UserData_1.UserData();
    }
    Object.defineProperty(GameDataManagerClass, "instance", {
        get: function get() {
            if (this._instance == null) {
                this._instance = new GameDataManagerClass();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameDataManagerClass.prototype, "gameData", {
        get: function get() {
            return this._gameData;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameDataManagerClass.prototype, "userData", {
        get: function get() {
            return this._userData;
        },
        enumerable: true,
        configurable: true
    });
    GameDataManagerClass.prototype.dataChange = function (responseData) {};
    return GameDataManagerClass;
}();
exports.GameDataManager = GameDataManagerClass.instance;

cc._RF.pop();