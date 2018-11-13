"use strict";
cc._RF.push(module, '4b9ebl3/6hM9qNJA1E7TffB', 'GameDataManager');
// Script/src/game/common/data/GameDataManager.js

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GameData_1 = require("./GameData");
var GameDataManagerClass = function () {
    function GameDataManagerClass() {
        this._gameData = new GameData_1.GameData();
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
    GameDataManagerClass.prototype.dataChange = function (responseData) {};
    return GameDataManagerClass;
}();
exports.GameDataManager = GameDataManagerClass.instance;

cc._RF.pop();