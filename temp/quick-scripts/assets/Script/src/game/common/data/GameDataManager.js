(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/src/game/common/data/GameDataManager.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '4b9ebl3/6hM9qNJA1E7TffB', 'GameDataManager', __filename);
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
        //# sourceMappingURL=GameDataManager.js.map
        